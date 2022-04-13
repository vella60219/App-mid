import React from 'react';
import { Center, Box , ScrollView,  Text, Pressable ,VStack, Input,StatusBar ,useColorMode,useColorModeValue} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions ,TouchableOpacity, Animated } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import users from "../json/user.json";
import MyTheme from "../Theme";

import MoreScreen from '../screens/MoreScreen';
import ShopScreen from '../screens/ShopScreen';

const FirstRoute = () => <Center flex={1} my="4">
    This is Tab 1 ahhh cant find my content :((
  </Center>;

const SecondRoute = () => <Center flex={1} my="4">
    This is Tab 2
  </Center>;

const ThirdRoute = () => <Center flex={1} my="4">
    This is Tab 3
  </Center>;

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    return (
        <Tab.Navigator
              initialRouteName="shop"
              screenOptions={{
                tabBarActiveTintColor: "#000",
                tabBarLabelStyle: {
                  fontSize: 12,
                //   fontFamily: "helvetica-neue",
                  textTransform: "none",
                },
                tabBarIndicatorStyle: { backgroundColor: "#000" },
                tabBarStyle: { backgroundColor: "#fff" },
                initialLayout: { width: Dimensions.get('window').width },
              }}>
              <Tab.Screen name="shop" id="eat" component={MoreScreen}  />
              <Tab.Screen name="Personal" id="wish" component={SecondRoute} />
            </Tab.Navigator>
    );
} 


export default TopTab;