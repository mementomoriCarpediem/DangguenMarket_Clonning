import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chatting from '../screens/HomeTabs/Chatting/Chatting';
import ChattingRoom from '../screens/HomeTabs/Chatting/ChattingRoom';

const Stack = createStackNavigator();

export default function ChattingStacks() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="chattingList" component={Chatting} />
      <Stack.Screen name="chattingRoom" component={ChattingRoom} />
    </Stack.Navigator>
  );
}
