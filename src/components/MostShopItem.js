import React from 'react';
import { ScrollView, Center, Text, Image, Pressable, Box, Flex } from "native-base";

const MostShopItem = ({ navigation, item , rank}) => {

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

export default MostShopItem;