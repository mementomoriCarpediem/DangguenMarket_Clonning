import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PhoneNumberAuth(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.lockcontainer}>
        <Image
          style={styles.lock}
          source={require('../../../assets/images/lock.png')}
        />
        <Text
          style={{
            width: 260,
            paddingHorizontal: 20,
            fontSize: 15,
            lineHeight: 25,
          }}
        >
          당근마켓은 휴대폰 번호로 가입해요. 번호는{' '}
          <Text style={{ fontWeight: '700' }}>안전하게 보관</Text>
          되며, 어디에도 공개되지 않아요.
        </Text>
      </View>
      {/* 인증번호 발송 후 - <View>
        <TextInput
          style={styles.input}
          placeholder={'휴대폰 번호(-없이 숫자만 입력)'}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>인증문자다시받기</Text>
        </TouchableOpacity>
      </View> */}
      <TextInput
        style={styles.input}
        placeholder={'휴대폰 번호(-없이 숫자만 입력)'}
      />
      {/* 인증번호 발송후 - <Text>어떠한 경우에도 타인과 공유하지 마세요</Text> */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>인증문자받기</Text>
      </TouchableOpacity>
      <Text>
        전화번호가 변경되었나요?
        <Text style={{ textDecorationLine: 'underline', marginLeft: 10 }}>
          이메일로 계정찾기
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  lockcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  lock: {
    width: 70,
    height: 70,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    width: 340,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEE2E6',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
