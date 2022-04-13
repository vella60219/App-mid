import React from 'react';
import { ScrollView, Center, Text, Image, Pressable, Box, Flex } from "native-base";

import { ShopTag } from './Tag';
import { TagList } from './TagList';
import StarButton from './StarButton';

import StarRating from 'react-native-star-rating';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';


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




export const DishListItem = ({ navigation, item }) => {

    return (
            <Pressable 
            flexDirection='row'
            borderWidth={2} borderRadius={15}
            px={18.85} py={11}
                onPress={() => navigation.navigate('Shop', item)}
            >
                <Flex flexDirection="row" >
                    <Box>
                        <Image
                            h='146' w='146'
                            borderRadius={15}
                            mb='16px'
                            source={{uri: item.photo}}
                            alt="圖片"
                        />
                        <Flex flexDirection="row" >
                            <Center 
                                w="15" h="15"
                                borderWidth={1.5} borderRadius={90} borderColor="primary" >
                            <FontAwesome
                            name= 'dollar-sign'
                            size={9}
                            style={{
                                color: "primary", 
                            }} 
                        />
                            </Center>
                        
                            <Text
                                    fontSize='12'
                                    fontWeight='400'
                                    letterSpacing='1.2'
                                    // color='grey'
                                >{item.price}</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Text>{item.name}</Text>
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
                        <Text
                            fontSize='12'
                            letterSpacing='1.2'
                        >{item.detail}</Text>
                    </Box>
                </Flex>
            </Pressable>
    );
}


export const WishListItem = ({ navigation, item }) => {

    return (
        <Pressable 
        borderWidth={2} borderRadius={15}
        px={18.85} py={11}
            onPress={() => navigation.navigate('Shop', item)}
        >
                    <Text>{item.name}</Text>
                    <Flex flexDirection="row" >
                        <Center 
                            w="15" h="15"
                            borderWidth={1.5} borderRadius={90} borderColor="primary" >
                        <FontAwesome
                        name= 'dollar-sign'
                        size={9}
                        style={{
                            color: "primary", 
                        }} 
                    />
                        </Center>
                    
                        <Text
                                fontSize='12'
                                fontWeight='400'
                                letterSpacing='1.2'
                                // color='grey'
                            >{item.price}</Text>
                    </Flex>
                    <Text
                        fontSize='12'
                        letterSpacing='1.2'
                    >{item.detail}</Text>
        </Pressable>
    );
}





export const AddItem = ({ navigation, mode }) => {

    return (
        <Pressable 
        borderWidth={2} borderRadius={15}
        px={18.85} py={11}
            // onPress={() => navigation.navigate('Shop', item)}
        >
            <Center>
                <Octicons name="plus" color="black" size={32} />
            </Center>
        </Pressable>
    );
}