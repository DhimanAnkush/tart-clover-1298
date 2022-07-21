import React, { useState } from 'react'
import {
  MdOutlineShoppingCart,
  MdOutlineLocalShipping,
  MdDeleteOutline,
} from 'react-icons/md'
import { FaShoppingBag, FaFileInvoiceDollar } from 'react-icons/fa'
import styles from './Cart.module.css'
import { BsFillTagFill } from 'react-icons/bs'
import { AiOutlineLeft } from 'react-icons/ai'
import SingleProduct from './SingleProduct'

const Cart = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="p-10 shadow-lg p-5 rounded-lg w-[90%] mx-auto mt-[9%]">
      <div className="bg-white space-between flex gap-x-10 p-4 rounded">
        <div className="flex justify-between w-1/2">
          <div className="flex gap-x-1 items-center">
            <MdOutlineShoppingCart />
            <h1>Order Summary</h1>
          </div>
          <div className="flex gap-x-5">
            <h3 className="underline underline-offset-1">
              Cart Total : Rs. 4396.00
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
      <div className="flex justify-between gap-x-10  box-border">
        {/* Suggested Products && Cart Products */}
        <div className="w-1/2 mt-5 bg-[#faf9f9] p-5 flex flex-col gap-y-5">
          {/* Cart Added Products */}
          <div>
            <SingleProduct/>
          </div>

          {/* map suggested products */}
          <div>
            <div className="flex items-center justify-between ">
              <div className="flex gap-x-5">
                <img
                  alt="product img"
                  className="w-[55px] h-[75px] "
                  src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_9814781c-2d1a-4019-ba96-94b9df6f2345.jpg?v=1648102353"
                />
                <div className="w-96 flex flex-col justify-around">
                  <p className=" font-bold text-[12px] text-[#575555">
                    Stroke Of Genius Heavy-Duty Kohl - 05 Black Magic (Black
                    With Silver Glitter) - DP
                  </p>
                  <p className="text-[#fc2799] text-[10px] font-normal">
                    BONUS UNLOCKED!
                  </p>
                </div>
              </div>
              {/* Add to Cart Button */}
              <div className="flex cursor-pointer border-2 h-fit px-3 py-2 rounded">
                <p className="underline text-[12px] text-[#575555]">
                  +Add Item
                </p>
                <p className="text-[#fc2799] text-[12px] ">
                  ({' '}
                  <span className="line-through text-[12px] text-[#575555]">
                    ₹499
                  </span>{' '}
                  ₹149)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Total Price */}
        <div className="bg-[#faf9f9] w-1/2 p-5 mt-5 ">
          {/* Coupon code */}
          <div className="flex justify-between">
            <div className="flex text-[14px] w-1/2 items-center gap-x-2">
              <img
                alt="tag"
                src="https://in.sugarcosmetics.com/desc-images/GiftCard.svg"
              />
              <p>Gift Card/Discount Code</p>
            </div>
            <div className="bg-white pl-3 rounded-lg">
              <input
                type="text"
                placeholder="Enter Promo Code"
                className="outline-0 h-[25px]"
              />
              <button className="bg-[#ECE4DB] h-[100%] p-2 text-white">
                Apply
              </button>
            </div>
          </div>
          <div className="flex mt-5 gap-x-2">
            <img
              alt="price"
              src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
            />
            <p>
              <span className="underline">Price</span> Details
            </p>
          </div>
          {/* Price Details */}
          <div className="bg-white p-4 rounded-lg mt-5">
            <div className="flex justify-between">
              <div className="flex w-1/2 gap-x-2 items-center">
                <FaShoppingBag />
                <p>Cart Sub Total:</p>
              </div>
              <div className="">
                <p>₹ 149.00</p>
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

              <div className="">
                <p className="font-bold">₹ 198.00</p>
              </div>
            </div>
          </div>

          {/* Buttons Continue DeleveryOptions */}

          <div className="flex gap-x-5  mt-10">
            <button className="flex items-center py-2 px-4 border rounded-lg gap-x-3">
              {' '}
              <AiOutlineLeft />{' '}
              <span className="underline">Continue Shopping</span>
            </button>
            <button className="bg-black text-white text-[14px]  w-[60%] rounded-[10px]">
              Delivery Information
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
