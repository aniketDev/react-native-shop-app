import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ProductsNavigator } from './ShopNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ProductsNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppNavigator;
