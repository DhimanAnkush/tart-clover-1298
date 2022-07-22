import React from "react";
import { useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import axios from "axios";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/single/62d9037a242cd2f24d9f36e3`)
      .then(({ data }) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div className="m-auto flex justify-center">
        <div className="bg-white lg:w-[1116px] pt-[16px] shadow-[0_7px_8px_4px_rgba(0,0,0,0.1)] mt-5">
          <div className="px-1.5">
            <div className="flex flex-wrap mx-[-12px] border border-red-500">
              <div className=" w-4/12 flex border border-black px-[12px]"></div>
              <div className="h-[510px] w-[160px] max-h-[650px] px-[12px] border border-black"></div>
              <div className="w-2/5 flex flex-col max-w-full px-[12px] border border-black">
                <h1 className="mb-[4px]">
                  <span className="text-2xl cursor-pointer font-medium">
                    Air Kiss Powder Lipstick
                  </span>
                </h1>
                <div className="flex mb-2">
                  <div className="mr-[20px]">★★★★★</div>
                  <div>{"4.7 (55)"}</div>
                </div>
                <div className="mb-2">
                  <span className="mx-2">₹ 499.00</span>
                </div>
                <div className="mb-3 mt-1 p-[4px] bg-[#1E2125] rounded-[4px] w-[245px]">
                  <button className=" cursor-pointer h-[24px] w-[245px] text-white flex justify-center items-center">
                    <FaShoppingBag className="mr-[4px]" /> Add to Cart
                  </button>
                </div>
                <div className="mb-3 mt-1 cursor-pointer flex items-center">
                  <BsHeart className="mr-[4px]" />
                  <Link to="">Save to Wishlist</Link>
                </div>
                <div className="mb-3 mt-1 cursor-pointer flex items-center">
                  <p className="mr-[10px]">Share with friends :</p>
                  <a className="mx-[4px]" href="https://api.whatsapp.com/send/?text=SUGAR+Cosmetics+-+Check+this+out%3B+you%27ll+love+it%21+https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&type=custom_url&app_absent=0">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Whatsapp.svg"/>
                  </a>
                  <a className="mx-[4px]" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fin.sugarcosmetics.com%252Fproducts%252Fpowder-play-banana-compact%26quote%3DSUGAR%2BCosmetics&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Facebook.svg"/>
                  </a>
                  <a className="mx-[4px]" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&text=SUGAR%20Cosmetics%20-%20Check%20this%20out%3B%20you%27ll%20love%20it!">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Twitter.svg"/>
                  </a>
                  <a className="mx-[4px]" href="https://www.tumblr.com/widgets/share/tool/preview?posttype=link&title=SUGAR+Cosmetics+-+Check+this+out%3B+you%27ll+love+it%21&caption=SUGAR+Cosmetics+-+Check+this+out%3B+you%27ll+love+it%21&content=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&canonicalUrl=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&shareSource=tumblr_share_button">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Tumblr.svg"/>
                  </a>
                  <a className="mx-[4px]" href="">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Mail.svg"/>
                  </a>
                  <a className="mx-[4px]" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&title=SUGAR%20Cosmetics&summary=SUGAR%20Cosmetics%20-%20Check%20this%20out%3B%20you%27ll%20love%20it!&source=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Linkedin.svg"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
