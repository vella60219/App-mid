import React from "react";
import { Box, Text } from "native-base";
import { FlatList, SectionList } from "react-native";

import MostShopItem from "./MostShopItem";
import sections from "../json/user.json";

const MostShopList = ({ navigation, sections }) => {
    
    var i =1;

    const renderItem = ( {item} ) => {
        return (
            <>
            {(i<6) ? (
                <MostShopItem navigation={navigation}  item={item} rank={i++} />
            ):null}
                 
            </>
        );
    };

    return (
        <>
         <Text>排行榜</Text>
            <Box
                borderWidth={2} borderRadius={15}
                mx={21} px="38.75" py={26}
            >
            
                <FlatList
                        horizontal={false}
                        data={sections.shop_data}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={ item => item.shop_id }
                        contentContainerStyle={{paddingTop: 8, paddingLeft: 15, paddingRight: 15}}
                    />
            </Box>
        </>
    );
};

export default MostShopList;