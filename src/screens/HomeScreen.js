import { useTheme } from 'native-base';
import React from 'react';

import ActionButton from "../components/ActionButton";
import HomeScroll from '../components/HomeScroll';

import users from "../json/user.json";
import MyTheme from "../Theme";

const HomeScreen = ({ navigation }) => {
    const {colors} = useTheme();
    let user = users[0];
    return (
        <>
            <HomeScroll
                theme={MyTheme}
                //記得改回white
                _light={{bg:"white"}}
                _dark={{bg:"black"}}

                navigation={navigation} sections={user} 
            />

            <ActionButton navigation={navigation} />
        </>
    );
}

export default HomeScreen;