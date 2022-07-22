import { ADDPRODUCT } from "./action"


const initialState= {
    products:[]
}




export default (state = initialState, { type, payload }) => {
  switch (type) {
  case ADDPRODUCT:
    return{
        ...state,products:[...payload]
    }
  default:
    return state
  }
}
