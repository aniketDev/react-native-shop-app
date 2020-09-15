import React from 'react';
import { combineReducers } from 'redux';
import ProductsReducer from './products';
import CartReducer from './cart';
import OrdersReducer from '../reducers/orders';

export default combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  orders: OrdersReducer
});
