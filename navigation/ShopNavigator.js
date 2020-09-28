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
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EditProductsScreen, {
  EditProductsScreenOptions
} from '../screens/user/EditProductScreen';

import UserProductsScreen, {
  UserProductsScreenOptions
} from '../screens/user/UserProductsScreen';

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

const OrderNavigator = () => (
  <StackNavigator.Navigator screenOptions={defaultNavOptions}>
    <StackNavigator.Screen
      name="Orders"
      component={OrderScreen}
      options={OrderScreenOptions}
    />
  </StackNavigator.Navigator>
);

const AdminNavigator = () => (
  <StackNavigator.Navigator screenOptions={defaultNavOptions}>
    <StackNavigator.Screen
      name="UserProdcuts"
      component={UserProductsScreen}
      options={UserProductsScreenOptions}
    />
    <StackNavigator.Screen
      name="EditProduct"
      component={EditProductsScreen}
      options={EditProductsScreenOptions}
    />
  </StackNavigator.Navigator>
);

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  return (
    <ShopDrawerNavigator.Navigator
      drawerContent={(props) => (
        <View style={{ paddingTop: 10 }}>
          <SafeAreaView>
            <DrawerItemList {...props} />
          </SafeAreaView>
        </View>
      )}
      drawerContentOptions={{
        activeTintColor: Colors.primary
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="md-cart" size={23} color={props.color} />
          )
        }}
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
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="md-list" size={23} color={props.color} />
          )
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};
