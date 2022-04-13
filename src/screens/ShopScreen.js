import React from "react";
import { Flex, Center, Text, ScrollView, Pressable} from "native-base";

import { ShopTag } from "../components/Tag";

import { ShopListItem } from "../components/ShopListItem";

import { ShopList } from "../components/ShopList";

import ActionButton from "../components/ActionButton";

import users from "../json/user.json";
// import TestList from "../components/TestList";

const ShopScreen = ({ navigation }) => {
    var user = users[0];
    return(
        <>
            <ShopList navigation={navigation} />
            <ActionButton navigation={navigation}/>
        </>
    );

};

export default ShopScreen;