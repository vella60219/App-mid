import React from 'react';
import { Center, Box , ScrollView,  Text, Pressable ,VStack, Input,StatusBar ,useColorMode,useColorModeValue} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions ,TouchableOpacity, Animated } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { DishList, WishList } from '../components/ShopList';
import { ShopInfo } from '../components/ShopInfo';


import ShopScreen from '../screens/ShopScreen';

import sections from "../json/user.json";


const Tab = createMaterialTopTabNavigator();

const TopTab = ({navigation, shop}) => {

    const FirstRoute = () =>
      <DishList navigation={navigation} sections={user.dish_data} shop={shop}  />


const SecondRoute = () => 
      <WishList navigation={navigation} sections={user.dish_data} shop={shop}  />


const ThirdRoute = () => 
      <ShopInfo navigation={navigation} shop={shop} />

var user = sections[0];

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
              <Tab.Screen name="已吃品項" id="dish" component={FirstRoute}  />
              <Tab.Screen name="下次想吃" id="wish" component={SecondRoute} />
              <Tab.Screen name="店家資訊" id="info" component={ThirdRoute} />
            </Tab.Navigator>
    );
} 


export default TopTab;