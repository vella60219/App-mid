import React from "react";
import { Box, Text, Flex } from "native-base";
import { FlatList } from "react-native";

import { ShopListItem, DishListItem, WishListItem } from "./ShopListItem";
import { ShopTag } from './Tag';

import users from "../json/user.json";

export const ShopList = ({ navigation }) => {
    var user = users[0];

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
                justifyContent="flex-start"
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
                    contentContainerStyle={{padding:25}}
                />
        </Box>
    );
};






export const DishList = ({ navigation, sections, shop }) => {

    var user = users[0];
    var dish_count = user.dish_data.length;

    const space = sections.filter(x => x.shop_id == shop );
    // return(
    //     <Text>{space.length}</Text>
    // );
    // {space.map((item) => {
    //     return (
    //         <DishListItem navigation={navigation} item={item} />
    //     );
    //   })}
    
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
                    contentContainerStyle={{paddingTop: 8, paddingLeft: 15, paddingRight: 15}}
                />
        </Box>
    );
};

export const WishList = ({ navigation, sections, shop }) => {

    var user = users[0];
    var dish_count = user.dish_data.length;

    const space = sections.filter(x => x.shop_id == shop );
    // return(
    //     <Text>{space.length}</Text>
    // );
    // {space.map((item) => {
    //     return (
    //         <DishListItem navigation={navigation} item={item} />
    //     );
    //   })}
    
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
                    contentContainerStyle={{paddingTop: 8, paddingLeft: 15, paddingRight: 15}}
                />
        </Box>
    );
};