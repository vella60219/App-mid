import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from "./MyStacks";
import MyTabs from "./MyTabs";
import MyTheme from "../Theme";
import { StatusBar, useTheme, useColorMode } from "native-base";

const Navigation = () => {
    const {colors} = useTheme(MyTheme);
    const {colorMode} =useColorMode(MyTheme)
    return (
        <NavigationContainer theme={MyTheme}>
            <StatusBar
                barStyle={ colorMode == 'light' ? colors.black : colors.white}
                backgroundColor={ colorMode == 'light' ? colors.white : colors.black}
            />
            <HomeStack/>
        </NavigationContainer>
    );
};




export default Navigation;