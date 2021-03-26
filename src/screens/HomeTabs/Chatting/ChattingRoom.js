import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

export default function ChattingRoom({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="md-arrow-back" size={30} />
          </TouchableOpacity>
          <View style={styles.headerMiddle}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.userName}>꼼냥이</Text>
              <Text style={styles.userTemp}>37.4℃</Text>
            </View>
            <Text style={{ marginTop: 5, color: 'gray', fontSize: 13 }}>
              보통 몇 시간 내에 응답
            </Text>
          </View>
          <View style={styles.headerRight}>
            <Icon
              name="calendar-outline"
              size={20}
              style={{ marginRight: 10 }}
            />
            <Icon name="ellipsis-vertical" size={20} />
          </View>
        </View>
        <ScrollView></ScrollView>
      </SafeAreaView>
      <View style={[styles.bottomInputArea, { width: windowWidth }]}>
        <TouchableOpacity>
          <Icon name="add" size={30} color={'gray'} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder={`메세지를 입력하세요                         😀`}
        />
        <TouchableOpacity>
          <Icon name="send-sharp" size={25} color={'gray'} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  headerMiddle: {
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
  },
  userName: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  userTemp: {
    marginLeft: 10,
    padding: 5,
    color: 'blue',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 15,
  },
  bottomInputArea: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 80,
    paddingTop: 20,
    backgroundColor: 'lightgray',
  },
  textInput: {
    width: '70%',
    height: 30,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
});
