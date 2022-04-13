import React from "react";
import { Box, Center, Text, useTheme} from "native-base";

import { ShopList } from "../components/ShopList";

import ActionButton from "../components/ActionButton";

import users from "../json/user.json";
import MyTheme from "../Theme";

const ShopScreen = ({ navigation }) => {
    const {colors} = useTheme(MyTheme);
    var user = users[0];
    return(
        <Box
            theme={MyTheme}
            _light={{bg: colors.white }}
            _dark={{bg: colors.black}}
            height="100%"
        >
            <ShopList navigation={navigation} />
            <ActionButton navigation={navigation}/>
        </Box>
    );

};

export default ShopScreen;