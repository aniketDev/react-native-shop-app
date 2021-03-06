import React from 'react';
import { Alert, StyleSheet, FlatList, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import { deleteProduct } from '../../store/actions/products';
import products from '../../store/reducers/products';

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
  const editProductHandler = (id) => {
    props.navigation.navigate('EditProduct', { productId: id });
  };

  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete it?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteProduct(id));
        }
      }
    ]);
  };

  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => {
              deleteHandler(itemData.item.id);
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export const UserProductsScreenOptions = (navData) => ({
  headerTitle: 'Your Products',
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
        title="Add"
        iconName="md-create"
        onPress={() => navData.navigation.navigate('EditProduct')}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default UserProductsScreen;
