import React from "react";
import { Box, Center, Text, useTheme} from "native-base";

import { ShopList } from "../components/ShopList";

import ActionButton from "../components/ActionButton";

import users from "../json/user.json";
import MyTheme from "../Theme";

const ShopScreen = ({ navigation }) => {
    const {colors} = useTheme(MyTheme);
    var user = users[0];
    return(
        <>
            <ShopList navigation={navigation} />
            <ActionButton navigation={navigation}/>
        </>
    );

};

export default ShopScreen;