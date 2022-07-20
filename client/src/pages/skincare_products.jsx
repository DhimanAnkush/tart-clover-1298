import React from 'react'

const skincare_products = () => {
    let products= useSelector((state)=>state.products)
    
    let dispatch= useDispatch()
    useEffect(()=>{
      dispatch(getProduct('skincare'))
    },[])

  return (
    <div className={styles.productcontainer} >
       
      {
        products.map((el,index)=>{
          return <Product key={index} {...el}/>
        })
      }

    </div>
  )
}

export default skincare_products