import React from "react";
import { Box, Text } from "native-base";
import { FlatList, SectionList } from "react-native";

import RecentEatItem from "./RecentEatItem";
import sections from "../json/user.json";

const ItemList = () => {
    
    const renderSectionHeader = ({user}) => (
        <>
            <Text
                fontSize='24'
                fontWeight='500'
                letterSpacing='0.3'
                marginLeft='20px'

            >近期吃</Text>
            <Box>
            {/* <FlatList
                    horizontal={true}
                    data={user.item_data}
                    renderItem={({ item }) => <RecentEatItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item.id }
                    contentContainerStyle={{paddingTop: 8, paddingLeft: 15, paddingRight: 15}}
                /> */}
            </Box>
        </>
    );

    const renderItem = ( item ) => {
        return (
            <RecentEatItem item={item}/>
        );
    };

    return (
        <SectionList
            sections={sections[0]}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            //renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            keyExtractor={ item => item.name }
        />
    );
};

export default ItemList;