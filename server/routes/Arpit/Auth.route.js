const { Router } = require("express");
const crypto = require("crypto");
const auth = Router();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_TOKEN;
const client = require("twilio")(accountSid, authToken);
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
const smsKey = process.env.SMS_SECRET_KEY;

auth.post("/sendOTP", (req, res) => {
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
  res.status(200).send({ phone, hash: fullHash });
});
