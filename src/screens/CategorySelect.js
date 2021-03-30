import React from 'react';
import { Touchable } from 'react-native';
import { SafeAreaView, View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function CategorySelect({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View>
          <Text>카테고리 리스트</Text>
          <FlatList />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
