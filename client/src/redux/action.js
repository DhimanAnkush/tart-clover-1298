import axios from "axios"
export const ADDPRODUCT= "ADDPRODUCT"



export const addProduct= (payload)=>{
 return {
    type:ADDPRODUCT,
    payload
 }
}

export const getProduct= (payload) => (dispatch) =>{
 axios.get(`https://sugar-cosmeticsapi.herokuapp.com/products/${payload}`)
 .then(({data})=>{
   //  console.log(data)
    dispatch(addProduct(data))
 })
 

}
