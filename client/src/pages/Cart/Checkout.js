import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
import {
  FaFileInvoiceDollar,
  FaLessThanEqual,
  FaShoppingBag,
} from "react-icons/fa";
import {
  MdDeleteOutline,
  MdOutlineClose,
  MdOutlineLocalShipping,
} from "react-icons/md";
import SingleProduct from "./SingleProduct";
import IndianPincode from "india-pincode-lookup";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [quantity, setQuantity] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [address, setAddress] = useState({});
  const [pinDetails, setPinDetails] = useState({});
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const coupon = useSelector((state) => state.couponApplied);

  const notify = (msg) => toast(msg);

  const rTotal = useSelector((state) => state.total);

  const handlePincode = async (value) => {
    var pin = IndianPincode.lookup(value);
    // console.log(pin, 'pindetails')
    if (pin.length > 1000 || pin.length == 0) {
      alert("Enter Valid Pincode");
      return;
    }
    setPinDetails({
      city: pin[0].districtName,
      state: pin[0].stateName,
      taluk: pin[0].taluk,
      post: pin[0].officeName,
    });
  };
  let user = JSON.parse(localStorage.getItem("userOTP"));

  const handleCart = async () => {
    try {
      const res = await fetch(
        `https://sugar-cosmeticsapi.herokuapp.com/cart/${user.userID}`
      );
      const data = await res.json();

      setCartData(data);
    } catch (e) {
      console.log(e);
      notify("network issue or invalid user");
    }
  };

  const handleAddress = async (method) => {
    let obj = { ...address, user: user.userID };
    console.log(obj, "obj");
    if (method != "get") {
      method.preventDefault();
      delete obj._id;
      setAddress({ ...obj });
      // setAddress(address)
      console.log("address:", address);

      axios
        .post(`https://sugar-cosmeticsapi.herokuapp.com/address`, obj)
        .then(({ data }) => {
          setToggle(false);
          setAddress(data);
          notify("address successfully added");
        })
        .catch(() => {
          notify("cant add address something went wrong");
        });
    } else {
      axios
        .get(`https://sugar-cosmeticsapi.herokuapp.com/address/${user.userID}`)
        .then(({ data }) => setAddress(data))
        .catch(() => {
          notify("cant get the address invalid user or network issue");
        });
    }
  };

  useEffect(() => {
    handleCart();
    handleAddress("get");

    // console.log(coupon, 'coupon')
  }, []);

  const initPayment = (data) => {
    const options = {
      key: "",
      amount: data.amount,
      currency: data.currency,
      name: "SUGAR Cosmetics",
      description: "You Total Amount",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL =
            "https://sugar-cosmeticsapi.herokuapp.com/verify";
          const { data } = await axios.post(verifyURL, response);
          console.log("data:", data);
        } catch (err) {
          console.log("err:", err);
        }
      },
      theme: {
        color: "#322A2A",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderURL =
        "https://sugar-cosmeticsapi.herokuapp.com/orders";
      const { data } = await axios.post(orderURL, { amount: total });
      console.log("data:", data);
      initPayment(data.data);
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <>
      <div className="w-[90%] bg-white border shadow-lg m-auto mt-20 p-4 rounded-[15px]">
        <div className="flex">
          <div className="flex w-1/2 gap-x-1">
            <img
              src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
              alt=""
            />
            <p className="text-[13px] text-[#6C757D]">
              <span className="underline">Price</span> Details
            </p>
          </div>
          <div className="flex gap-x-1">
            <img
              src="https://in.sugarcosmetics.com/desc-images/CustomerInformation.svg"
              alt=""
            />
            <p className="text-[13px] text-[#6C757D]">
              <span className="underline">Contact</span> Information
            </p>
          </div>
        </div>
        <div className="flex">
          {/* Left side Price Details && Product Details Div */}
          <div className="w-1/2">
            {/* Price Details div */}
            <div className="bg-white p-4 rounded-lg mt-5">
              <div className="flex justify-between">
                <div className="flex w-1/2 gap-x-2 items-center">
                  <FaShoppingBag />
                  <p>Cart Sub Total:</p>
                </div>
                <div className="">
                  <p>₹ {total}.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex w-1/2 gap-x-2 items-center">
                  <MdOutlineLocalShipping />
                  <p>Shipping Cost:</p>
                </div>
                <div className="">
                  <p>₹ 49.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex w-1/2 gap-x-2 items-center">
                  <BsFillTagFill />
                  <p>Discount Applied:</p>
                </div>
                <div className="">
                  <p>₹ {coupon ? Math.floor((total / 100) * 30) : "0"}.00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2">
                  <div className="flex  gap-x-2 items-center">
                    <FaFileInvoiceDollar />
                    <p>Amount Payable:</p>
                  </div>
                  <p className="text-[12px] ml-5">Including ₹22.73 in taxes</p>
                </div>

                <div className="">
                  <p className="font-bold">
                    ₹{" "}
                    {coupon ? Math.floor((total / 100) * 70 + 49) : total + 49}
                    .00
                  </p>
                </div>
              </div>
            </div>

            {/* Product div */}
            <div>
              {cartData.length > 0 &&
                cartData.map((elm) => {
                  return (
                    <SingleProduct
                      props={elm}
                      setTotal={setTotal}
                      setCartData={setCartData}
                      total={total}
                      key={elm._id}
                    />
                  );
                })}
            </div>
          </div>

          {/* right side Contact information */}
          <div className="w-1/2 box-border p-3 text-[13px] text-[#6C757D] bg-inherit gap-y-2 h-fit mt-5 flex flex-col bg-[#f5f5f5] rounded-lg">
            <div className="flex justify-between">
              <p>
                Full Name :{" "}
                <span className="font-bold text-[14px] text-black">
                  {address.Fname || "NA"}
                </span>
              </p>
              <p>
                Phone Number :{" "}
                <span className="font-bold text-black">
                  {address.PhoneNumber || "NA"}
                </span>
              </p>
            </div>
            <div>
              <p>
                Email{" "}
                <span className="font-bold text-[14px] text-black">
                  {" "}
                  {address.Email || "NA"}
                </span>
              </p>
            </div>
            <div>
              <div
                onClick={() => setToggle(!toggle)}
                className="bg-[#D3D3D3] px-5 py-2 w-fit float-right cursor-pointer rounded-lg"
              >
                + Add New Address
              </div>
            </div>
            {/* Proceed Offer Pricing Buttons */}
            <div>
              <div className="flex gap-x-5  mt-10">
                <button className="flex items-center py-2 px-4 border rounded-lg gap-x-3">
                  {" "}
                  <AiOutlineLeft />{" "}
                  <span className="underline text-black">
                    Offers and Pricing
                  </span>
                </button>
                <button
                  onClick={handlePayment}
                  className="bg-black text-white text-[14px]  w-[60%] rounded-[10px] font-bold"
                >
                  Proceed to Payment (Rs. {total})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toggle && (
        <div className="w-screen h-screen z-[40]   absolute top-0 ease-in duration-300">
          <div className="bg-black w-screen h-screen opacity-60 "></div>
          <div className="bg-white  w-[60%] h-fit m-auto p-4 rounded-lg absolute top-20  left-0 right-0 opacity-100">
            <div className="flex ">
              <div className="flex items-center gap-x-2">
                <img src="https://in.sugarcosmetics.com/desc-images/Add_Address.svg" />
                <p>Add New Delivery Address</p>
              </div>
              <MdOutlineClose
                className="ml-auto cursor-pointer"
                size={25}
                onClick={() => setToggle(false)}
              />
            </div>

            <form
              onSubmit={(e) => handleAddress(e)}
              className="text-[#6C757D] mt-5 flex flex-col gap-y-5 "
            >
              {/* First Name & Last Name */}
              <div className="flex gap-x-5">
                <div className="flex flex-col gap-y-2 w-1/2">
                  <label for="name" className="text-[13px]">
                    First Name<sup className="text-pink">*</sup>
                  </label>
                  <input
                    placeholder="Enter First Name"
                    type="text"
                    name="Fname"
                    id="name"
                    required
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                  />

                  <p className="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px]">
                    Please Enter Your First Name
                  </p>
                </div>
                <div className="flex flex-col gap-y-2 w-1/2">
                  <label for="name" className="text-[13px]">
                    Last Name<sup className="text-pink">*</sup>
                  </label>
                  <input
                    placeholder="Enter Last Name"
                    type="text"
                    name="Lname"
                    id="name"
                    required
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                  />

                  <p className="invisible peer-invalid:visible text-[#ff0000] text-[12px] font-bold">
                    Please Enter Your Last Name
                  </p>
                </div>
              </div>

              {/* Phone Number        */}
              <div>
                <div className="flex flex-col gap-y-2 ">
                  <label for="Number" className="text-[13px]">
                    Phone Number<sup className="text-pink">*</sup>
                  </label>
                  <input
                    placeholder="Enter Your Phone Number"
                    type="text"
                    name="PhoneNumber"
                    id="Number"
                    required
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                  />

                  <p className="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px]">
                    Please Enter Your Phone Number
                  </p>
                </div>
              </div>

              {/* Address Div */}
              <div>
                <div className="flex flex-col gap-y-2 ">
                  <label for="Address" className="text-[13px]">
                    Address<sup className="text-pink">*</sup>
                  </label>
                  <input
                    placeholder="Enter Your Address"
                    type="text"
                    name="Line1"
                    id="Address"
                    required
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                  />

                  <p className="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px]">
                    Please Enter Your Address
                  </p>
                </div>
              </div>

              {/* Pincode Details */}

              <div className="flex gap-x-5">
                <div className="flex flex-col gap-y-2 w-1/4 ">
                  <label for="Pincode" className="text-[13px]">
                    Pincode<sup className="text-pink">*</sup>
                  </label>
                  <input
                    placeholder="Enter Your Pincode"
                    type="text"
                    name="PinCode"
                    id="Pincode"
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    className="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                  />

                  <p className="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px]">
                    Please Enter A Valid Pincode
                  </p>
                </div>
                <div className="flex items-center">
                  <div
                    className="bg-black text-[#ffff] text-[12px] px-4 py-1 rounded-lg cursor-pointer"
                    onClick={() => handlePincode(address.PinCode)}
                  >
                    Get Details
                  </div>
                </div>
              </div>

              {/* City State Country */}
              <div className="h-5">
                <input
                  disabled
                  value={pinDetails.post}
                  name="post"
                  type="text"
                  className="text-[13px] outline-0 border-b border-[#eaeaec]-500 "
                  placeholder="post"
                  onChange={(e) =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  }
                />
                <input
                  disabled
                  value={pinDetails.city}
                  type="text"
                  name="city"
                  className="text-[13px] outline-0 border-b border-[#eaeaec]-500 "
                  placeholder="city"
                  onChange={(e) =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  }
                />
                <input
                  disabled
                  value={pinDetails.state}
                  type="text"
                  name="state"
                  className="text-[13px] outline-0 border-b border-[#eaeaec]-500 "
                  placeholder="state"
                  onChange={(e) =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  }
                />
              </div>

              {/* Save & Cancel Buttons */}
              <div className="flex justify-center gap-x-5">
                <input
                  type="submit"
                  className="bg-[#fc2779] text-[#ffff] py-1 px-4 rounded-lg font-bold cursor-pointer"
                  value="Save and use this Address"
                />
                <div
                  onClick={() => setToggle(!toggle)}
                  className="bg-black text-[#ffff] py-1 px-4 rounded-lg font-bold cursor-pointer"
                >
                  Cancel
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Checkout;
