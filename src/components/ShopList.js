import React from "react";
import { Box, Text, Flex } from "native-base";
import { FlatList } from "react-native";

import { ShopListItem } from "./ShopListItem";
import { ShopTag } from './Tag';

import users from "../json/user.json";

export const ShopList = ({ navigation, }) => {

    var user = users[0];

    const renderItem = ( {item} ) => {
        return (
            <>
                <ShopListItem navigation={navigation}  item={item} />
                 
            </>
        );
    };

    const renderSectionHeader = () => {
        return (
            <Flex flexDirection='row' >
                <Text>我的店家</Text>
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
                    contentContainerStyle={{paddingTop: 8, paddingLeft: 15, paddingRight: 15}}
                />
        </Box>
    );
};
