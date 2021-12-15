import { combineReducers } from 'redux'

import productReducer from './productReducer'
import productAuctionReducer from './productAuctionReducer'

export default combineReducers({
  product: productReducer,
  product1: productAuctionReducer,
});