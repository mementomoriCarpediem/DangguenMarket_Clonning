import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Location from 'expo-location';

// import kakaoAppKey from '../constants/APIs';
// import mapAPIKey from '../constants/APIs';
import { jusoAPI_Key, googleAPI_Key } from '../constants/APIs';

export default function TownAuth({ navigation }) {
  const [location, setLocation] = useState(null);
  const [townSearchText, setTownSearchText] = useState(null);
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
      // console.log(Location.getPermissionsAsync());
    })();
    // getTownByLocation();

    // showSearchedList();
  }, []);

  const searchTownByText = async (townSearchText) => {
    await setTownSearchText(townSearchText);
    await setTownList([]);

    await fetch(
      `https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do?confmKey=${jusoAPI_Key}&keyword=삼성&resultType=json&countPerPage=30`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  };

  // const showSearchedList = () => {}

  const getTownByLocation = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location?.coords.latitude},${location?.coords.longitude}&key=${googleAPI_Key}&language=ko`
    )
      .then((res) => res.json())
      .then((data) => {
        setTownList([...townList, data.results[0].formatted_address]);
        // if (townList.find(data.results[0].formatted_address) === undefined) {
        //   setTownList([...townList, data.results[0].formatted_address]);
        // }
      });
  };

  // console.log(location.coords.latitude, location.coords.longitude);
  console.log(townSearchText);

  // const Item = ({}) => (<Text style={styles.townresult}>경기도 용인시 처인구 이동읍</Text>);
  // const renderUnit = ({item}) => <Item townName={townList}/>;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Icon name="md-arrow-back" size={30} /> */}
          <Image
            source={require('../../assets/images/left-arrow.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.townsearch}
          placeholder={'동명(읍,면)으로 검색 (ex.서초동)'}
          onChangeText={(townSearchText) => searchTownByText(townSearchText)}
        />
      </View>

      <TouchableOpacity
        style={styles.townsearchbutton}
        // onPress={() => searchTownByLocation(location)}
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('home');
          }}
        >
          {townList &&
            townList.map((town) => (
              <Text style={styles.townresult}>
                {town.split(' ').splice(2, 3).join(' ')}
              </Text>
            ))}
          {/* <FlatList data={} renderItem={}/> => gps 위치 기반 주소 api 통신 response 적용*/}
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
