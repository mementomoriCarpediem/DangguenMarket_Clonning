import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import axios from 'axios';

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

import SellingProductList from './SellingProductList';
import DealFooter from './DealFooter';

import { productDetail } from '../../constants/APIs';

export default function ProductDetail({ route, navigation }) {
  const [productDetailData, setProductDetailData] = useState([]);
  const windowWidth = useWindowDimensions().width;

  // console.log(route.params.id);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const data = require('../../data/mock_productDetail.json');

    await axios(productDetail + route.params.id).then((data) =>
      // console.log(data.data)
      setProductDetailData(data.data)
    );
  };

  console.log(productDetailData);

  const imageRenderUnit = ({ item, index }) => (
    <Image
      key={index}
      source={{ uri: item.url }}
      style={{ width: windowWidth, height: 350 }}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={styles.container} invertStickyHeaders={true}>
        <View>
          <FlatList
            data={productDetailData.images}
            renderItem={imageRenderUnit}
            keyExtractor={(item) => item.id}
            horizontal={true}
            initialScrollIndex={0}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
          <View style={styles.slideicons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-back-sharp" size={25} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', left: 250 }}>
              <TouchableOpacity>
                <Icon
                  name="share-outline"
                  size={25}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('pressed')}>
                <Icon name="ellipsis-vertical" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.sellerInfo}>
          <Image
            source={{ uri: productDetailData.writer_profile_image }}
            style={styles.profile}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.nickname}>
              {productDetailData.writer_nickname}
            </Text>
            <Text style={{ fontSize: 12, marginTop: 5 }}>
              {productDetailData.address}
            </Text>
          </View>
          <View style={{ left: 130 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.temp}>43.5 ℃</Text>
              <Text style={styles.faceIcon}>😃</Text>
            </View>
            <Text style={styles.mannerText}>매너온도</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{productDetailData.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.cateTime}>{productDetailData.subcategory}</Text>
            <Text style={styles.cateTime}>{productDetailData.created_at}</Text>
          </View>
          <Text style={{ fontSize: 15, marginBottom: 20, lineHeight: 22 }}>
            {productDetailData.introduction}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.chatlikeview}>
              채팅{productDetailData.chat_count}•
            </Text>
            <Text style={styles.chatlikeview}>
              관심{productDetailData.like_count}•
            </Text>
            <Text style={styles.chatlikeview}>
              조회{productDetailData.view_count}
            </Text>
          </View>
        </View>
        {/* user에 대한 data를 넘기기(user nickname, 다른 상품 리스트 정보) */}
        <SellingProductList />
      </ScrollView>
      <DealFooter
        price={Number(productDetailData.price?.split('.')[0]).toLocaleString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    position: 'relative',
    height: '100%',
  },
  slideicons: {
    position: 'absolute',
    width: 400,
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 10,
  },
  sellerInfo: {
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 100,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  nickname: {
    fontSize: 15,
    fontWeight: '700',
  },
  temp: {
    fontSize: 16,
    fontWeight: '700',
    color: 'green',
  },
  faceIcon: { fontSize: 30 },
  mannerText: {
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'underline',
    marginLeft: 35,
  },
  description: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
  },
  cateTime: {
    marginRight: 15,
    marginBottom: 20,
    fontSize: 15,
    color: 'gray',
  },
  chatlikeview: {
    fontSize: 12,
    marginLeft: 5,
    color: 'gray',
  },
});
