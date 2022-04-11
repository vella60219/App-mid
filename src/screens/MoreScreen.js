import React from 'react';
import { Center, ScrollView, Text } from "native-base";

const MoreScreen = () => {
    return (
        <ScrollView bgColor="white">
            <Center flex={1}>
                <Text fontSize={30}>
                    This is MoreScreen Page
                </Text>              
            </Center>
        </ScrollView>
    );
}

export default MoreScreen;