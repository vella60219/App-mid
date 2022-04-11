import React from 'react';
import { ScrollView, Center, Text, Image, HStack, Pressable } from "native-base";
import { FlatList, SectionList } from "react-native";

import { UserHomeProfile } from '../components/User';
import RecentEatItem from '../components/RecentEatItem';
import ItemList from '../components/RecentEatList';

import ActionButton from "../components/ActionButton";

import users from "../json/user.json";
import MyTheme from "../Theme";

const HomeScreen = ({ navigation }) => {
    let user = users[0];
    return (
        <>
            <ScrollView 
                theme={MyTheme}
                _light={{bg:"white"}}
                _dark={{bg:"black"}}
            >
                <UserHomeProfile 
                    user={users[0]}
                />
                {/* <RecentEatItem
                    user={users[0]}
                /> */}
                {/* <ItemList/> */}


                <Pressable
                    onPress={() => navigation.navigate('Shop')}
                    shadow= {2}
                    h={100} w={100} bg="primary"
                ></Pressable>
            </ScrollView>
            <ActionButton navigation={navigation} />
        </>
    );
}

export default HomeScreen;