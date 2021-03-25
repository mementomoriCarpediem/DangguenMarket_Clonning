import React from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function KeywordHeader({ navigation, route }) {
  const windowWidth = useWindowDimensions().width;

  return (
    <SafeAreaView style={[styles.container, { width: windowWidth }]}>
      <View style={[styles.topContainer, { width: windowWidth }]}>
        <Icon
          name="arrow-back"
          style={{ left: windowWidth * 0.05 }}
          size={30}
          onPress={() => navigation.goBack()}
        />
        {route.name === 'keywordSearch' && (
          <TextInput
            style={styles.keywordInput}
            placeholder={'검색어를 입력하세요'}
          />
        )}
        {route.name === 'categorySearch' && (
          <Text style={[styles.categoryText, { left: windowWidth * 0.25 }]}>
            관심카테고리 설정
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    backgroundColor: 'white',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  keywordInput: {
    width: '80%',
    marginLeft: 30,
    height: 30,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  categoryText: {
    width: '100%',
    fontSize: 18,
    fontWeight: '600',
  },
});
