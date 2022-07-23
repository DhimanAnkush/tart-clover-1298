// import styled from "styled-components";
import React, { useState } from "react";
// import ReactImageMagnify from "react-image-magnify";
import { useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import {  useParams} from 'react-router-dom'
import axios from "axios";
import { Link } from "react-router-dom";
import fix1 from '../assets/fix1.webp'
import fix2 from '../assets/fix2.webp'
import fix3 from '../assets/fix3.webp'
import fix4 from '../assets/fix4.webp'



const ProductDetail = () => {
  const [addedcart,setAddedCart] = useState(false);
  const [dp, setDp] = useState('')
  const [pro, setPro]  = useState({})
  const params = useParams()
  const {id} = params;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/single/${id}`)
      .then(({ data }) => {
        setPro(data)
        setDp(data.image)
        // console.log(data)
      });
  }, []);

  const handleImgChange = (img) =>{
    console.log(img)
    setDp(img)
  }

  const handleaddCart= ()=>{
    axios.post(`http://localhost:8080/cart`,{user:"62dba5200958bae1b7664da0",product:id,quantity:1})
    setAddedCart(true)
  }

  return (
    <div>
      <div className="m-auto flex justify-center">
        <div className="bg-white lg:w-[1116px] pt-[16px] shadow-[0_7px_8px_4px_rgba(0,0,0,0.1)] mt-10">
          <div className="px-1.5">
            <div className="flex flex-wrap mx-[-12px] ">
              <div className=" w-4/12 flex  px-[12px]">
                <div className="z-2">
                  <div className="relative">
                    <img  className='w-[293px] h-[400px]' src={dp} alt="" />
                    {/* <ReactImageMagnify 
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: false,
                      sizes:
                        "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                      width: 293,
                      height: 400,
                      src: dp,
                    },
                    largeImage: {
                      src: dp,
                      width: 550,
                      height: 550,
                    },
                    enlargedImageContainerDimensions: {
                      width: "140%",
                      height: "110%",
                    },
                  }}
                /> */}

                  </div>
                </div>
              </div>
              <div className="h-[510px] w-[160px] max-h-[650px] px-[12px]  cursor-pointer flex flex-col items-center">
                <img className='my-2 h-[115px] w-[84px]' src={pro.image?pro.image:""} alt="" onClick={(e)=> handleImgChange(pro.image)}/>
                <img className='my-2 h-[115px] w-[84px]' src={fix1} alt="" onClick={(e)=> handleImgChange(fix1)}/>
                <img className='my-2 h-[115px] w-[84px]' src={fix2} alt="" onClick={(e)=> handleImgChange(fix2)}/>

                
              </div>
              <div className="w-2/5 flex flex-col max-w-full px-[12px] ">
                <h1 className="mb-[4px]">
                  <span className="text-2xl cursor-pointer font-medium">
                    {pro.title?pro.title:""}
                  </span>
                </h1>
                <div className="flex items-center mb-2">
                  <div className="mr-[20px] text-yellow-300 text-2xl">★★★★★</div>
                  {/* <span data-index="4" data-forhalf="★" className="relative overflow-hidden text-gray-400 text-2xl box-content">★</span> */}
                  <div>{pro.rating?pro.rating:""}  {pro.review?pro.review:""}</div>
                </div>
                <div className="mb-2">
                  <span className="mx-2">₹ {pro.price?pro.price:""}</span>
                </div>
                <div className="mb-3 mt-1 p-[4px] bg-[#1E2125] rounded-[4px] w-[245px]">
                  {!addedcart?  (<button className=" cursor-pointer h-[24px] w-[245px] text-white flex justify-center items-center" 
                  onClick={handleaddCart}
                  >
                    <FaShoppingBag className="mr-[4px]" /> Add to Cart
                  </button>):(<h1>Product Added to Cart!</h1>)}
                
                </div>
                <div className="mb-3 mt-1 cursor-pointer flex items-center">
                  <BsHeart className="mr-[4px]" />
                  <Link to="">Save to Wishlist</Link>
                </div>
                <div className="mb-3 mt-1 cursor-pointer flex items-center">
                  <p className="mr-[10px]">Share with friends :</p>
                  <a className="mx-[4px]"  href="https://api.whatsapp.com/send/?text=SUGAR+Cosmetics+-+Check+this+out%3B+you%27ll+love+it%21+https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&type=custom_url&app_absent=0" target="_blank">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Whatsapp.svg"/>
                  </a>
                  <a className="mx-[4px]" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fin.sugarcosmetics.com%252Fproducts%252Fpowder-play-banana-compact%26quote%3DSUGAR%2BCosmetics&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB" target="_blank">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Facebook.svg"/>
                  </a>
                  <a className="mx-[4px]" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&text=SUGAR%20Cosmetics%20-%20Check%20this%20out%3B%20you%27ll%20love%20it!">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Twitter.svg"/>
                  </a>
                  <a className="mx-[4px]" href="https://www.tumblr.com/widgets/share/tool/preview?posttype=link&title=SUGAR+Cosmetics+-+Check+this+out%3B+you%27ll+love+it%21&caption=SUGAR+Cosmetics+-+Check+this+out%3B+you%27ll+love+it%21&content=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&canonicalUrl=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&shareSource=tumblr_share_button" target="_blank">
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Tumblr.svg"/>
                  </a>
                  <a className="mx-[4px]" >
                    <img className="h-[22px] w-[22px]" src="https://in.sugarcosmetics.com/sharebtn/Mail.svg"/>
                  </a>
                  <a className="mx-[4px]" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact&title=SUGAR%20Cosmetics&summary=SUGAR%20Cosmetics%20-%20Check%20this%20out%3B%20you%27ll%20love%20it!&source=https%3A%2F%2Fin.sugarcosmetics.com%2Fproducts%2Fpowder-play-banana-compact" target="_blank">
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


// <SliderWrapper>
//                 <SideImgDiv>
//                   <Img src={user.image_url} />
//                 </SideImgDiv>
//                 <SideImgDiv>
//                   <Img src={user.image_url} />
//                 </SideImgDiv>
//                 <SideImgDiv>
//                   <Img src={user.image_url} />
//                 </SideImgDiv>
//                 <SideImgDiv>
//                   <Img src={user.image_url} />
//                 </SideImgDiv>
//                 <SideImgDiv>
//                   <Img src={user.image_url} />
//                 </SideImgDiv>
//               </SliderWrapper>
// <SideImgArrow />