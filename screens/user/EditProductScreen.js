import React, { useEffect, useCallback, useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import { createProduct, updateProduct } from '../../store/actions/products';
import Input from '../../components/UI/Input';

const formReducer = (state, action) => {
  if (action.type == 'UPDATE') {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let formIsValid = true;
    for (const key in updatedValidities) {
      formIsValid = formIsValid && updatedValidities[key];
    }
    return {
      formIsValid: formIsValid,
      inputValues: updatedValues,
      inputValidities: updatedValidities
    };
  }
  return state;
};

const EditProductsScreen = (props) => {
  const productId = props.route.params ? props.route.params.productId : null;
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : '',
      imageUrl: editedProduct ? editedProduct.imageUrl : '',
      description: editedProduct ? editedProduct.description : '',
      price: ''
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false
    },
    inputValid: editedProduct ? true : false
  });

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong input', 'check errors');
      return;
    }
    if (editedProduct) {
      dispatch(
        updateProduct(
          productId,
          formState.inputValues.title,
          formState.inputValues.description,
          formState.inputValues.imageUrl
        )
      );
    } else {
      dispatch(
        createProduct(
          formState.inputValues.title,
          formState.inputValues.description,
          formState.inputValues.imageUrl,
          +formState.inputValues.price
        )
      );
    }
    props.navigation.goBack();
  }, [dispatch, formState, productId]);

  useEffect(
    () =>
      props.navigation.setOptions({
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Save"
              iconName="md-checkmark"
              onPress={submitHandler}
            />
          </HeaderButtons>
        )
      }),
    [submitHandler]
  );

  const inputChangeHandler = useCallback(
    (inputValue, value, isValid) => {
      dispatchFormState({
        type: 'UPDATE',
        value: value,
        isValid: isValid,
        input: inputValue
      });
    },
    [dispatchFormState]
  );

  return (
    <ScrollView>
      <View style={styles.form}>
        <Input
          id="title"
          label="Title"
          errorText="Please enter a valid title"
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect
          returnKeyType="next"
          onInputChange={inputChangeHandler}
          initialValue={editedProduct ? editedProduct.title : ''}
          initiallyValid={!!editedProduct}
          required
        />
        <Input
          id="imageUrl"
          label="Image URL"
          errorText="Please enter a valid imageurl"
          keyboardType="decimal-pad"
          autoCapitalize="sentences"
          returnKeyType="next"
          initialValue={editedProduct ? editedProduct.imageUrl : ''}
          onInputChange={inputChangeHandler}
          initiallyValid={!!editedProduct}
          required
        />
        {editedProduct ? null : (
          <Input
            id="price"
            label="Price"
            errorText="Please enter a valid price"
            keyboardType="default"
            autoCapitalize="sentences"
            returnKeyType="next"
            required
            min={0.1}
            onInputChange={inputChangeHandler}
          />
        )}
        <Input
          id="description"
          label="Description"
          errorText="Please enter a valid description"
          keyboardType="default"
          autoCapitalize="sentences"
          returnKeyType="next"
          multiline
          numberOfLines={3}
          initialValue={editedProduct ? editedProduct.description : ''}
          onInputChange={inputChangeHandler}
          initiallyValid={!!editedProduct}
          required
          minLength={5}
        />
      </View>
    </ScrollView>
  );
};

export const EditProductsScreenOptions = (navData) => {
  const routeParams = navData.route.params ? navData.route.params : {};

  return {
    headerTitle: routeParams.productId ? 'Edit Product' : 'Add Product'
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  }
});

export default EditProductsScreen;
