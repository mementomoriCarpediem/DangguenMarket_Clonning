import React, { useEffect } from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

import Entry from './src/screens/Entry';
import PhoneNumberAuth from './src/screens/PhoneAuth/PhoneNumberAuth';
import townAuth from './src/screens/TownAuth';
import HomeTabs from './src/navigations/HomeTabs';
import ProductDetail from './src/screens/ProductDetail/ProductDetail';
import TopMenus from './src/screens/TopMenus';
import keywordSearch from './src/screens/KeywordSearch';
import categorySearch from './src/screens/CategorySearch';

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
          <Stack.Navigator initialRouteName="townauth">
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
              component={townAuth}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="home"
              component={HomeTabs}
              options={{
                headerTitle: (route) => <TopMenus {...route} />,
              }}
            />
            <Stack.Screen
              name="productDetail"
              component={ProductDetail}
              options={{
                headerShown: false,
              }}
            />
            {/* <Stack.Screen name="keywordSearch" component={keywordSearch} />
            <Stack.Screen name="categorySearch" component={categorySearch} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
