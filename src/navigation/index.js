import React from "react";

import { NavigationContainer } from '@react-navigation/native';


import MyTabs from "./MyTabs";

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
};




export default Navigation;