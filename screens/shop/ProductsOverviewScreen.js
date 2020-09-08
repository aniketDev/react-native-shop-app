import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={products}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
      />
    </View>
  );
};

export const productsOverviewOptions = {
  headerTitle: 'All Products'
};

const styles = StyleSheet.create({
  screenContainer: {
    marginHorizontal: 10,
    marginVertical: 5
  }
});

export default ProductsOverviewScreen;
