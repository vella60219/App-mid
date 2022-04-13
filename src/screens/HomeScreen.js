import { Box, useTheme } from 'native-base';
import React from 'react';

import ActionButton from "../components/ActionButton";
import HomeScroll from '../components/HomeScroll';

import users from "../json/user.json";
import MyTheme from "../Theme";

const HomeScreen = ({ navigation }) => {
    const {colors} = useTheme(MyTheme);
    let user = users[0];
    return (
        <Box
            theme={MyTheme}
            _light={{bg: colors.white }}
            _dark={{bg: colors.black}}
        >
            <HomeScroll
                navigation={navigation} 
                sections={user} 
            />

            <ActionButton navigation={navigation} />
        </Box>
    );
}

export default HomeScreen;