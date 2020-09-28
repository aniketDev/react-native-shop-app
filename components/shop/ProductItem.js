import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableNativeFeedback
} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <TouchableNativeFeedback onPress={props.onSelect} useForeground>
        <View style={styles.touchable}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.image }} />
          </View>
          <View style={styles.details}>
            <Text style={props.title}>{props.title}</Text>
            <Text style={props.price}>₹{props.price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>{props.children}</View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: 'open-sans-bold'
  },
  details: {
    alignItems: 'center',
    height: '15%',
    paddingVertical: 10
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'open-sans'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 10
  }
});

export default ProductItem;
