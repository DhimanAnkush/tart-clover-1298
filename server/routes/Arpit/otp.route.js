const { Router } = require("express");
const { otpSchema } = require("../../models/Arpit/otp.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const otp = Router();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_TOKEN;
const client = require("twilio")(accountSid, authToken);
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
let refreshTokens = [];
const smsKey = process.env.SMS_SECRET_KEY;

otp.post("/sendOTP", (req, res) => {
  const phone = req.body.phone;
  const otp = Math.floor(100000 + Math.random() * 900000);
  const ttl = 2 * 60 * 1000;
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`;
  const hash = crypto.createHmac("sha256", smsKey).update(data).digest("hex");
  const fullHash = `${hash}.${expires}`;
  client.messages
    .create({
      body: `Your One Time Password for Sugar Cosmetics is ${otp}`,
      from: +18125059670,
      to: phone,
    })
    .then((messages) => console.log(messages))
    .catch((error) => console.error(error));
  otpSchema.insertMany({ phone: phone, hash: fullHash, otp: otp })
  res.status(200).send({ phone: phone, hash: fullHash, otp: otp });
});

otp.post("/verifyOTP", (req, res) => {
  const phone = req.body.phone;
  const hash = req.body.hash;
  const otp = req.body.otp;
  let [hashValue, expires] = hash.split(".");

  let now = Date.now();
  if (now > parseInt(expires)) {
    return res
      .status(504)
      .send({ msg: "Request Timeout - Please try again later!" });
  }
  const data = `${phone}.${otp}.${expires}`;
  const newCalculatedHash = crypto
    .createHmac("sha256", smsKey)
    .update(data)
    .digest("hex");

  if (newCalculatedHash === hashValue) {
    const accessToken = jwt.sign({ data: phone }, JWT_AUTH_TOKEN, {
      expiresIn: "30s",
    });
    const refreshToken = jwt.sign({ data: phone }, JWT_REFRESH_TOKEN, {
      expiresIn: "30d",
    });
    refreshTokens.push(refreshToken);
    res
      .status(202)
      .cookie("accessToken", accessToken, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: "strict",
        httpOnly: true,
      })
      .cookie("authSession", true, {
        expires: new Date(new Date().getTime() + 30 * 1000),
      })
      .cookie("refreshToken", refreshToken, {
        expires: new Date(new Date().getTime() + 3557600000),
        sameSite: "strict",
        httpOnly: true,
      })
      .cookie("refreshTokenID", true, {
        expires: new Date(new Date().getTime() + 3557600000),
      })
      .send({ msg: "Device Verified", phone: phone });
  } else {
    return res.status(400).send({ verification: false, msg: "Incorrect OTP" });
  }
});

async function authenticateUSer(req, res, next) {
  const accessToken = req.cookie.accessToken;
  jwt.verify(accessToken, JWT_AUTH_TOKEN, async (err, phone) => {
    if (phone) {
      req.phone = phone;
      next();
    } else if (err.message === "TokenExpiredError") {
      return res
        .status(403)
        .send({ success: false, msg: "Access Token Expired" });
    } else {
      console.error(err);
      res.status(403).send({ err, msg: "User Not Authenticated" });
    }
  });
}

otp.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(403)
      .send({ msg: "Refresh Token Not Found! - Please Login Again" });
  if (!refreshTokens.includes(refreshToken))
    return res
      .status(403)
      .send({ msg: "Refresh Token Blocked - Please Login Again" });

  jwt.verify(refreshToken, JWT_REFRESH_TOKEN, (err, phone) => {
    if (!err) {
      const accessToken = jwt.sign({ data: phone }, JWT_AUTH_TOKEN, {
        expiresIn: "30s",
      });
      res
        .status(202)
        .cookie("accessToken", accessToken, {
          expires: new Date(new Date().getTime() + 30 * 1000),
          sameSite: "strict",
          httpOnly: true,
        })
        .cookie("authSession", true, {
          expires: new Date(new Date().getTime() + 30 * 1000),
        })
        .send({ previousSessionExpiry: true, success: true });
    } else {
      return res
        .status(403)
        .send({ success: false, msg: "Invalid Refresh Token" });
    }
  });
});

otp.get("/logout", (req, res) => {
  const phone = req.body.phone;
  res
    .clearCookie("refreshToken")
    .clearCookie("accessToken")
    .clearCookie("authSession")
    .clearCookie("refreshTokenID")
    .send(`${phone} Logout Successfully`);
});
module.exports = otp;
