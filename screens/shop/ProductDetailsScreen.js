import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProductDetailsScreen = (props) => {
  const { productId } = props.route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView style={styles.details}>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to cart" onPress={() => {}} />
      </View>
      <Text style={styles.price}>₹{selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

export const ProductDetailsOptions = (navData) => {
  return {
    headerTitle: navData.route.params.productTitle
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'open-sans'
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginVertical: 20,
    textAlign: 'center',
    fontFamily: 'open-sans-bold'
  }
});

export default ProductDetailsScreen;
