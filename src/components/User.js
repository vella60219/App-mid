import React from 'react';
import { Center, Text, Image, HStack ,useTheme, useAccessibleColors, getColor } from "native-base";

//這裡沒資料，資料在HomeScreen

export const UserHomeProfile = ({user}) => {
    return (
        <>
            <Text 
                mt='5' 
                mx='3'
                fontSize="md"
            >
                歡迎回來，{user.name}！</Text>
            <Center>
                <Image
                    h='114' w='114'
                    borderRadius={90}
                    mb={3} mt={8}
                    source={{uri: user.profile_pic}}
                    alt="大頭照"
                />
                <Text fontSize="4xl" fontWeight="bold">{user.name}</Text>
                <HStack
                    py={18} px={10} mt={3}
                    space={8}
                    justifyContent= "center"
                    borderWidth={2}
                    borderRadius={15}
                >
                    <Center>
                        <Text fontSize="2xl">{user.shop_count}</Text>
                        <Text fontSize="md" color="grey">已吃店家</Text>
                    </Center>
                    <Center>
                        <Text fontSize="2xl">{user.month_count}</Text>
                        <Text fontSize="md" color="grey">本月已吃</Text>
                    </Center>
                    <Center>
                        <Text fontSize="2xl">{user.city_count}</Text>
                        <Text fontSize="md" color="grey">去過縣市</Text>
                    </Center>
                </HStack>
            </Center>
        </>
    );
}