import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ProductsNavigator, ShopNavigator } from './ShopNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppNavigator;
