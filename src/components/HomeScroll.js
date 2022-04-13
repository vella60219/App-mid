import React from "react";
import { Box, Text } from "native-base";
import { FlatList, SectionList } from "react-native";

import { UserHomeProfile } from './User';
import { RecentEatList, MostShopList } from "./HomeList";


const HomeScroll = ({ navigation, sections }) => {

    const renderSectionHeader = () => {
        return (
            <>
                <UserHomeProfile user={sections} />
                <RecentEatList navigation={navigation} sections={sections} />
            </>
        );
    }

    const renderSectionFooter = () => {
        return (
            <>
                <MostShopList navigation={navigation} sections={sections} />
            </>
        );
    }

    const renderItem = () => {
        return null;
    };

    return (
        <>
                <FlatList
                        horizontal={false}
                        ListHeaderComponent={renderSectionHeader}
                        data={sections.shop_data}
                        ListFooterComponent={renderSectionFooter}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={ item => item.shop_id }
                        contentContainerStyle={{ paddingTop: 8 }}
                    />
        </>
    );
};

export default HomeScroll;

