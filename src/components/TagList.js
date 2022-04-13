import React from "react";
import { Box, Text } from "native-base";
import { FlatList } from "react-native";

import { ShopTag, EditTag } from "./Tag";
import { RecentEatItem, MostShopItem } from "./HomeListItem";


export const CenEditTagList = ({ navigation, sections }) => {
    
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
        <Box >
            <Text>近期吃</Text>
            <FlatList
                    horizontal={true}
                    data={sections}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item }
                    contentContainerStyle={{paddingTop: 8, paddingLeft: 15, paddingRight: 15}}
                />
        </Box>
    );
};





export const TagList = ({ navigation, sections, edit, bg }) => {
    

    var i =1;

    const renderItem = ( {item} ) => {
        
        return (
            <>
                <ShopTag navigation={navigation}  content={item} bg={bg} />
            </>
        );
    };

    const ListFooterComponent = ({item}) => {
        return (
            <>
            {edit ? (
                <EditTag bg={true} />)
                :null}
            </>
        );
    };

    return (
        <>
            <Box
//                mx={21} px="38.75" py={26}
            >
            
                <FlatList
                    scrollEnabled={false}
                    horizontal={true}
                    data={sections}
                    // numColumns={5}
                    renderItem={renderItem}
                    ListFooterComponent={ListFooterComponent}
                    
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item }
                    contentContainerStyle={{
                        marginTop:1,
                        paddingTop: 8,
                    }}
                />
            </Box>
        </>
    );
};
