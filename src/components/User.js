import React from 'react';
import { Center, Text, Image, HStack } from "native-base";

export const UserHomeProfile = ({user}) => {
    return (
        <>
            <Text>歡迎回來，{user.name}！</Text>
            <Center bg="emerald.100" >
                <Image
                    h='114' w='114'
                    borderRadius={90}
                    mb='16px'
                    source={{uri: user.profile_pic}}
                    alt="大頭照"
                />
                <Text fontSize={30}>{user.name}</Text>
                <HStack
                    py={21} px={52.5}
                    justifyContent= "center"
                    borderWidth={2}
                    borderRadius={15}
                >
                    <Center>
                        <Text>{user.shop_count}</Text>
                        <Text>已吃店家</Text>
                    </Center>
                    <Center>
                        <Text>{user.month_count}</Text>
                        <Text>本月已吃</Text>
                    </Center>
                    <Center>
                        <Text>{user.city_count}</Text>
                        <Text>去過縣市</Text>
                    </Center>
                </HStack>
            </Center>
        </>
    );
}