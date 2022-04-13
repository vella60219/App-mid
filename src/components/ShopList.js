import React from "react";
import { Box, Text, Flex, useTheme, useColorMode } from "native-base";
import { FlatList } from "react-native";

import { ShopListItem, DishListItem, WishListItem } from "./ShopListItem";
import { ShopTag } from './Tag';

import MyTheme from "../Theme";
import users from "../json/user.json";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const ShopList = ({ navigation }) => {
    var user = users[0];
    const {colors} = useTheme(MyTheme);
    const {colorMode} =useColorMode(MyTheme)

    const renderItem = ( {item} ) => {
        return (
            <>
                <ShopListItem navigation={navigation} item={item} />
            </>
        );
    };

    const renderSectionHeader = () => {
        return (
            <Flex 
                flex={1}
                flexDirection='row'
                justifyContent="space-between"
                alignItems="center"
                my="3"
            >
                <Text fontSize="2xl">我的店家</Text>
                <ShopTag content="tag" bg={true} />
            </Flex>  
        );
    }

    return (
        <Box flex={1}>
            <FlatList
                    horizontal={false}
                    data={user.shop_data}
                    renderItem={renderItem}
                    ListHeaderComponent={renderSectionHeader}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item.shop_id }
                    contentContainerStyle={{padding:25 ,backgroundColor:'transparent'}}
                />
        </Box>
    );
};


export const DishList = ({ navigation, sections, shop }) => {

    const {colors} = useTheme(MyTheme);
    const {colorMode} =useColorMode(MyTheme)

    var user = users[0];
    var dish_count = user.dish_data.length;

    const space = sections.filter(x => x.shop_id == shop );

    const renderItem = ( {item} ) => {
        return (
            <>
                <DishListItem navigation={navigation}  item={item} />
                 
            </>
        );
    };

    return (
        <Box flex={1}> 
            <FlatList
                    horizontal={false}
                    data={space}
                    renderItem={renderItem}
                    //ListHeaderComponent={renderSectionHeader}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item.id }
                    contentContainerStyle={{padding:20 ,paddingTop: 20,
                        backgroundColor: colorMode == 'light' ? colors.white : colors.black
                    }}
                />
        </Box>
    );
};

export const WishList = ({ navigation, sections, shop }) => {
    
    const {colors} = useTheme(MyTheme);
    const {colorMode} =useColorMode(MyTheme)

    var user = users[0];
    var dish_count = user.dish_data.length;

    const space = sections.filter(x => x.shop_id == shop );
    
    const renderItem = ( {item} ) => {
        return (
            <>
                <WishListItem navigation={navigation}  item={item} />
                 
            </>
        );
    };

    return (
        <Box flex={1}>
            <FlatList
                    horizontal={false}
                    data={space}
                    renderItem={renderItem}
                    //ListHeaderComponent={renderSectionHeader}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item.id }
                    contentContainerStyle={{paddingTop: 8, paddingLeft: 15, paddingRight: 15,
                        backgroundColor: colorMode == 'light' ? colors.white : colors.black

                    }}
                />
        </Box>
    );
};