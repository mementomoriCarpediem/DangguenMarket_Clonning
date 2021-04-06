import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons';
import TopMenus from './TopMenus';

import { productList } from '../../constants/APIs';

export default function ProductList({ navigation, route }) {
  const [productListData, setProductListData] = useState('');
  const [isNewProductSearchClickd, setIsNewProductSearchClicked] = useState(
    false
  );
  const [clickedProductId, setClickedProducId] = useState('');
  const now = Math.round(Date.now() / 1000);

  console.log(route);

  useEffect(() => {
    getListData();
  }, []);

  const getListData = async () => {
    // const data = require('../../data/mock_productList.json');
    await axios(productList, {
      // headers: {
      // Authorization: `JWT ${route.params.token}`,
      // },
    });

    setProductListData(data.data);
  };

  const Item = ({
    title,
    image,
    town,
    createdAt,
    price,
    likeCount,
    chatCount,
    productId,
  }) => (
    <>
      <View style={styles.unitContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('productDetail', { id: productId });
          }}
        >
          <Image
            name="mainImage"
            source={{ uri: image }}
            style={styles.image}
          />
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
            {price.toLocaleString()}원
          </Text>
          <View style={styles.icons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setClickedProducId(productId);
                setIsNewProductSearchClicked(!isNewProductSearchClickd);
              }}
            >
              <Text style={{ fontSize: 15 }}>새상품 최저가 검색</Text>
            </TouchableOpacity>
            <Icon name="heart-outline" size={20} color={'gray'} />
            <Text style={{ marginRight: 10 }}>{likeCount}</Text>
            <Icon name="chatbubbles-outline" size={20} color={'gray'} />
            <Text>{chatCount}</Text>
          </View>
        </View>
      </View>

      {isNewProductSearchClickd && productId === clickedProductId && (
        <View style={styles.newProductContainer}>
          <Image
            style={styles.newProductImage}
            source={{
              uri:
                'https://shopping-phinf.pstatic.net/main_1814428/18144288451.20201222173141.jpg?type=f640',
            }}
          />
          <View style={{ justifyContent: 'space-around' }}>
            <Text style={styles.newProductName}>
              제품명(모델명):소니 미러리스(A6400)
            </Text>
            <Text style={styles.newProductSite}>판매처: Auction </Text>
            <Text style={styles.newProductPrice}>판매가격: 300000 원 </Text>
          </View>
        </View>
      )}
    </>
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
      productId={item.productId}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopMenus navigation={navigation} />
      <FlatList
        data={productListData}
        renderItem={renderUnit}
        keyExtractor={(item) => item.productId.toString()}
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('create')}
      >
        <Icon name="add" size={40} color={'white'} />
      </TouchableOpacity>
    </SafeAreaView>
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
  newProductContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'lightgray',
  },
  newProductImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  newProductName: {
    fontSize: 15,
  },
  newProductSite: {
    fontSize: 15,
  },
  newProductPrice: {
    fontSize: 15,
    fontWeight: '600',
  },
  createButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#EF904F',
    borderRadius: 50,
    zIndex: 1000,
  },
});
