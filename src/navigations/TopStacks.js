import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChattingRoom from '../screens/HomeTabs/Chatting/ChattingRoom';
import HomeTabs from './HomeTabs';
import Create from '../screens/Create';
import CategorySelect from '../screens/CategorySelect';

const Stack = createStackNavigator();

export default function ChattingStacks() {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName="hometabs">
      <Stack.Screen name="hometabs" component={HomeTabs} />
      <Stack.Screen name="chattingRoom" component={ChattingRoom} />
      <Stack.Screen name="create" component={Create} />
      <Stack.Screen name="categorySelect" component={CategorySelect} />
    </Stack.Navigator>
  );
}
