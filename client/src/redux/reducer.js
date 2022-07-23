import { ADDPRODUCT } from './action'

const initialState = {
  products: [],
  total: 0,
  couponApplied: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDPRODUCT:
      return {
        ...state,
        products: [...payload],
      }
    case 'addTotal': {
      return {
        ...state,
        total: payload,
      }
    }
    case 'couponApplied': {
      return {
        ...state,
        couponApplied: true,
      }
    }
    default:
      return state
  }
}
