import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from "./MyStacks";
import MyTabs from "./MyTabs";
import MyTheme from "../Theme";
import { StatusBar, useTheme, useColorMode, KeyboardAvoidingView } from "native-base";

const Navigation = () => {
    const {colors} = useTheme(MyTheme);
    const {colorMode} =useColorMode(MyTheme)
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.select({ios: 0, android: -500})}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            flex={1}
        >
            <NavigationContainer theme={MyTheme}>
                <StatusBar
                    barStyle={ colorMode == 'light' ? colors.black : colors.white}
                    backgroundColor={ colorMode == 'light' ? colors.white : colors.black}
                />
                <HomeStack/>
            </NavigationContainer>
        </KeyboardAvoidingView>
    );
};




export default Navigation;