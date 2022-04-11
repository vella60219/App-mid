import React from 'react';
import { Center, Text, Image, HStack, useTheme, useAccessibleColors, getColor } from "native-base";

//這裡沒資料，資料在HomeScreen

export const UserHomeProfile = ({user}) => {
    return (
        <>
            <Text mt='5' mx='3'>歡迎回來，{user.name}！</Text>
            <Center>
                <Image
                    h='114' w='114'
                    borderRadius={90}
                    mb='4' mt={8}
                    source={{uri: user.profile_pic}}
                    alt="大頭照"
                />
                <Text fontSize={30}>{user.name}</Text>
                <HStack
                    py={21} px={10} mt={3}
                    space={8}
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