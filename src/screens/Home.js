import React, { useState } from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TopMenus from './TopMenus';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="productList"
          component={ProductList}
          options={{
            headerTitle: (props) => <TopMenus {...props} />,
          }}
        />
        <Stack.Screen name="prductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
});
