import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { BsFillTagFill } from 'react-icons/bs'
import { FaFileInvoiceDollar, FaShoppingBag } from 'react-icons/fa'
import {
  MdDeleteOutline,
  MdOutlineClose,
  MdOutlineLocalShipping,
} from 'react-icons/md'
import SingleProduct from './SingleProduct'

const Checkout = () => {
  const [quantity, setQuantity] = useState(0)
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

            {/* Product div */}
            <div>
              <SingleProduct />
            </div>
          </div>

          {/* right side Contact information */}
          <div className="w-1/2 box-border p-3 text-[13px] text-[#6C757D] bg-inherit gap-y-2 h-fit mt-5 flex flex-col bg-[#f5f5f5] rounded-lg">
            <div className="flex justify-between">
              <p>
                Full Name :{' '}
                <span className="font-bold text-[14px] text-black">Naga</span>
              </p>
              <p>
                Phone Number :{' '}
                <span className="font-bold text-black">6281773036</span>
              </p>
            </div>
            <div>
              <p>
                Email{' '}
                <span className="font-bold text-[14px] text-black">
                  {' '}
                  leadernaga90@gmail.com
                </span>
              </p>
            </div>
            <div>
              <div className="bg-[#D3D3D3] px-5 py-2 w-fit float-right cursor-pointer rounded-lg">
                + Add New Address
              </div>
            </div>
            {/* Proceed Offer Pricing Buttons */}
            <div>
              <div className="flex gap-x-5  mt-10">
                <button className="flex items-center py-2 px-4 border rounded-lg gap-x-3">
                  {' '}
                  <AiOutlineLeft />{' '}
                  <span className="underline text-black">
                    Offers and Pricing
                  </span>
                </button>
                <button className="bg-black text-white text-[14px]  w-[60%] rounded-[10px] font-bold text-white">
                  Proceed to Payment (Rs. 198.00)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen z-[100] bg-white absolute top-0 opacity-30">
        <div className="bg-white  w-[60%] h-[60%] m-auto p-4 rounded-lg absolute top-20  left-0 right-0 ">
          <div className="flex ">
            <div className="flex items-center gap-x-2">
              <img src="https://in.sugarcosmetics.com/desc-images/Add_Address.svg" />
              <p>Add New Delivery Address</p>
            </div>
            <MdOutlineClose className="ml-auto" size={25} />
          </div>

          <form className="text-[#6C757D] mt-5 flex flex-col gap-y-5 ">
            {/* First Name & Last Name */}
            <div className="flex gap-x-5">
              <div class="flex flex-col gap-y-2 w-1/2">
                <label for="name" className="text-[13px]">
                  First Name<sup className="text-pink">*</sup>
                </label>
                <input
                  placeholder="Enter First Name"
                  type="text"
                  name="name"
                  id="name"
                  required
                  class="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                />

                <p class="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px]">
                  Please Enter Your First Name
                </p>
              </div>
              <div class="flex flex-col gap-y-2 w-1/2">
                <label for="name" className="text-[13px]">
                  Last Name<sup className="text-pink">*</sup>
                </label>
                <input
                  placeholder="Enter Last Name"
                  type="text"
                  name="name"
                  id="name"
                  required
                  class="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                />

                <p class="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px] font-bold">
                  Please Enter Your Last Name
                </p>
              </div>
            </div>

            {/* Phone Number        */}
            <div>
              <div class="flex flex-col gap-y-2 ">
                <label for="Number" className="text-[13px]">
                  Phone Number<sup className="text-pink">*</sup>
                </label>
                <input
                  placeholder="Enter Your Phone Number"
                  type="text"
                  name="Number"
                  id="Number"
                  required
                  class="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                />

                <p class="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px]">
                  Please Enter Your Phone Number
                </p>
              </div>
            </div>

            {/* Address Div */}
            <div>
              <div class="flex flex-col gap-y-2 ">
                <label for="Address" className="text-[13px]">
                  Address<sup className="text-pink">*</sup>
                </label>
                <input
                  placeholder="Enter Your Address"
                  type="text"
                  name="Address"
                  id="Address"
                  required
                  class="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                />

                <p class="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px]">
                  Please Enter Your Address
                </p>
              </div>
            </div>

            {/* Pincode Details */}

            <div className="flex gap-x-5">
              <div class="flex flex-col gap-y-2 w-1/4 ">
                <label for="Pincode" className="text-[13px]">
                  Pincode<sup className="text-pink">*</sup>
                </label>
                <input
                  placeholder="Enter Your Pincode"
                  type="text"
                  name="Pincode"
                  id="Pincode"
                  required
                  class="peer text-[13px] outline-0 border-b border-[#eaeaec]-500"
                />

                <p class="invisible peer-invalid:visible text-[#ff0000] font-light text-[12px]">
                  Please Enter A Valid Pincode
                </p>
              </div>
              <div className="flex items-center">
                <button className="bg-black text-[#ffff] text-[12px] px-4 py-1 rounded-lg">
                  Get Details
                </button>
              </div>
            </div>

            {/* City State Country */}
            <div className="h-5 ">
              <input type="text" className="disabled:opacity-75" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Checkout
