import React from 'react';
import { Center, Text } from "native-base";

const CollectionScreen = () => {
    return (
        <ScrollView bgColor="primary.500">
            <Center flex={1}>
                <Text fontSize={30}>
                    This is CollectionScreen Page
                </Text>              
            </Center>
        </ScrollView>
    );
}

export default CollectionScreen;