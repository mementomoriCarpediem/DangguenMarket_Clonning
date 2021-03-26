import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Location from 'expo-location';
import axios from 'axios';

import { jusoAPI_Key, googleAPI_Key } from '../constants/APIs';

export default function TownAuth({ navigation }) {
  const [location, setLocation] = useState(null);
  const [townList, setTownList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const searchTownByText = (townSearchText) => {
    setTownList([]);

    axios
      .get(
        `https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${jusoAPI_Key}&keyword=${townSearchText}&resultType=json&countPerPage=30`
      )
      .then((res) => setTownList([...res.data.results.juso]));
  };
  // console.log(townList);

  const getTownByLocation = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location?.coords.latitude},${location?.coords.longitude}&key=${googleAPI_Key}&language=ko`
      )
      .then((res) =>
        searchTownByText(res.data.results[2].address_components[1].long_name)
      );
  };

  const searchRenderUnit = ({ item, index }) => (
    // n 번째와 n-1번째의 시군구 및 읍면동 명이 동일하면 skip 로직 추후 구현
    <TouchableOpacity onPress={() => navigation.navigate('topStacks')}>
      <Text style={styles.townresult}>{`${item.sggNm} ${item.emdNm} ${
        item.rn || ''
      }`}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="md-arrow-back" size={30} />
        </TouchableOpacity>
        <TextInput
          style={styles.townsearch}
          placeholder={'동명(읍,면)으로 검색 (ex.서초동)'}
          onChangeText={(townSearchText) => searchTownByText(townSearchText)}
        />
      </View>

      <TouchableOpacity
        style={styles.townsearchbutton}
        onPress={() => getTownByLocation(location)}
      >
        <Text style={{ fontSize: 15, fontWeight: '700', color: 'white' }}>
          현재위치로 찾기
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'flex-start',
          fontWeight: '700',
          marginLeft: 20,
          marginBottom: 20,
        }}
      >
        근처동네
      </Text>
      <ScrollView style={{ width: '100%' }}>
        <TouchableOpacity>
          {townList && (
            <FlatList
              data={townList}
              renderItem={searchRenderUnit}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  townsearch: {
    width: '75%',
    marginLeft: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  townsearchbutton: {
    width: 340,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF904F',
    borderRadius: 10,
    marginBottom: 20,
  },
  townresult: {
    marginHorizontal: 20,
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
