import React from 'react';
import { useTheme, Text, Image, Pressable, Box, Flex, HStack } from "native-base";
// import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient
import MyTheme from "../Theme";

export const RecentEatItem = ({ navigation, item }) => {
    const {colors} = useTheme(MyTheme);
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
                <Text fontSize="md" color={colors.white} >{item.date}</Text>
                <Flex flexDirection="row" alignItems="center">
                    <Image
                        source= {require("../img/icon_location.png")}
                        alt=" "
                        mr="1"
                    />
                    <Text fontSize="md" lineHeight="md" color={colors.white} >{item.city}</Text>
                </Flex>
            </Box>
        </Pressable>
    );
}

export const MostShopItem = ({ navigation, item , rank}) => {
    const {colors} = useTheme(MyTheme);
    var bg,textColor; 
    {(rank == 1)? (bg=colors.primary,textColor= colors.black ): (bg="transparent",textColor=colors.grey)}

    return (
        <Pressable 
            display="flex" 
            flexDirection="row"
            onPress={() => navigation.navigate('Shop', item)}
        >
            <HStack
                alignItems="flex-start"
                py="3"
            >
                <Box
                    h='55' w='55'
                    borderRadius={90}
                    marginRight="5"
                    bg = {bg} 
                    borderWidth="2"
                    borderColor="primary"
                >
                    <Text
                        fontSize= "2xl"
                        fontWeight= "bold"
                        lineHeight= "2xl"
                        color= {textColor}
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
