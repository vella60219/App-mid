import React from 'react';
import { Center, Text, Image, Pressable, Box, Flex, HStack } from "native-base";
// import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient

export const RecentEatItem = ({ navigation, item }) => {
    return (
        <Pressable 
            h='160' w='160'
            mr={3}
            onPress={() => navigation.navigate('Shop', item)}
        >
            <Image
                h='160' w='160'
                borderRadius={15}
                source={{uri: item.photo}}
                alt="近期吃的照片"
            />
            <Box
                pos="fixed"
                bottom= "55"
                left="3"
            >
                <Text fontSize="md" color="white">{item.date}</Text>
                <Flex flexDirection="row" alignItems="center">
                    <Image
                        source= {require("../img/icon_location.png")}
                        alt=" "
                        mr="1"
                    />
                    <Text fontSize="md" lineHeight="md" color="white">{item.city}</Text>
                </Flex>
            </Box>
        </Pressable>
    );
}

export const MostShopItem = ({ navigation, item , rank}) => {
    var bg;
    {(rank == 1)? (bg="primary"): (bg="transparent")}
    return (
        <Pressable 
            display="flex" 
            flexDirection="row"
            onPress={() => navigation.navigate('Shop', item)}
        >
            <HStack
                alignItems="center"
                py="3"
            >
                <Box
                    h='55' w='55'
                    borderRadius={90}
                    marginRight="3"
                    bg = {bg} 
                    borderWidth="2"
                    borderColor="primary"
                >
                    <Text
                        fontSize= "2xl"
                        fontWeight= "bold"
                        lineHeight= "2xl"
                        color= "black"
                        textAlign= "center"
                    >
                        {rank}
                    </Text>
                </Box>
                <Box
                >
                    <Text fontSize="xl" fontWeight="bold">{item.shop_name}</Text>
                    <Text >{item.introduction}</Text>
                </Box>
            </HStack>
        </Pressable>
    );
}
