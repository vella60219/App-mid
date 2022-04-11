import React from 'react';
import { ScrollView, Center, Text, Image, HStack } from "native-base";
import { FlatList, SectionList } from "react-native";

import { UserHomeProfile } from '../components/User';
import RecentEatItem from '../components/RecentEatItem';
import ItemList from '../components/RecentEatList';


import users from "../json/user.json";
import MyTheme from "../Theme";

const HomeScreen = () => {
    let user = users[0];
    return (
        <ScrollView bgColor="primary.500">
            <UserHomeProfile theme={MyTheme}
                user={users[0]}
            />
             {/* <RecentEatItem
                user={users[0]}
            /> */}
            {/* <ItemList/> */}
        </ScrollView>
    );
}

export default HomeScreen;