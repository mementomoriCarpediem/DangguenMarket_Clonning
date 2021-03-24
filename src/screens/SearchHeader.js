import React from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function KeywordHeader({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Icon name="arrow-back" size={30} onPress={() => navigation.goBack()} />
        {route.name === 'keywordSearch' && (
          <TextInput
            style={styles.keywordInput}
            placeholder={'검색어를 입력하세요'}
          />
        )}
        {route.name === 'categorySearch' && (
          <Text style={styles.categoryText}>관심카테고리 설정</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keywordInput: {
    width: '90%',
    marginLeft: 20,
    height: 30,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  categoryText: {
    width: '100%',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
