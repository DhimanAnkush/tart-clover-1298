import "./styles/header.css";
import "./styles/sliderDrawer.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { Drawer } from "rsuite";
import { useState, useEffect } from "react";
export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  async function sendOTP(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/sendOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
      }),
    });
    const data = await response.json();

    console.log("data:", data);
  }
  async function verifyOTP(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/verifyOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
      }),
    });
    const data = await response.json();
    console.log("data:", data);
  }
  // Function to close drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div>
      <div id="headerForLargeScreen">
        <div className="Header">
          <div className="Header__Logo">
            <Link to="/">
              <img
                className="img"
                src="https://media.sugarcosmetics.com/upload/Logo-static.jpg"
                alt="Sugar Cosmetics Logo"
              />
            </Link>
          </div>
          <div className="Header__Search">
            <input
              id="searchItems"
              className="Header__Search__inputBox"
              type="text"
              placeholder="Search for products"
            />
            <p>Search</p>
          </div>
          <div className="Header__Login">
            <FaUserAlt style={{ color: "black", fontSize: "20px" }} />
            <a
              onClick={() => {
                setIsDrawerOpen(true);
              }}
              id="loginLink"
              className="Header__Login__P"
            >
              Login / Register
            </a>
          </div>
          <div className="Header__LikeCart">
            <div>
              <a>
                <BsHeartFill style={{ color: "#495057", fontSize: "16px" }} />
              </a>
              {/* <div className="wishlist_active"></div> */}
            </div>
            <div>
              <a>
                <FaShoppingBag style={{ color: "#495057", fontSize: "16px" }} />
              </a>
              {/* <div className="cart_active"></div> */}
            </div>
            <div>
              <TbDiscount2 style={{ color: "#495057", fontSize: "20px" }} />
            </div>
          </div>
        </div>
        <div className="navBar">
          <div className="dropdown">
            <div
              className="dropbtn"
              onClick={() => navigate("/makeup-products")}
            >
              MAKEUP <i className="fas fa-angle-down"></i>
            </div>
            <div className="navBar__content">
              <div>
                <p onClick={() => navigate("/makeup-products/lips")}>LIPS</p>
                <Link to="/makeup-products/lips">LIPSTICKS</Link>
                <Link to="/makeup-products/lips">LIP CARE</Link>
                <Link to="/makeup-products/liquid">LIQUID LIP COLOURS</Link>
                <Link to="/makeup-products/liners">LIP GLOSS & LINERS</Link>
                <Link to="/makeup-products/lips">VALUE SETS</Link>
              </div>
              <div>
                <p onClick={() => navigate("/makeup-products/face")}>FACE</p>
                <Link to="/makeup-products/face">PRIMERS</Link>
                <Link to="/makeup-products/face">FOUNDATION</Link>
                <Link to="/makeup-products/face">POWDER / COMPACT</Link>
                <Link to="/makeup-products/face">CONCEALERS & CORRECTORS</Link>
                <Link to="/makeup-products/face">BLUSH</Link>
                <Link to="/makeup-products/face">VALUE SETS</Link>
              </div>
              <div>
                <p onClick={() => navigate("/makeup-products/eye")}>EYES</p>
                <Link to="/makeup-products/eye">EYELINERS</Link>
                <Link to="/makeup-products/eye">KAJAL</Link>
                <Link to="/makeup-products/eye">EYEBROWS</Link>
                <Link to="/makeup-products/eye">MASCARA</Link>
                <Link to="/makeup-products/eye">VALUE SETS</Link>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <div
              className="dropbtn"
              onClick={() => navigate("/brush-products")}
            >
              BRUSHES<i className="fas fa-angle-down"></i>
            </div>
            <div className="navBar__content" id="navBar__content1">
              <div>
                <Link to="/brush-products/face">FACE BRUSHES</Link>
                <Link to="/brush-products/eye">EYE BRUSHES</Link>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <div
              className="dropbtn"
              onClick={() => navigate("/skincare-products")}
            >
              SKINCARE <i className="fas fa-angle-down"></i>
            </div>
            <div className="navBar__content" id="navBar__content1">
              <div>
                <Link to="/skincare-products">MOISTURIZERS</Link>
                <Link to="/skincare-products">MASKS</Link>
                <Link to="/skincare-products">SETTING MISTS</Link>
                <Link to="/skincare-products">MAKEUP REMOVER</Link>
                <Link to="/skincare-products">SKINCARE&COMBOS</Link>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <div
              className="dropbtn"
              onClick={() => navigate("/gifting-products")}
            >
              GIFTING<i className="fas fa-angle-down"></i>
            </div>
            <div className="navBar__content" id="navBar__content1">
              <div>
                <Link to="/gifting-products">SUGAR MERCH STATION</Link>
                <Link to="/gifting-products">MAKEUP KITS</Link>
                <Link to="/gifting-products">BESTSELLERS</Link>
                <Link to="/gifting-products">VALUE SETS</Link>
                <Link to="/gifting-products">SUGAR SETS</Link>
                <Link to="/gifting-products">E-GIFT CARDS</Link>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <div className="dropbtn">
              BLOG <i className="fas fa-angle-down"></i>
            </div>
            <div className="navBar__content" id="navBar__content1">
              <div>
                <a>FEATURED</a>
                <a>MAKEUP</a>
                <a>SKINCARE</a>
                <a>CARE</a>
                <a>QUIZ</a>
              </div>
            </div>
          </div>

          <div className="dropbtn">OFFERS</div>
        </div>
      </div>
      {/* ========================================= Slider Drawer ================================= */}
      <Drawer
        style={{ transition: "1s ease" }}
        className="h-[979.68px] w-[656.6px] fixed top-0 right-0 bg-white z-[100000]"
        id="drawer-container"
        placement="left"
        size="full"
        open={isDrawerOpen}
        onClose={() => closeDrawer()}
      >
        <Drawer.Header className="p-6 leading-[45px] text-white font-semibold text-[25px]">
          <Drawer.Title>Login/Sign Up</Drawer.Title>
          <div className="h-[415px] w-[590px] bg-white  m-auto mt-[12.5px] rounded-[5px] p-3">
            <div className="h-[50px] w-[70%] flex  gap-2">
              <div className=" w-[50px]">
                <img
                  className="h-full"
                  src="https://in.sugarcosmetics.com/smartphone.svg"
                  alt="mobile"
                />
              </div>
              <div className="w-full">
                <h1 style={{ fontWeight: "300" }} className="text-black">
                  Login/Sign Up Using Phone
                </h1>
              </div>
            </div>
            <div className="h-[50px] mt-[30px] flex px-[10px]">
              <div className="w-[95%]">
                <input
                  className="h-full w-full text-black"
                  type="text"
                  id="numberBox"
                  placeholder="+91xxxxxxxxxx"
                  maxLength={13}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-[50%]">
                <button
                  onClick={sendOTP}
                  id="requestButton"
                  className="h-full w-full"
                >
                  Request OTP
                </button>
              </div>
              <div className="w-[15%] ml-2 rounded-full">
                <img
                  src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
                  alt="google"
                  className="h-full w-full rounded-full cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-2 ml-3 w-[fit-content] h-[fit-content] hover:text-[#fc2779] hover:no-underline hover:cursor-default">
              <p
                id="alertOtpbox"
                className="text-[#fc2779] hover:text-[#fc2779] hover:no-underline hover:cursor-default"
              >
                Enter your phone number to request an OTP
              </p>
            </div>
            <div
              className="border border-gray-400 mt-2 ml-3 w-[90%] hover:no-underline hover:cursor-default"
              style={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            ></div>

            <div className="h-[180px] w-[300px] ml-3 mt-2">
              <div className="h-[fit-content] hover:no-underline hover:cursor-default hover:text-[black]">
                <p
                  id="otpTextbox1"
                  className="text-black hover:no-underline hover:cursor-default hover:text-[black]"
                >
                  Enter the 6 digit OTP received on your phone.
                </p>
              </div>
              <div className="h-[fit-content]">
                <input
                  maxLength={6}
                  type="text"
                  placeholder="Enter OTP"
                  id="otpTextbox2"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="h-full w-full p-2 text-black"
                />
              </div>
              <div className="mt-4 h-[50px] w-[200px]">
                <button
                  onClick={verifyOTP}
                  id="verifyOtpBox"
                  className="bg-[#fdaac9] h-full w-full"
                >
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-black leading-6 align-middle p-[15px] text-[14px] hover:text-[black] hover:no-underline hover:cursor-default">
            <p className="text-black hover:text-[black] hover:no-underline hover:cursor-default">
              Registering for this site allows you to access your order status
              and history. Just fill in the fields below, and we'll get a new
              account set up for you in no time. We will only ask you for
              information necessary to make the purchase process faster and
              easier.
            </p>
            <br />
            <p
              style={{ fontWeight: "400" }}
              className="text-[12px] hover:text-[black] hover:no-underline hover:cursor-default"
            >
              {" "}
              By Signing up or logging in, you agree to our{" "}
              <span className="underline font-semibold cursor-pointer">
                Terms and Conditions
              </span>
            </p>
          </div>
        </Drawer.Header>
      </Drawer>
    </div>
  );
};
