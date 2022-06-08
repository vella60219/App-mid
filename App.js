import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from "./src/navigation";

import { Provider } from "react-redux";
import { store } from './src/redux/store';

import MyTheme from "./src/Theme";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <NativeBaseProvider theme={MyTheme}>
            <Navigation />
          </NativeBaseProvider>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
