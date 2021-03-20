import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

export default function DealFooter({ price }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="heart-outline" size={25} style={{ marginHorizontal: 15 }} />
      </TouchableOpacity>
      <View style={styles.price}>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>
          {price && price.toLocaleString()}원
        </Text>
        <Text style={styles.priceproposal}>가격제안하기</Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.deal}>
        <Text style={styles.dealText}>채팅으로 거래하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 100,
    width: '100%',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
  price: {
    borderLeftColor: 'lightgray',
    borderLeftWidth: 1,
    paddingLeft: 15,
  },
  priceproposal: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5,
    color: '#EF904F',
  },
  deal: {
    height: 35,
    width: 150,
    marginHorizontal: 50,
    backgroundColor: '#EF904F',
    borderRadius: 5,
  },
  dealText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 7,
    fontWeight: '700',
  },
});
