import React from 'react';
import { ScrollView, useColorMode ,Center, Text, Image, HStack } from "native-base";
import { FlatList, SectionList } from "react-native";

import { UserHomeProfile } from '../components/User';
import RecentEatItem from '../components/RecentEatItem';
import ItemList from '../components/RecentEatList';


import users from "../json/user.json";
import MyTheme from "../Theme";

const HomeScreen = () => {
    let user = users[0];
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <ScrollView 
            theme={MyTheme}
            _light={{bg:"primary.500"}}
            _dark={{bg:"primary.400"}}
        >
            <UserHomeProfile
                user={users[0]}
            />
             {/* <RecentEatItem
                user={users[0]}
            /> */}
            {/* <ItemList
            /> */}
        </ScrollView>
    );
}

export default HomeScreen;