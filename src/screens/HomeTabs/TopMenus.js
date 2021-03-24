import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';

export default function TopMenus({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {modalVisible && <View style={styles.overlay} />}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.modalText}>남사면</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.modalText}>대치4동</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              setModalVisible(!modalVisible);
              navigation.navigate('townauth');
            }}
          >
            <Text style={styles.modalText}>내 동네 설정하기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ width: 500, height: 600, top: 60 }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </Modal>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.sideContainer}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.text}>대치 4동</Text>
          <Ionicons name="chevron-down" size={20} />
        </TouchableOpacity>

        <View style={{ marginLeft: 'auto', flexWrap: 'wrap' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('keywordSearch')}
          >
            <Ionicons style={styles.icon} name="ios-search-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('categorySearch')}
          >
            <Ionicons style={styles.icon} name="options" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('entry')}>
            <Ionicons
              style={styles.icon}
              name="ios-notifications-outline"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sideContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    width: 80,
    fontSize: 20,
    fontWeight: '700',
  },
  icon: {
    marginLeft: 10,
  },
  modalView: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top: 70,
    left: -10,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalText: {
    fontSize: 17,
    marginBottom: 15,
    // borderWidth: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    textAlign: 'left',
  },
  overlay: {
    position: 'absolute',
    top: -50,
    left: -15,
    width: 400,
    height: 1000,
    backgroundColor: 'gray',
    opacity: 0.3,
  },
  touchable: {
    marginTop: 10,
    // borderWidth: 1,
  },
});
