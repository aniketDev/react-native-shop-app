import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../../constants/Colors';
import CartItem from './CartItem';

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text>₹ {props.amount.toFixed(2)}</Text>
        <Text style={{ color: '#888' }}>{props.date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => setShowDetails((preState) => !preState)}
      />
      {showDetails && (
        <View>
          {props.items.map((cartItem) => (
            <CartItem key={cartItem[0]} item={cartItem[1]} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  summary: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  }
});

export default OrderItem;
