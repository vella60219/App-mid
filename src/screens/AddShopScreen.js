import React from 'react';
import { Center, Box , ScrollView,  Text, Pressable ,VStack, Input,StatusBar ,useColorMode,useColorModeValue, useTheme} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions ,TouchableOpacity, Animated } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MoreScreen from './MoreScreen';

import users from "../json/user.json";
import MyTheme from "../Theme";
import { EditTag } from '../components/Tag';

import TopTab from '../navigation/TopTabs';

const Tab = createMaterialTopTabNavigator();



const AddShopScreen = ({ navigation }) => {
    const {colors} = useTheme(MyTheme);
    let user = users[0];
    const [value, setValue] = React.useState("");
    const handleChange = text => setValue(text);

 
    return (
        <>
            <ScrollView 
                theme={MyTheme}
                _light={{bg: colors.white}}
                _dark={{bg: colors.black}}
            >
                <Center
                    padding ="3"
                >
                    <Input 
                        value={value} 
                        w="60%" maxW="300px" 
                        px={10} py={2} my="2"
                        onChangeText={handleChange} 
                        placeholder="編輯店名" 
                        variant="filled"
                        // borderColor="transparent"
                        borderRadius={15}
                        fontSize="3xl"
                        textAlign="center"
                        _focus={{borderColor:colors.primary}}
                    />
                    <Input 
                        value={value} 
                        w="85%" 
                        px={5} py={2} my={2}
                        onChangeText={handleChange} 
                        placeholder="編輯描述" 
                        variant="filled"
                        // borderColor="transparent"
                        borderRadius={15}
                        fontSize="xl"
                        textAlign="center"
                        numberOfLines={2}
                        _focus={{borderColor:colors.primary}}
                    />
                    <EditTag bg={true}/>
                </Center>
                <Box flex={1} height={800}>
                    <TopTab navigation={navigation} shop={0} mode="add" />
                </Box>

            </ScrollView>
        </>

    );
}

export default AddShopScreen;