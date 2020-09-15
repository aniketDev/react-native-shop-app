import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.itemData}>
        <Text style={styles.qn}>{item.quantity}</Text>
        <Text style={styles.title}>{item.productTitle}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.title}>{item.productPrice.toFixed(2)}</Text>
        <TouchableNativeFeedback onPress={onRemove} style={styles.deleteButton}>
          <Ionicons name="md-trash" size={23} color="red" />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 10
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  qn: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16,
    paddingRight: 10
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    paddingRight: 10
  },
  deleteButton: {
    // paddingLeft: 20
  }
});

export default CartItem;
