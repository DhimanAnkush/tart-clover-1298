import axios from "axios"
export const ADDPRODUCT= "ADDPRODUCT"



const addProduct= (payload)=>{
 return {
    type:ADDPRODUCT,
    payload
 }
}

export const getProduct= (payload) => (dispatch) =>{
 axios.get(`http://localhost:8080/products/${payload}`)
 .then(({data})=>{
    console.log(data)
    dispatch(addProduct(data))
 })
 

}
