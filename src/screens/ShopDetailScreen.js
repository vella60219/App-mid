import React from 'react';
import { Center, Text } from "native-base";

import ActionButton from '../components/ActionButton';

const ShopDetailScreen = ({ navigation }) => {
    return (
        <>
    <Center bg="white" flex={1}>
        <Text fontSize={30}>
            This is ShopDetailScreen Page
        </Text>              
    </Center>
    <ActionButton
            navigation={navigation}
            mode="edit"
        />
    </>
    );
}

export default ShopDetailScreen;