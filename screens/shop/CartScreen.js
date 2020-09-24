import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import { removeFromCart } from '../../store/actions/cart';
import { addOrder } from '../../store/actions/orders';

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const items = useSelector((state) => state.cart.items);
  const cartItems = useSelector((state) => {
    return Object.entries(state.cart.items);
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summery}>
        <Text style={styles.summeryText}>
          Total:{' '}
          <Text style={styles.amount}>₹{cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order now"
          disabled={cartItems.length === 0}
          onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}
        />
      </View>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item[0]}
          renderItem={(item) => (
            <CartItem
              item={item.item[1]}
              deletable
              onRemove={() => {
                dispatch(removeFromCart(item.item[0]));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export const CartScreenOptions = {
  headerTitle: 'Your Cart'
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summery: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  summeryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});

export default CartScreen;
