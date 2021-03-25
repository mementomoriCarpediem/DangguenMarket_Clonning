import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

export default function ChattingRoom({ navigation }) {
  return (
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
          <Icon name="calendar-outline" size={20} style={{ marginRight: 10 }} />
          <Icon name="ellipsis-vertical" size={20} />
        </View>
      </View>
      <ScrollView></ScrollView>
      <View style={styles.bottomInputArea}>
        <Icon name="add" size={30} />
        <TextInput
          style={styles.textInput}
          placeholder={`메세지를 입력하세요                         😀`}
        />
        <Icon name="send-sharp" size={20} color={'gray'} />
      </View>
    </SafeAreaView>
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
    flexDirection: 'row',
  },
  textInput: {
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
});
