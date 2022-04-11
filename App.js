import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from "./src/navigation";

import MyTheme from "./src/Theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider theme={MyTheme}>
          <Navigation />
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
