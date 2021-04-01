import React, { useEffect } from 'react';
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
import TownAuth from './src/screens/TownAuth';
import ProductDetail from './src/screens/ProductDetail/ProductDetail';
import KeywordSearch from './src/navigations/KeywordSearch';
import CategorySearch from './src/screens/CategorySearch';
import SearchHeader from './src/screens/SearchHeader';
import TopStacks from './src/navigations/TopStacks';

import { Provider, observer } from 'mobx-react';
import categoryStore from './src/store/CategoryStore';

const Stack = createStackNavigator();

function App() {
  const [loaded, error] = useFonts({
    JejuMyeongjo: require('./assets/fonts/JejuMyeongjoOTF.otf'),
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={categoryStore}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="topStacks">
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
                      <Icon
                        name="md-arrow-back"
                        size={30}
                        style={{ marginLeft: 20 }}
                      />
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
                name="topStacks"
                component={TopStacks}
                options={{
                  headerShown: false,
                }}
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
      </Provider>
    );
  }
}

export default App;
