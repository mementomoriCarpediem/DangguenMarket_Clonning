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
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          // console.log(route);
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'townlife') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'aroundme') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'chatting') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'mypage') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={23} color={'black'} />;
        },
      })}
      tabBarOptions={{ labelStyle: { fontSize: 12, color: 'black' } }}
    >
      <Tab.Screen name="home" title="홈" component={Home} />
      <Tab.Screen name="townlife" title="동네생활" component={LocalLife} />
      <Tab.Screen name="aroundme" tiltle="내근처" component={AroundMe} />
      <Tab.Screen name="chatting" title="채팅" component={Chatting} />
      <Tab.Screen name="mypage" title="나의 당근" component={MyPage} />
    </Tab.Navigator>
  );
}
