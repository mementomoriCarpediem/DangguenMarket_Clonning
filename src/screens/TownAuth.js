import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

export default function TownAuth() {
  const Item = () => {};
  const renderUnit = () => <Item />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="md-arrow-back" size={30} />
        </TouchableOpacity>
        <TextInput
          style={styles.townsearch}
          placeholder={'동명(읍,면)으로 검색 (ex.서초동)'}
        />
      </View>
      <TouchableOpacity style={styles.townsearchbutton}>
        <Text style={{ fontSize: 15, fontWeight: '700', color: 'white' }}>
          현재위치로 찾기
        </Text>
      </TouchableOpacity>
      <Text
        style={{ alignSelf: 'flex-start', marginLeft: 20, fontWeight: '700' }}
      >
        근처동네
      </Text>
      <ScrollView>
        {/* <FlatList data={} renderItem={}/> => gps 위치 기반 주소 api 통신 response 적용*/}
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
});
