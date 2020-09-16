import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList
} from '@react-navigation/drawer';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import { productsOverviewOptions } from '../screens/shop/ProductsOverviewScreen';
import { ProductDetailsOptions } from '../screens/shop/ProductDetailsScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen, { CartScreenOptions } from '../screens/shop/CartScreen';
import OrderScreen, { OrderScreenOptions } from '../screens/shop/OrderScreen';
import { Ionicons } from '@expo/vector-icons';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white'
};

const StackNavigator = createStackNavigator();

export const ProductsNavigator = () => (
  <StackNavigator.Navigator screenOptions={defaultNavOptions}>
    <StackNavigator.Screen
      name="ProductsOverview"
      component={ProductsOverviewScreen}
      options={productsOverviewOptions}
    />
    <StackNavigator.Screen
      name="ProductDetail"
      component={ProductDetailsScreen}
      options={ProductDetailsOptions}
    />
    <StackNavigator.Screen name="Cart" component={CartScreen} />
  </StackNavigator.Navigator>
);

const OrderNavigator = () => {
  <StackNavigator.Navigator screenOptions={defaultNavOptions}>
    <StackNavigator.Screen
      name="Orders"
      component={OrderScreen}
      options={OrderScreenOptions}
    />
  </StackNavigator.Navigator>;
};

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  return (
    <ShopDrawerNavigator.Navigator
      drawerContent={() => {}}
      drawerContentOptions={{
        activeTintColor: Colors.primary
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="md-list" size={23} color={props.color} />
          )
        }}
      />
      {/* <ShopDrawerNavigator.screen name="Admin" component={} /> */}
    </ShopDrawerNavigator.Navigator>
  );
};
