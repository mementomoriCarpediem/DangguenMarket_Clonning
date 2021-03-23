import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import LocalLife from '../screens/LocalLife';
import AroundMe from '../screens/AroundMe';
import Chatting from '../screens/Chatting';
import MyPage from '../screens/MyPage';
import TopMenus from '../screens/TopMenus';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          // console.log(route);
          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '동네생활') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === '내근처') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === '채팅') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === '나의당근') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={23} color={'black'} />;
        },
      })}
      tabBarOptions={{ labelStyle: { fontSize: 12, color: 'black' } }}
    >
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="동네생활" component={LocalLife} />
      <Tab.Screen name="내근처" component={AroundMe} />
      <Tab.Screen name="채팅" component={Chatting} />
      <Tab.Screen name="나의당근" component={MyPage} />
    </Tab.Navigator>
  );
}
