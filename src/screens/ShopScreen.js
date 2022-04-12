import React from "react";
import { Flex, Center, Text, ScrollView, Pressable} from "native-base";

import ActionButton from "../components/ActionButton";

import users from "../json/user.json";
import TestList from "../components/TestList";

const ShopScreen = ({ navigation }) => {
    var user = users[0];
    return(
        <>
            <ScrollView bgColor="white">
                <Center flex={1}>
                    <Text fontSize={30}>
                        This is ShopScreen Page
                    </Text>              
            </Center>
            
            <TestList navigation={navigation} sections={user} />
            </ScrollView>
            <ActionButton navigation={navigation}/>
        </>
    );

};

export default ShopScreen;