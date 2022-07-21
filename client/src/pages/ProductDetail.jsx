import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'

const ProductDetail = () => {
  return (
    <div >
     <div className="m-auto flex justify-center">
        <div className='bg-white lg:w-[1116px] pt-[16px] shadow-[0_7px_8px_4px_rgba(0,0,0,0.1)] mt-5'>
          <div className='px-1.5'>
            <div className="flex flex-wrap mx-[-12px] border border-red-500">
              <div className=" w-4/12 flex border border-black px-[12px]">
                
              </div>
              <div className="h-[510px] w-[160px] max-h-[650px] px-[12px] border border-black"></div>
              <div className="w-2/5 flex flex-col max-w-full px-[12px] border border-black">
                <h1 className="mb-[4px]">
                  <span className="text-2xl cursor-pointer font-medium">Air Kiss Powder Lipstick</span>
                </h1>
                <div className="flex mb-2">
                  <div className="mr-[20px]">★★★★★</div>
                  <div>{'4.7 (55)'}</div>
                </div>
                <div className="mb-2">
                  <span className="mx-2">₹ 499.00</span>
                </div>
                <div className="mb-3 mt-1 cursor-pointer bg-[#1E2125] rounded-[4px] h-[24px] w-[255px] p-[4px] ">
                  <button className="h-[24px] w-[245px] text-white flex justify-center "><FaShoppingBag/> Add to Cart</button>
                </div>
                <div className="mb-3 cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
