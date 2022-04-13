import React from "react";
import { Box, Text } from "native-base";
import { FlatList } from "react-native";

import { RecentEatItem, MostShopItem } from "./HomeListItem";


export const RecentEatList = ({ navigation, sections }) => {
    var i =1;

    const renderItem = ( {item} ) => {
        return (
            <>
            {(i<6) ? (
                <RecentEatItem navigation={navigation}  item={item} rank={i++} />
            ):null}
                 
            </>
        ); 
    };

    return (
        <Box my={10}>
            <Text mx={5} fontSize="2xl">近期吃</Text>
            <Box mt={5}>
                <FlatList
                        horizontal={true}
                        data={sections.dish_data}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={ item => item.id }
                        contentContainerStyle={{paddingLeft: 20 }}
                />
            </Box>
        </Box>
    );
};





export const MostShopList = ({ navigation, sections }) => {
    
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
        <Box>
         <Text mx={5} fontSize="2xl">排行榜</Text>
            <Box
                borderWidth={2} borderRadius={25} borderColor="primary"
                mx={10} my={5} px={10} py={5}
            >
            
                <FlatList
                        horizontal={false}
                        data={sections.shop_data}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={ item => item.shop_id }
                        // contentContainerStyle={{}}
                    />
            </Box>
        </Box>
    );
};
