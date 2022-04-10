import React from 'react';
import { ScrollView, Center, Text, Image, HStack } from "native-base";

import { UserHomeProfile } from '../components/User';

import users from "../json/user.json";

const HomeScreen = () => {
    return (
        <ScrollView>
            <UserHomeProfile
                user={users[0]}
            />
            <Image
                h='114' w='114'
                borderRadius={90}
                mb='16px'
                source={{uri: user.profile_pic}}
                alt="大頭照"
            >

            </Image>
        </ScrollView>
    );
}

export default HomeScreen;