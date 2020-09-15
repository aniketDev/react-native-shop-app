import React from 'react';
import { combineReducers } from 'redux';
import ProductsReducer from './products';
import CartReducer from './cart';

export default combineReducers({
  products: ProductsReducer,
  cart: CartReducer
});
