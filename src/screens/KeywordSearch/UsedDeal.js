import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import { categoryListData, popularKeyword } from '../../data/listDatas';

// const image = require('../../../assets/images/tv.png');

export default function UsedDeal() {
  const categoryRenderUnit = ({ item }) => {
    // const image = require(item.img);
    console.log(item.img);
    return (
      <View style={styles.categoryUnit}>
        <Image style={styles.categoryImage} source={item.img} />
        <Text style={styles.categoryText}>{item.text}</Text>
      </View>
    );
  };

  const keywordRenderUnit = ({ item }) => (
    <Text style={styles.keyword}>{item.keyword}</Text>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2.5,
          borderBottomWidth: 0.5,
          borderBottomColor: 'lightgray',
          marginBottom: 15,
        }}
      >
        <Text style={styles.sectionTitle}>카테고리</Text>
        <View>
          <FlatList
            data={categoryListData}
            renderItem={categoryRenderUnit}
            keyExtractor={(item) => item.id}
            numColumns="4"
          />
        </View>
      </View>
      <Text style={{ textAlign: 'center', color: 'gray' }}>더보기</Text>
      <View style={{ flex: 1.5 }}>
        <Text style={styles.sectionTitle}>인기 검색어</Text>
        <Text style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <FlatList
            data={popularKeyword}
            renderItem={keywordRenderUnit}
            keyExtractor={(item) => item.id}
            numColumns="4"
          />
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>대치 4동 인기 매물</Text>
          <Text style={{ width: '100%', color: 'gray', marginLeft: 150 }}>
            더보기
          </Text>
        </View>
        <FlatList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  categoryUnit: {
    alignItems: 'center',
    height: 100,
    width: 75,
    margin: 5,
  },
  categoryImage: {
    width: 60,
    height: 60,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: '500',
    color: '#535457',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 20,
  },
  keyword: {
    padding: 10,
    margin: 5,
    fontSize: 15,
    fontWeight: '700',
    color: '#535457',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 20,
  },
});
