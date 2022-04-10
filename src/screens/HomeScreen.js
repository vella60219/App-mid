import React from 'react';
import { Center, Text } from "native-base";

const HomeScreen = () => {
    return (
        <>
            <Text>歡迎回來，user！</Text>
            <Center bg="emerald.100" flex={1}>
                <Text fontSize={30}>
                    This is HomeScreen Page
                </Text>              
            </Center>
        </>
    );
}

export default HomeScreen;