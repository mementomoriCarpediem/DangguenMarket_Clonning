import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

export default function ProductList() {
  const [productListData, setProductListData] = useState('');
  const now = Math.round(Date.now() / 1000);

  useEffect(() => {
    getListData();
  }, []);

  const getListData = () => {
    const data = require('../data/mock_productList.json');
    setProductListData(data.data);

    // fetch('../data/mock_productList.json')
    //   .then((res) => res.json())
    //   .then((data) => setProductListData(data.data));
  };

  const Item = ({
    title,
    image,
    town,
    createdAt,
    price,
    likeCount,
    chatCount,
  }) => (
    <View style={styles.unitContainer}>
      <TouchableOpacity>
        <Image name="mainImage" source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text name="title" style={styles.title}>
          {title}
        </Text>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Text name="town" style={styles.titleBelow}>
            {town}
          </Text>
          <Text name="createdAt" style={styles.titleBelow}>
            {now - createdAt < 100
              ? `${now - createdAt}초 전`
              : `${new Date(createdAt).getMonth() + 1}월 ${new Date(
                  createdAt
                ).getDate()}일`}
          </Text>
        </View>
        <Text name="price" style={styles.price}>
          {price}원
        </Text>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 15 }}>새상품 최저가 검색</Text>
          </TouchableOpacity>
          <Icon name="heart-outline" size={20} color={'gray'} />
          <Text style={{ marginRight: 10 }}>{likeCount}</Text>
          <Icon name="chatbubbles-outline" size={20} color={'gray'} />
          <Text>{chatCount}</Text>
        </View>
      </View>
    </View>
  );

  const renderUnit = ({ item }) => (
    <Item
      title={item.title}
      image={item.imgUrl}
      town={item.town}
      createdAt={item.createdAt}
      price={item.price}
      likeCount={item.likeCount}
      chatCount={item.chatCount}
    />
  );
  console.log(productListData);

  return (
    <View style={styles.container}>
      <FlatList
        data={productListData}
        renderItem={renderUnit}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  unitContainer: {
    flexDirection: 'row',

    marginHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  infoContainer: {
    width: 230,
  },
  item: {},
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  titleBelow: { color: 'gray', marginRight: 10 },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 25,
    marginRight: 22,
    backgroundColor: '#bed8e8',
    borderRadius: 10,
  },
});
