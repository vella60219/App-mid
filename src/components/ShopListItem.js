import React from 'react';
import { useTheme, Center, Text, Image, Pressable, Box, Flex } from "native-base";

import { TagList } from './TagList';
import StarButton from './StarButton';
import MyTheme from "../Theme";

import StarRating from 'react-native-star-rating';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

export const ShopListItem = ({ navigation, item }) => {
    const {colors} = useTheme(MyTheme);
    return (
        <Flex 
            flexDirection='row'
            borderWidth={2} 
            borderRadius={15}
            borderColor={colors.primary}
            // _light={{bg: colors.white }}
            // _dark={{bg: "gray.800" }}
            px="0"
            py="3"
            my="1" 
            justifyContent="space-around"
            _light={{bg:"white"}}
            _dark={{bg:"item_dark"}}
        >
            <Pressable 
            // h='146' w='146'
                w={250}
                onPress={() => navigation.navigate('Shop', item)}
            >
                <Text
                    fontSize="xl" 
                    fontWeight="bold"
                >{item.shop_name}</Text>
                <Flex 
                    flexDirection="row"
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
                        containerStyle={{justifyContent: "flex-start", marginTop: 13}}
                        starStyle={{marginRight: 4}}
                        iconSet={"MaterialCommunityIcons"}
                    />
                    <Text
                        fontSize="md"
                        fontWeight='400'
                        letterSpacing='1.2'
                        color='grey'
                        marginTop ="3"
                    >{item.rate}</Text>
                    <Text
                        fontSize="md"
                        fontWeight='400'
                        letterSpacing='1'
                        color='grey'
                        marginTop ="3"
                        textAlign="center"
                    >/5</Text>
                </Flex>
                <Flex flex={1} alignItems='flex-start' >
                <TagList navigation={navigation} sections={item.tag_data} edit={false} bg={true} />
                </Flex>
                <Text
                    fontSize="md"
                    letterSpacing='1.2'
                >{item.introduction}</Text>
            </Pressable>
            <Center><StarButton marginRight="10" /></Center>
        </Flex>
    );
}




export const DishListItem = ({ navigation, item }) => {
    const {colors} = useTheme(MyTheme);
    return (
            <Pressable 
                flexDirection='row'
                borderWidth={2} 
                borderRadius={15}
                borderColor={colors.primary} 
                _light={{bg:"white"}}
                _dark={{bg:"item_dark"}}
                px={18.85} py={11}
                my="1"
                onPress={() => navigation.navigate('Shop', item)}
            >
                <Flex 
                    flexDirection="row" 
                    justifyContent="space-around"
                >
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Image
                            h='130' w='130'
                            borderRadius={15}
                            mb="2"
                            source={{uri: item.photo}}
                            alt="圖片"
                        />
                        <Flex 
                            flexDirection="row" 
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Center 
                                w="15" h="15"
                                marginRight="2"
                                borderWidth={1.5} 
                                borderRadius={90} 
                                borderColor={colors.primary} 
                            >
                                <FontAwesome
                                    name= 'dollar-sign'
                                    size={9}
                                    style={{
                                        color: colors.primary, 
                                    }} 
                                />
                            </Center>                      
                            <Text
                                fontSize="sm"
                                fontWeight='400'
                                letterSpacing='1.2'
                                color={colors.grey}
                            >{item.price}</Text>
                        </Flex>
                    </Flex>
                    <Box
                        marginLeft="3.5"
                        w={205}
                    >
                        <Text
                            fontSize="2xl"
                            letterSpacing={1.1}
                        >{item.name}</Text>
                        <Flex 
                            flexDirection="row"
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
                                containerStyle={{justifyContent: "flex-start", marginTop: 13}}
                                starStyle={{marginRight: 4}}
                                iconSet={"MaterialCommunityIcons"}
                            />
                            <Text
                                fontSize="md"
                                letterSpacing='1.2'
                                color={colors.grey}
                                marginTop ="3"
                            >{item.rate}</Text>
                            <Text
                                fontSize="md"
                                letterSpacing='1'
                                color={colors.grey}
                                marginTop ="3"
                            >/5</Text>
                        </Flex>
                        <Text
                            fontSize="md"
                            letterSpacing='1'
                        >{item.detail}</Text>
                    </Box>
                </Flex>
            </Pressable>
    );
}


export const WishListItem = ({ navigation, item }) => {
    const {colors} = useTheme(MyTheme);
    return (
        <Pressable 
            borderWidth={2} 
            borderRadius={15}
            px={18.85} py="3"
            mx="3" my="1"
            borderColor={colors.primary} 
            _light={{bg:"white"}}
            _dark={{bg:"item_dark"}}
            onPress={() => navigation.navigate('Shop', item)}
        >
            <Text
                fontSize="xl"
                letterSpacing='1.2'
                fontWeight="bold"
                // color={colors.black}
            >{item.name}</Text>
            <Flex 
                flexDirection="row" 
                alignItems="center"
            >
                <Center 
                    w="18" h="18"
                    borderWidth={1.5} 
                    borderRadius={90} 
                    borderColor= {colors.primary}
                    marginRight="1"
                    my="1"
                    marginTop="3"
                >
                    <FontAwesome
                        name= 'dollar-sign'
                        size={10}
                        style={{
                            color: colors.primary, 
                        }} 
                    />
                </Center>
                <Text
                    fontSize="md"
                    letterSpacing='1.2'
                    color={colors.grey}
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
    const {colors} = useTheme(MyTheme);
    return (
        <Pressable 
            borderWidth={2} 
            borderRadius={25}
            py="8"
            mx="2" my="5"
            // onPress={() => navigation.navigate('Shop', item)}
        >
            <Center>
                <Octicons name="plus" color={colors.black} size={32} />
            </Center>
        </Pressable>
    );
}