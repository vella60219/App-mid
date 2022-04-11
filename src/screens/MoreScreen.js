import React from 'react';
import { Center, ScrollView, Text } from "native-base";

const MoreScreen = () => {
    return (
        <ScrollView bgColor="primary.500">
            <Center flex={1}>
                <Text fontSize={30}>
                    This is MoreScreen Page
                </Text>              
            </Center>
        </ScrollView>
    );
}

export default MoreScreen;