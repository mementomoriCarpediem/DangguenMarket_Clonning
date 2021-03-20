import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

export default function SlideSection() {
  const [productDetailData, setProdcutDetailData] = useState('');
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const data = require('../../data/mock_productDetail.json');
    setProdcutDetailData(data.data);

    //   fetch('')
    //     .then((res) => res.json())
    //     .then((data) => setProdcutDetailData(data));
  };

  const Item = ({ url, id }) => (
    <View style={styles.slide}>
      <Image
        source={{
          uri:
            'https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?cs=srgb&dl=pexels-mohamed-almari-368893.jpg&fm=jpg',
        }}
        style={{ height: 100 }}
      />
      <Text>{id}</Text>
    </View>
  );

  const sliderender = ({ item }) => <Item url={item.url} id={item.id} />;
  return (
    <Swiper style={styles.slideimages} showsButtons={false}>
      <FlatList
        data={productDetailData.images}
        renderItem={sliderender}
        keyExtractor={(item) => item.id}
      />
    </Swiper>
  );
}

const styles = StyleSheet.create({
  // conatainer: { flex: 1 },
  slideimages: { flexDirection: 'row', flexWrap: 'nowrap' },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  // sellerInfo: {
  //   // flex: 3,
  //   backgroundColor: 'yellow',
  // },
  // description: {
  //   // flex: 1,
  //   backgroundColor: 'black',
  // },
});
