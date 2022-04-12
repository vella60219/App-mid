import React from 'react';
import { ScrollView, Center, Text, Image, HStack, Pressable } from "native-base";
import { FlatList, SectionList } from "react-native";

import { UserHomeProfile } from '../components/User';
import RecentEatItem from '../components/RecentEatItem';
import RecentEatList from '../components/RecentEatList';
import MostShopList from '../components/MostShopList';
import MostShopItem from '../components/MostShopItem';

import ActionButton from "../components/ActionButton";

import users from "../json/user.json";
import MyTheme from "../Theme";



import TestList from '../components/TestList';



const HomeScreen = ({ navigation }) => {
    let user = users[0];
    return (
        <>
            <ScrollView 
                theme={MyTheme}
    //記得改回white
                _light={{bg:"white"}}
                _dark={{bg:"black"}}
            >
                <UserHomeProfile user={user} />
                <RecentEatList navigation={navigation} sections={user} />
                <MostShopList navigation={navigation} sections={user} />
            </ScrollView>
            <ActionButton navigation={navigation} />
        </>
    );
}

export default HomeScreen;