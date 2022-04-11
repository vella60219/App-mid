import React from 'react';
import { ScrollView, Center, Text } from "native-base";

const CollectionScreen = () => {
    return (
        <ScrollView bgColor="white">
            <Center flex={1}>
                <Text fontSize={30}>
                    This is CollectionScreen Page
                </Text>              
            </Center>
        </ScrollView>
    );
}

export default CollectionScreen;