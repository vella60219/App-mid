import React from 'react';
import { useTheme, Center, Text, Pressable, Box, Flex } from "native-base";
import StarRating from 'react-native-star-rating';

import { TagList } from './TagList';
import StarButton from './StarButton';
import MyTheme from "../Theme";

export const ShopListItem = ({ navigation, item }) => {
    const {colors} = useTheme(MyTheme);
    return (
        <Flex 
            flexDirection='row'
            borderColor= "primary"
            borderWidth={2} 
            borderRadius={15}
            px={18.85} py={11}
            my="1"
        >
            <Pressable 
            // h='146' w='146'
                onPress={() => navigation.navigate('Shop', item)}
            >
                <Text fontSize="2xl">{item.shop_name}</Text>
                <Flex 
                    flex={1}
                    flexDirection="row" 
                    justifyContent ="flex-start"
                    alignItems="center"
                >
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={item.rate}
                        fullStarColor={colors.pink}
                        fullStar = {"heart"}
                        emptyStar = {"heart-outline"}
                        emptyStarColor={colors.pink}
                        halfStar = {"heart-half-full"}
                        halfStarColor = {colors.pink}
                        halfStarEnabled = {true}
                        starSize={20}
                        containerStyle={{justifyContent: "flex-start",marginTop:14}}
                        starStyle={{marginRight: 4}}
                        iconSet={"MaterialCommunityIcons"}
                    />
                    <Text
                        fontSize="md"
                        fontWeight="light"
                        letterSpacing='1'
                        color='grey'
                        marginTop='3'
                    >{item.rate}</Text>
                    <Text
                        fontSize="md"
                        fontWeight="light"
                        letterSpacing='1'
                        marginTop='3'
                        color='grey'
                    >/5</Text>
                </Flex>
                <TagList navigation={navigation} sections={item.tag_data} edit={false} bg={true} />
                <Text
                    fontSize="md"
                    letterSpacing='1.2'
                    marginTop='1'
                >{item.introduction}</Text>
            </Pressable>
            <Box 
                flex={1}
                justifyContent="center"
                alignItems="center"
            ><StarButton/></Box>
        </Flex>
    );
}

