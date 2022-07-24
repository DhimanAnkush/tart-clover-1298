import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SingleProduct = ({ props, setTotal, setCartData,total}) => {
  const [quantity, setQuantity] = useState(props.quantity)
  const [product, setProduct] = useState(props)
  const dispatch = useDispatch()

  const notify = (message)=>toast(message)

  const handleQuantity = async (type) => {
    if (type == 'decrement') {
      if (product.quantity == 1) {
        alert('cant make quantity below one')
        return
      }
    }

    axios
      .put(`http://localhost:8080/cart/${props._id}/${type}`)
      .then((data) => {
        setProduct(data.data)
        notify(`quantity successfully ${type}ed`)
        if (type == 'increment') {
          setTotal((state) => state + data.data.product.price)
        } else {
          setTotal((state) => state - data.data.product.price)
        }
        dispatch({ type: 'addTotal', payload: total })
      })
      .catch(console.log)
  }

  const handleDelete = async (type) => {
    axios
      .delete(`http://localhost:8080/cart/${props._id}`)
      .then(({ data }) => {
        setTotal((state) => state - product.product.price * product.quantity)

        setCartData((state) => state.filter((elm) => elm._id != props._id))
        dispatch({ type: 'addTotal', payload: total })
        notify("product deleted successfully")
      })
      .catch(console.log)
  }

  useEffect(() => {
    setTotal((state) => state + product.product.price * product.quantity)
  }, [])

  
  return (
    <div className="flex items-center flex-col lg:flex-row ">
      <div className="flex gap-x-5 ">
        <img
          alt="product img"
          className="w-[55px] h-[75px] "
          src={product.product.image}
        />
        <div className=" flex flex-col gap-y-2">
          <p className=" font-bold text-[12px] text-[#575555] truncate ... w-[50%]">
            {product.product.title}
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
          <MdDeleteOutline onClick={() => handleDelete()} size={20} />
        </div>
        <div className="flex gap-x-2">
          <button
            className="bg-black w-[19px] h-[19px] text-white rounded-full font-extrabold text-[13px]"
            onClick={() => handleQuantity('decrement')}
          >
            -
          </button>
          <p className="text-[12px]">{product.quantity}</p>
          <button
            onClick={() => handleQuantity('increment')}
            className="bg-black w-[19px] h-[19px] text-white rounded-full font-extrabold text-[13px]"
          >
            +
          </button>
        </div>
        <div className="text-[12px] text-[#212529]">
          {product.quantity} x {product.product.price}
        </div>
        <div className="text-[12px] text-[#212529]">
          {' '}
          = {product.quantity * product.product.price}
        </div>
      </div>
       <ToastContainer />
    </div>
  )
}

export default SingleProduct
