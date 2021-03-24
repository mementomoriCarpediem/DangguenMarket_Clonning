import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function SellingProductList() {
  const rednerUnit = ({ item }) => <Image />;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>OOO님의 판매상품</Text>
        <Text>더보기</Text>
      </View>
      {/* <FlatList data={sdf} renderItem={sdf} keyExtractor={asd} numColumns={2} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
});
