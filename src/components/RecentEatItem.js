import React from 'react';
import { ScrollView, Center, Text, Image, Pressable, Box, Flex } from "native-base";

const RecentEatItem = ({ navigation, item }) => {

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

export default RecentEatItem;