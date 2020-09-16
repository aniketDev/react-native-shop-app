import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => {
        return <Text>{itemData.item.totalAmount}</Text>;
      }}
    ></FlatList>
  );
};

export const OrderScreenOptions = (navData) => {
  headerTitle: 'Your Orders';
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default OrderScreen;
