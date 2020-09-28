import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectItemHadler = (id, title) => {
    props.navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title
    });
  };

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {
              selectItemHadler(itemData.item.id, itemData.item.titile);
            }}
          >
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={() => {
                selectItemHadler(itemData.item.id, itemData.item.titile);
              }}
            />
            <Button
              color={Colors.primary}
              title="To Cart"
              onPress={() => {
                dispatch(cartActions.addToCart(itemData.item));
              }}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};

export const productsOverviewOptions = (navData) => ({
  headerTitle: 'All Products',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Cart"
        iconName="md-menu"
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Cart"
        iconName="md-cart"
        onPress={() => navData.navigation.navigate('Cart')}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  screenContainer: {
    marginHorizontal: 10,
    marginVertical: 5
  }
});

export default ProductsOverviewScreen;
