import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => {}}
            onAddTocart={() => {}}
          ></ProductItem>
        )}
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
