import React from 'react';
import { ScrollView } from "native-base";

import { UserHomeProfile } from '../components/User';

import users from "../json/user.json";

const HomeScreen = () => {
    return (
        <ScrollView>
            <UserHomeProfile
                user={users[0]}
            />
        </ScrollView>
    );
}

export default HomeScreen;