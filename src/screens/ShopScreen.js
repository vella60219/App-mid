import React from "react";
import { Flex, Center, Text, ScrollView, Pressable} from "native-base";


const ShopScreen = ({ navigation }) => {
    return(
        <ScrollView bgColor="primary.500">
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
    );

};

export default ShopScreen;