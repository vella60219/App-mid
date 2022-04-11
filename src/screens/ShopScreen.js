import React from "react";
import { Flex, Center, Text, ScrollView, Pressable} from "native-base";

import ActionButton from "../components/ActionButton";

const ShopScreen = ({ navigation }) => {
    return(
        <>
            <ScrollView bgColor="white">
                <Center flex={1}>
                    <Text fontSize={30}>
                        This is ShopScreen Page
                    </Text>              
            </Center>
            <Pressable
                    onPress={() => navigation.navigate('Shop')}
                    shadow= {2}
                    h={100} w={100} bg="#000000"
                ></Pressable>
            </ScrollView>
            <ActionButton navigation={navigation}/>
        </>
    );

};

export default ShopScreen;