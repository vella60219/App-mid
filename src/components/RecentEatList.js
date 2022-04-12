import React from "react";
import { Box, Text } from "native-base";
import { FlatList, SectionList } from "react-native";

import RecentEatItem from "./RecentEatItem";
import sections from "../json/user.json";

const RecentEatList = ({ navigation, sections }) => {
    
    

    const renderItem = ( {item} ) => {
        return (
            <>
                 <RecentEatItem navigation={navigation}  item={item}/>
            </>
        );
    };

    return (
        <Box>
            <Text>近期吃</Text>
            <FlatList
                    horizontal={true}
                    data={sections.dish_data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={ item => item.id }
                    contentContainerStyle={{paddingTop: 8, paddingLeft: 15, paddingRight: 15}}
                />
        </Box>
    );
};

export default RecentEatList;