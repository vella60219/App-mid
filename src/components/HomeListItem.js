import React from 'react';
import { Center, Text, Image, Pressable, Box, Flex, HStack } from "native-base";
// import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient

export const RecentEatItem = ({ navigation, item }) => {
    return (
        <Pressable 
            h='146' w='146'
            mr={3}
            onPress={() => navigation.navigate('Shop', item)}
        >
            <Image
                h='146' w='146'
                borderRadius={15}
                source={{uri: item.photo}}
                alt="近期吃的照片"
            />
            <Box
                pos="fixed"
                top={0}
                h='146' w='146'
                color="black"
                opacity={0.2}
            >
            </Box>
            <Box
                pos="fixed"
                bottom= "50"
                left="3"
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
