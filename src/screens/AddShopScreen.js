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
    let user = users[0];
    const [value, setValue] = React.useState("");
    const handleChange = text => setValue(text);

    const [index, setIndex] = React.useState(0);


 
    return (
        <>
        
            <ScrollView 
                theme={MyTheme}
                _light={{bg:"white"}}
                _dark={{bg:"black"}}
            >
                <Center
                    mt={3}
                >
                    <Input 
                        value={value} 
                        w="60%" maxW="300px" 
                        px={10} py={2}
                        onChangeText={handleChange} 
                        placeholder="編輯店名" 
                        variant="filled"
                        // borderColor="transparent"
                        borderRadius={15}
                        fontSize="3xl"
                        textAlign="center"
                    />
                    <Input 
                        value={value} 
                        w="85%" 
                        px={5} py={2} mt={2}
                        onChangeText={handleChange} 
                        placeholder="編輯描述" 
                        variant="filled"
                        // borderColor="transparent"
                        borderRadius={15}
                        fontSize="xl"
                        textAlign="center"
                        numberOfLines={2}
                    />
                    <EditTag bg={true} />
                </Center>
                  <Box flex={1} height={800}>
                    <TopTab navigation={navigation} shop={0} mode="add" />
                    </Box>

            </ScrollView>
        </>

    );
}

export default AddShopScreen;