import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from "./MyStacks";
import MyTabs from "./MyTabs";
import MyTheme from "../Theme";

const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <HomeStack/>
        </NavigationContainer>
    );
};




export default Navigation;