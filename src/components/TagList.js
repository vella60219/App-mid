import React from "react";
import { Box, Center, Text } from "native-base";
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
                contentContainerStyle={{
                    flex:1,
                    alignItems:"center"
                }}
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
            <Center>         
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
                        marginBottom:5,
                        paddingTop: 8,
                    }}
                />
            </Center>
        </>
    );
};
