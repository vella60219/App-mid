import React from 'react';
import { ScrollView, Center, Text, Image, Pressable, Box, Flex } from "native-base";

export const RecentEatItem = ({ navigation, item }) => {

    return (
        <Pressable h='146' w='146'
            onPress={() => navigation.navigate('Shop', item)}
        >
            <Image
                h='146' w='146'
                borderRadius={15}
                mb='16px'
                source={{uri: item.photo}}
                alt="大頭照"
            />
            <Box
                pos="fixed"
                bottom= "60"
            >
                <Text color="#fff">{item.date}</Text>
                <Flex flexDirection="row">
                    <Image
                        source= {require("../img/icon_location.png")}
                        alt=" "
                    />
                    <Text color="#fff">{item.city}</Text>
                </Flex>
            </Box>
        </Pressable>
    );
}




export const MostShopItem = ({ navigation, item , rank}) => {

    return (
        <Pressable display="flex" flexDirection="row"
            onPress={() => navigation.navigate('Shop', item)}
        >
            <Box
                h='49' w='49' bg="primary"
                borderRadius={90}
                mb='16px'
            >
                <Center>
                    <Text
                    // pos="fixed" bottom= "0"
                    fontSize={24}
                    textAlign="center"
                    >{rank}</Text>
                </Center>
            </Box>
            <Box
            >
                 <Text >{item.shop_name}</Text>
                <Text >{item.introduction}</Text>
            </Box>
        </Pressable>
    );
}