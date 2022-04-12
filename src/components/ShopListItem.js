import React from 'react';
import { ScrollView, Center, Text, Image, Pressable, Box, Flex } from "native-base";

import { ShopTag } from './Tag';
import { TagList } from './TagList';
import StarButton from './StarButton';

import StarRating from 'react-native-star-rating';


export const ShopListItem = ({ navigation, item }) => {

    return (
        <Flex flexDirection='row'
            borderWidth={2} borderRadius={15}
            px={18.85} py={11}
        >
            <Pressable 
            // h='146' w='146'
                onPress={() => navigation.navigate('Shop', item)}
            >
                <Text>{item.shop_name}</Text>
                <Flex flexDirection="row" >
                     <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={item.rate}
                        fullStarColor={'primary'}
                        fullStar = {"heart"}
                        emptyStar = {"heart-outline"}
                        emptyStarColor={'primary'}
                        halfStar = {"heart-half-full"}
                        halfStarColor = {'primary'}
                        halfStarEnabled = {true}
                        starSize={10}
                        containerStyle={{justifyContent: "flex-start", marginBottom: 8.5}}
                        starStyle={{marginRight: 4}}
                        iconSet={"MaterialCommunityIcons"}
                    />
                    <Text
                        fontSize='12'
                        fontWeight='400'
                        letterSpacing='1.2'
                        // color='grey'
                    >{item.rate}</Text>
                    <Text
                        fontSize='12'
                        fontWeight='400'
                        letterSpacing='1.2'
                        // color='grey'
                    > / 5</Text>
                </Flex>
                <TagList navigation={navigation} sections={item.tag_data} edit={false} bg={true} />
                <Text
                        fontSize='12'
                        letterSpacing='1.2'
                    >{item.introduction}</Text>
            </Pressable>
            <Center><StarButton/></Center>
        </Flex>
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