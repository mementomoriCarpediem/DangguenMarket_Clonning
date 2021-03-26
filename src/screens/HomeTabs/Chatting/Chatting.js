import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Chatting({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const [chattingRoomInfo, setChattingRoomInfo] = useState('');

  useEffect(() => {
    getData();
    // console.log(navigate('hometabs'));
  }, []);

  const getData = () => {
    const data = require('../../../data/mock_chattingInfo.json');
    setChattingRoomInfo(data.data);
  };

  // console.log(chattingRoomInfo[0].sendingMsg[0].textAt);

  const renderUnit = ({ item, index }) => (
    <View
      id={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('chattingRoom');
        }}
      >
        <Image
          style={styles.profileImage}
          source={{ uri: item.sendingUserProfileImage }}
        />
        <View>
          <Text style={styles.username}>
            {item.sendingUserName}
            <Text style={styles.nextToUsername}>{item.town} • </Text>
            <Text style={styles.nextToUsername}>
              {`${item.sendingMsg[0].textAt.split('/')[0].split('-')[1]}월 ${
                item.sendingMsg[0].textAt.split('/')[0].split('-')[2]
              }일`}
            </Text>
          </Text>
          <Text style={{ marginTop: 10, fontSize: 18 }}>안녕하세요</Text>
        </View>
      </TouchableOpacity>
      <Image
        style={{ width: 45, height: 45, marginRight: 10, borderRadius: 10 }}
        source={{ uri: item.sendingMsg[0].uploadImage }}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVerticalL: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            width: windowWidth,
          }}
        >
          <Text style={styles.title}>채팅</Text>
        </View>
        <FlatList
          data={chattingRoomInfo}
          renderItem={renderUnit}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },
  profileImage: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
  },
  nextToUsername: {
    fontSize: 13,
    fontWeight: '400',
    color: 'gray',
  },
});
