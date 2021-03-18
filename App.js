import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import BottomNav from './src/navigations/BottomNav';

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
          <BottomNav />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
