import React from 'react';

import ActionButton from "../components/ActionButton";

import users from "../json/user.json";
import MyTheme from "../Theme";

import HomeScroll from '../components/HomeScroll';

const HomeScreen = ({ navigation }) => {
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