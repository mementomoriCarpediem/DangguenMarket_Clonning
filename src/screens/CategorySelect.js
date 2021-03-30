import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function CategorySelect() {
  return (
    <SafeAreaView>
      <View>
        <Text>카테고리 리스트</Text>
        <FlatList />
      </View>
    </SafeAreaView>
  );
}
