import React from 'react'
import { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'

const SingleProduct = () => {
    const [quantity,setQuantity]=useState(0)
  return (
      
           <div className="flex items-center  ">
              <div className="flex gap-x-5 w-1/2">
                <img
                  alt="product img"
                  className="w-[55px] h-[75px] "
                  src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_9814781c-2d1a-4019-ba96-94b9df6f2345.jpg?v=1648102353"
                />
                <div className="w-96 flex flex-col gap-y-2">
                  <p className=" font-bold text-[12px] text-[#575555] truncate ... w-[50%]">
                    Stroke Of Genius Heavy-Duty Kohl - 05 Black Magic (Black
                    With Silver Glitter) - DP
                  </p>
                  <div className="flex text-[#575555] text-[12px] gap-x-1">
                    <img
                      alt="img"
                      src="https://in.sugarcosmetics.com/desc-images/Wishlist.svg"
                    />
                    <p>Save to Wishlist</p>
                  </div>
                </div>
              </div>
              {/* Add to Cart Button */}
              <div className="flex cursor-pointer  h-fit  py-2  gap-x-4 lg:ml-20 ml-8 items-center box-border">
                <div>
                  <MdDeleteOutline size={20} />
                </div>
                <div className="flex gap-x-2">
                  <button
                    className="bg-black w-[19px] h-[19px] text-white rounded-full font-extrabold text-[13px]"
                    onClick={() => quantity && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <p className="text-[12px]">{quantity}</p>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-black w-[19px] h-[19px] text-white rounded-full font-extrabold text-[13px]"
                  >
                    +
                  </button>
                </div>
                <div className="text-[12px] text-[#212529]">
                  {quantity} x 149
                </div>
                <div className="text-[12px] text-[#212529]">
                  {' '}
                  = {quantity * 149}
                </div>
              </div>
            </div>
    
  )
}

export default SingleProduct