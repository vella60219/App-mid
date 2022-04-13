import React from 'react';
import { Center, Text, ScrollView, Box ,useTheme } from "native-base";

import ActionButton from '../components/ActionButton';
import sections from "../json/user.json";
import { TagList } from '../components/TagList';
import MyTheme from "../Theme";

const ShopDetailScreen = ({ navigation, route }) => {
    const {colors} = useTheme(MyTheme);
    const {
        shop_id,
    } = route.params;

    var user = sections[0];
    var key =shop_id;
    var shop = user.shop_data[key-1];

    return (
        <>
            <Box
                bgColor={colors.white}
                flex={1}
                flexDirection="column"
                alignItems="center"
            >
                <Text 
                    fontSize="4xl" 
                    fontWeight="bold"
                >{shop.shop_name}</Text>
                <Text                    
                    fontSize="2xl"
                >{shop.introduction}</Text>
                <TagList navigation={navigation} sections={shop.tag_data} edit={true} bg={false} />
            </Box>

            <ActionButton
                navigation={navigation}
                mode="edit"
            />
        </>
    );
}

export default ShopDetailScreen;