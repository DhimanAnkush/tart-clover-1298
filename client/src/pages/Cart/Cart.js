import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  MdOutlineShoppingCart,
  MdOutlineLocalShipping,
  MdDeleteOutline,
} from "react-icons/md";
import { FaShoppingBag, FaFileInvoiceDollar } from "react-icons/fa";
import styles from "./Cart.module.css";
import { BsFillTagFill } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coupon = useSelector((state) => state.couponApplied);
  const [couponcode, setCouponcode] = useState("");
  const notify = (message) => toast(message);

  const handleDiscount = () => {
    if (couponcode != "sugar30" && couponcode != "SUGAR30") {
      notify("invalid Coupon Code");
      return;
    }

    if (coupon) {
      coupon("coupon already applied");
      return;
    }
    dispatch({ type: "couponApplied", payload: true });

    setTotal((total / 100) * 70);
    notify("30% discount applied");
  };

  const handleCart = async () => {
    const user = JSON.parse(localStorage.getItem("userOTP"));
    // console.log('user:', user)
    try {
      const res = await fetch(`https://sugar-cosmeticsapi.herokuapp.com/cart/${user.userID}`);
      const data = await res.json();

      setCartData(data);
    } catch (e) {
      notify("network issue or invalid user");
      // console.log(e);
    }
  };

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <>
      <div className="p-[60px] shadow-lg rounded-lg w-[90%] mx-auto mt-[3%] text-[12px] lg:text-[14px]">
        <div className="bg-white space-between flex gap-x-10 p-4 rounded">
          <div className="flex justify-between w-1/2">
            <div className="flex gap-x-1 items-center">
              <MdOutlineShoppingCart />
              <h1>Order Summary</h1>
            </div>
            <div className="flex gap-x-5">
              <h3 className="underline underline-offset-1">
                Cart Total : Rs. {total}.00
              </h3>
            </div>
          </div>

          <div className="flex  w-1/2">
            <div className="flex gap-x-2">
              <img
                alt="offers img"
                src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
              />
              Offers and Price Details
            </div>
            <div></div>
          </div>
        </div>
        {/* Products && payment Div */}
        <div className="flex  gap-x-10  box-border flex-col md:flex-row justify-center ">
          {/* Suggested Products && Cart Products */}
          <div className=" md:w-1/2 mt-5 bg-[#faf9f9] p-5 flex flex-col gap-y-5">
            {/* Cart Added Products */}
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

            {/* map suggested products */}
            <div>
              <div className="flex items-center justify-between w-[100%]">
                <div className="flex gap-x-3 w-[50%] ">
                  <img
                    alt="product img"
                    className="w-[55px] h-[75px] "
                    src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_9814781c-2d1a-4019-ba96-94b9df6f2345.jpg?v=1648102353"
                  />
                  <div className="w-[50%] flex flex-col justify-around truncate">
                    <p className=" font-bold text-[12px] text-[#575555] ">
                      Stroke Of Genius Heavy-Duty Kohl - 05 Black Magic (Black
                      With Silver Glitter) - DP
                    </p>
                    <p className="text-[#fc2799] text-[10px] font-normal">
                      BONUS UNLOCKED!
                    </p>
                  </div>
                </div>
                {/* Add to Cart Button */}
                <div className="flex cursor-pointer border-2 h-fit px-3 py-2 rounded w-fit ">
                  <p className="underline text-[12px] text-[#575555]">
                    +Add Item
                  </p>
                  <p className="text-[#fc2799] text-[12px] ">
                    ({" "}
                    <span className="line-through text-[12px] text-[#575555]">
                      ₹499
                    </span>{" "}
                    ₹149)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment & Total Price */}
          <div className="bg-[#faf9f9] md:w-1/2 p-5 mt-5 ">
            {/* Coupon code */}
            <div className="flex justify-between flex-col gap-y-2 lg:flex-row lg:w-[100%]">
              <div className="flex text-[14px]  items-center gap-x-2 lg:w-[50%]">
                <img
                  alt="tag"
                  src="https://in.sugarcosmetics.com/desc-images/GiftCard.svg"
                />
                <p className="md:text-[12px]">Gift Card/Discount Code</p>
              </div>
              <div className="bg-white pl-3 rounded-lg  h-fit lg:w-[50%]">
                <input
                  type="text"
                  placeholder="Use sugar30 Get 30% discount"
                  className="outline-0 h-[100%] placeholder:text-[12px] w-[70%] placeholder:md:text-[10px] "
                  onChange={(e) => setCouponcode(e.target.value)}
                />
                <button
                  onClick={() => handleDiscount()}
                  className="bg-[#ECE4DB] h-[100%] p-2 text-white w-[30%] md:text-[12px]"
                >
                  Apply
                </button>
                <ToastContainer />
              </div>
            </div>
            <div className="flex mt-5 gap-x-2">
              <img
                alt="price"
                src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
              />
              <p >
                <span className="underline">Price</span> Details
              </p>
            </div>
            {/* Price Details */}
            <div className="bg-white p-4 rounded-lg mt-5 text-[12px] lg:text-[14px] flex gap-y-2 flex-col">
              <div className="flex justify-between">
                <div className="flex w-1/2 gap-x-2 items-center text-[12px] lg:text-[14px]">
                  <FaShoppingBag />
                  <p>Cart Sub Total:</p>
                </div>
                <div className="text-[12px] lg:text-[14px]">
                  <p>₹ {total}.00</p>
                </div>
              </div>

              <div className="flex justify-between text-[12px] lg:text-[14px]">
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
                  <p>₹ 0.00</p>
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

                <div className="text-[12px] lg:text-[14px]">
                  <p className="font-bold">₹ {total + 49}.00</p>
                </div>
              </div>
            </div>

            {/* Buttons Continue DeleveryOptions */}

            <div className="flex gap-x-5  mt-10 text-[12px] lg:text-[14px]">
              <button
                onClick={() => navigate("/brush-products")}
                className="flex items-center py-2 px-4 border rounded-lg gap-x-3"
              >
                {" "}
                <AiOutlineLeft />{" "}
                <span className="underline">Continue Shopping</span>
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "addTotal", payload: total });
                  navigate("/checkout");
                }}
                className="bg-black text-white text-[14px]  w-[60%] rounded-[10px]"
              >
                Delivery Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
