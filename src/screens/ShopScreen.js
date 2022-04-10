import React from "react";
import { Flex, Center, Text, ScrollView } from "native-base";


const ShopScreen = ({ navigation }) => {
    return(
        <ScrollView>
            <Center bg="emerald.100" flex={1}>
                <Text fontSize={30}>
                    This is ShopScreen Page
                </Text>              
           </Center>
        </ScrollView>
    );

};

export default ShopScreen;