import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TopMenus(props) {
  // console.log(props);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {modalVisible && <View style={styles.overlay} />}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalView}>
          <Text style={styles.modalText}>남사면</Text>
          <Text style={styles.modalText}>대치4동</Text>
          <Text style={styles.modalText}>내 동네 설정하기</Text>
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
            setModalVisible(true);
          }}
        >
          <Text style={styles.text}>대치 4동</Text>
          <Icon name="chevron-down" size={20} />
        </TouchableOpacity>

        <View style={{ marginLeft: 'auto', flexWrap: 'wrap' }}>
          <TouchableOpacity>
            <Icon style={styles.icon} name="ios-search-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.icon} name="options" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
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
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    textAlign: 'left',
    lineHeight: 20,
    zIndex: 100,
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
});
