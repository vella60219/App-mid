import React from 'react';
import { ScrollView, Center, Text, useTheme } from "native-base";

import MyTheme from "../Theme";


const CollectionScreen = () => {
    const {colors} = useTheme(MyTheme);

    return (
        // <ScrollView bgColor="white">
            <Center flex={1}
                _light={{bg: colors.white }}
                _dark={{bg: colors.black}}
            >
                <Text fontSize={30} color={colors.grey}>
                    即將推出！
                </Text>              
            </Center>
        // </ScrollView>
    );
}

export default CollectionScreen;