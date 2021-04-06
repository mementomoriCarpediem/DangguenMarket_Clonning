import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import * as firebase from 'firebase';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { firebaseAPI_Key, signIn } from '../../constants/APIs';

try {
  !firebase.apps.length
    ? firebase.initializeApp({
        apiKey: firebaseAPI_Key,
        authDomain: 'dangguenmarketclonning.firebaseapp.com',
        projectId: 'dangguenmarketclonning',
        storageBucket: 'dangguenmarketclonning.appspot.com',
        messagingSenderId: '42558418825',
        appId: '1:42558418825:web:49ed049909f82c25f9fb58',
      })
    : firebase.app();
} catch (err) {
  console.log('err:', err);
}

export default function PhoneNumberAuth({ navigation }) {
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();

  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  const [message, showMessage] = useState(undefined);

  const [token, setToken] = useState('');

  console.log(token);

  return (
    <View style={styles.container}>
      {message && (
        <View
          style={{
            backgroundColor: 'black',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>{message}</Text>
        </View>
      )}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={true}
        invisibleVerify={true}
      />
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

      <TextInput
        style={styles.input}
        placeholder="휴대폰 번호(-없이 숫자만 입력)"
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => setPhoneNumber(`+82${phoneNumber}`)}
        value={verificationId && phoneNumber}
      />

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              (!phoneNumber && !verificationId ? '#DEE2E6' : '#EF904F') ||
              (verificationId && '#4A5056'),
          },
        ]}
        onPress={async () => {
          try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage('인증문자가 문자 발송되었습니다.');
          } catch (err) {
            console.log('error message:', err);
          }
        }}
      >
        <Text style={styles.buttonText}>
          {verificationId ? '인증문자 다시받기' : '인증문자받기'}
        </Text>
      </TouchableOpacity>
      {!verificationId && (
        <Text>
          전화번호가 변경되었나요?
          <Text style={{ textDecorationLine: 'underline', marginLeft: 10 }}>
            이메일로 계정찾기
          </Text>
        </Text>
      )}
      {verificationId && (
        <>
          <TextInput
            style={styles.input}
            placeholder="인증번호 입력"
            keyboardType="phone-pad"
            onChangeText={setVerificationCode}
          />
          <Text style={{ color: 'gray', marginBottom: 10 }}>
            어떠한 경우에도 타인과 공유하지 마세요
          </Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: !verificationCode ? '#DEE2E6' : '#EF904F' },
            ]}
            onPress={async () => {
              try {
                const credential = firebase.auth.PhoneAuthProvider.credential(
                  verificationId,
                  verificationCode
                );
                await firebase.auth().signInWithCredential(credential);

                await axios
                  .post(signIn, {
                    phone_number: phoneNumber,
                  })
                  .then(
                    (res) => {
                      AsyncStorage.setItem('token', res.data.token);
                      setToken(res.data.token);
                    }

                    // console.log(res.data.token)
                  )
                  .then(navigation.navigate('townauth', { token: token }));
              } catch (err) {
                showMessage('인증번호를 잘못 입력하셨습니다.');
                console.log('errormsg: ', err);
              }
            }}
          >
            <Text style={styles.buttonText}>인증번호 확인</Text>
          </TouchableOpacity>
        </>
      )}
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
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
