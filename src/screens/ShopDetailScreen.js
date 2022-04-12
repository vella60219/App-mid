import React from 'react';
import { Center, Text } from "native-base";

import ActionButton from '../components/ActionButton';
import sections from "../json/user.json";

const ShopDetailScreen = ({ navigation, route }) => {
    const {
        shop_id,
    } = route.params;

    var user = sections[0];
    var key =shop_id;
    var shop = user.shop_data[key-1];

    return (
        <>
    <Center bg="white" flex={1}>
        <Text fontSize={30}>
            This is ShopDetailScreen Page
        </Text> 
        <Text>{shop.shop_name}</Text>
    </Center>
    <ActionButton
            navigation={navigation}
            mode="edit"
        />
    </>
    );
}

export default ShopDetailScreen;