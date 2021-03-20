import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TopMenus(props) {
  // console.log(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideContainer}>
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
});
