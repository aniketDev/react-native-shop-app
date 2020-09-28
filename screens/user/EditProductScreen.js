import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import products from '../../store/reducers/products';

const EditProductsScreen = (props) => {
  const productId = props.route.params
    ? props.route.params.productId
    : undefined;
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === productId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ''
  );
  const [price, setPrice] = useState(editedProduct ? editedProduct.price : '');
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ''
  );

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChange={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChange={(text) => setImageUrl(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChange={(text) => setPrice(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChange={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export const EditProductsScreenOptions = (navData) => ({
  headerTitle: navData.route.params ? 'Edit Product' : 'Add Product',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Save"
        iconName="md-checkmark"
        onPress={() => navData.navigation.navigate('ProductsOverview')}
      />
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%',
    marginVertical: 10
  },
  label: {
    fontFamily: 'open-sans-bold'
    // marginHorizontal: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2
  }
});

export default EditProductsScreen;
