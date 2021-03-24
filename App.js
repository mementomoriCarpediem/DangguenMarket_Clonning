import React, { useEffect } from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

import Entry from './src/screens/Entry';
import PhoneNumberAuth from './src/screens/PhoneAuth/PhoneNumberAuth';
import TownAuth from './src/screens/TownAuth';
import HomeTabs from './src/navigations/HomeTabs';
import ProductDetail from './src/screens/ProductDetail/ProductDetail';
import TopMenus from './src/screens/HomeTabs/TopMenus';
import KeywordSearch from './src/navigations/KeywordSearch';
import CategorySearch from './src/screens/CategorySearch';
import SearchHeader from './src/screens/SearchHeader';

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    JejuMyeongjo: require('./assets/fonts/JejuMyeongjoOTF.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen
              name="entry"
              component={Entry}
              options={{
                headerShown: false,
                title: '초기화면',
              }}
            />
            <Stack.Screen
              name="phonenumberauth"
              component={PhoneNumberAuth}
              options={({ navigation }) => ({
                title: '전화번호 인증',
                headerBackTitleVisible: false,
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Image
                      source={require('./assets/images/left-arrow.png')}
                      style={{ width: 30, height: 30, marginLeft: 10 }}
                    />
                    {/* <Icon
                      name="md-arrow-back"
                      size={30}
                      style={{ marginLeft: 20 }}
                    /> */}
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="townauth"
              component={TownAuth}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="home"
              component={HomeTabs}
              options={({ navigation }) => ({
                headerTitle: () => <TopMenus navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="productDetail"
              component={ProductDetail}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="keywordSearch"
              component={KeywordSearch}
              options={({ navigation, route }) => ({
                headerLeft: () => {},
                headerTitle: () => (
                  <SearchHeader navigation={navigation} route={route} />
                ),
              })}
            />
            <Stack.Screen
              name="categorySearch"
              component={CategorySearch}
              options={({ navigation, route }) => ({
                headerLeft: () => {},
                headerTitle: () => (
                  <SearchHeader navigation={navigation} route={route} />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
