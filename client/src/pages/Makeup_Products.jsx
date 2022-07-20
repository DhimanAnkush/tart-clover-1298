import React from 'react'

const Makeup_Products = () => {
 
    let products= useSelector((state)=>state.products)
    
    let dispatch= useDispatch()
    useEffect(()=>{
      dispatch(getProduct('makeup'))
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

export default Makeup_Products