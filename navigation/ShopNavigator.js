import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import { productsOverviewOptions } from '../screens/shop/ProductsOverviewScreen';
import { ProductDetailsOptions } from '../screens/shop/ProductDetailsScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white'
};

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => (
  <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
    <ProductsStackNavigator.Screen
      name="ProductsOverview"
      component={ProductsOverviewScreen}
      options={productsOverviewOptions}
    />
    <ProductsStackNavigator.Screen
      name="ProductDetail"
      component={ProductDetailsScreen}
      options={ProductDetailsOptions}
    />
    <ProductsStackNavigator.Screen name="Cart" component={CartScreen} />
  </ProductsStackNavigator.Navigator>
);
