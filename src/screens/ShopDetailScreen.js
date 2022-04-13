import React from 'react';
import { Center, Text, ScrollView, Flex, Box } from "native-base";

import ActionButton from '../components/ActionButton';
import sections from "../json/user.json";

import { ShopTag, EditTag } from '../components/Tag';
import { TagList } from '../components/TagList';
import { DishList, } from '../components/ShopList';

import { WishListItem } from '../components/ShopListItem';

import TopTab from '../navigation/TopTabs';

const ShopDetailScreen = ({ navigation, route }) => {
    const {
        shop_id,
    } = route.params;

    var user = sections[0];
    var key =shop_id;
    var shop = user.shop_data[key-1];

    return (
        <>
            {/* <ScrollView> */}
                <Center bg="white">
                    <Text>{shop.shop_name}</Text>
                    <Text>{shop.introduction}</Text>
                </Center>
                    <TagList navigation={navigation} sections={shop.tag_data} edit={true} bg={false} />
                    <Box flex={1} height={800}>
                    <TopTab navigation={navigation} shop={shop_id} />
                    </Box>
                    
                    {/* </ScrollView> */}
            <ActionButton
                        navigation={navigation}
                        mode="edit"
            />
        </>
    );
}

export default ShopDetailScreen;