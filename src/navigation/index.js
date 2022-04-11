import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from "./MyStacks";
import MyTabs from "./MyTabs";

const Navigation = () => {
    return (
        <NavigationContainer>
            <HomeStack/>
        </NavigationContainer>
    );
};




export default Navigation;