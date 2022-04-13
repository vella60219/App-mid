import React from 'react';
import { Center, Text, useTheme, Box } from "native-base";
import TopTab from '../navigation/TopTabs';

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
        <Box
            theme={MyTheme}
            _light={{bg: colors.white }}
            _dark={{bg: colors.black}}
        >
                <Center>
                    <Text>{shop.shop_name}</Text>
                    <Text>{shop.introduction}</Text>
                    <TagList navigation={navigation} sections={shop.tag_data} edit={true} bg={false} />
                </Center>
                    <Box flex={1} height={800}>
                    <TopTab navigation={navigation} shop={shop_id} mode="show" />
                    </Box>
                    
                <ActionButton
                    navigation={navigation}
                    mode="edit"
                />
        </Box>
    );
}

export default ShopDetailScreen;