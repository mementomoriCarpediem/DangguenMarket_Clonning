import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Entry({ navigation }) {
  useEffect(() => {
    checkUserToken();
  }, []);

  const checkUserToken = async () => {
    await AsyncStorage.getItem('token').then((res) => console.log(res));
    // await AsyncStorage.removeItem('userToken');
    try {
      const DangguenToken = await AsyncStorage.getItem('token');
      if (DangguenToken !== null) {
        navigation.navigate('topStacks', { userToken: DangguenToken });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>당근마켓</Text>
        <Image
          style={styles.carrot}
          source={require('../../assets/images/carrot.png')}
        />
        <Text style={styles.subTitle}>우리동네 직거래 당근마켓</Text>
        <Text style={styles.text}>당근마켓은 동네 직거래 마켓이예요.</Text>
        <Text style={styles.text}>내동네를 설정하고 시작해보세요</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('phonenumberauth')}
        >
          <Text style={styles.buttonText}>내동네 설정하고 시작하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: '700',
    color: '#EF904F',
    marginBottom: 100,
  },
  carrot: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
  },
  button: {
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#EF904F',
    color: 'white',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
});
