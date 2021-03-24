import React from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import UsedDeal from '../screens/KeywordSearch/UsedDeal';
import TownInfo from '../screens/KeywordSearch/TownInfo';
import People from '../screens/KeywordSearch/People';

const Tab = createMaterialTopTabNavigator();

export default function KeywordSearch() {
  return (
    <Tab.Navigator
      initialRouteName="중고거래"
      swipeEnabled="false"
      tabBarOptions={{
        labelStyle: { fontSize: 15, fontWeight: '700' },
        indicatorStyle: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen name="중고거래" component={UsedDeal} />
      <Tab.Screen name="동네정보" component={TownInfo} />
      <Tab.Screen name="사람" component={People} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    fontSize: 20,
  },
});
