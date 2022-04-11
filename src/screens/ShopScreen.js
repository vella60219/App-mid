import React from "react";
import { Flex, Center, Text, ScrollView } from "native-base";


const ShopScreen = ({ navigation }) => {
    return(
        <ScrollView bgColor="primary.500">
            <Center flex={1}>
                <Text fontSize={30}>
                    This is ShopScreen Page
                </Text>              
           </Center>
        </ScrollView>
    );

};

export default ShopScreen;