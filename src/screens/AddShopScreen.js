import React from 'react';
import { Center, Text, Pressable } from "native-base";

const AddShopScreen = ({ navigation }) => {
    return (
        <>
    <Center bg="white" flex={1}>
        <Text fontSize={30}>
            This is AddShopScreen Page
        </Text>
            {/* <Pressable
                onPress={() => navigation.navigate('Shop')}
                shadow= {2}
                h={100} w={100} bg="#999999"
            ></Pressable>       */}
    </Center>
    </>
    );
}

export default AddShopScreen;