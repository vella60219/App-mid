import React from 'react';
import { Center, Text, ScrollView, Flex } from "native-base";

import ActionButton from '../components/ActionButton';
import sections from "../json/user.json";

import { ShopTag, EditTag } from '../components/Tag';
import { TagList } from '../components/TagList';

const ShopDetailScreen = ({ navigation, route }) => {
    const {
        shop_id,
    } = route.params;

    var user = sections[0];
    var key =shop_id;
    var shop = user.shop_data[key-1];

    return (
        <>
            <ScrollView>
                <Center bg="white" flex={1}>
                    <Text>{shop.shop_name}</Text>
                    <Text>{shop.introduction}</Text>

                </Center>
                    <TagList navigation={navigation} sections={shop.tag_data} edit={true} bg={false} />
            </ScrollView>

            <ActionButton
                        navigation={navigation}
                        mode="edit"
            />
        </>
    );
}

export default ShopDetailScreen;