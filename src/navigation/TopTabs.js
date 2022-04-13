import React from 'react';
import { Center, Box , ScrollView,  Text, Pressable ,VStack, Input,StatusBar ,useTheme,useColorModeValue} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions ,TouchableOpacity, Animated } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { AddItem } from '../components/ShopListItem';
import { DishList, WishList } from '../components/ShopList';
import { ShopInfo, EditShopInfo } from '../components/ShopInfo';


import ShopScreen from '../screens/ShopScreen';

import sections from "../json/user.json";
import MyTheme from "../Theme";

const Tab = createMaterialTopTabNavigator();

const TopTab = ({navigation, shop, mode}) => {
  const {colors} = useTheme(MyTheme);
  var FirstRoute, SecondRoute, ThirdRoute;

  var user = sections[0];

  switch (mode) {
    case 'show':
      FirstRoute = () =>
        <DishList navigation={navigation} sections={user.dish_data} shop={shop}  />

      SecondRoute = () => 
        <WishList navigation={navigation} sections={user.wish_data} shop={shop}  />

      ThirdRoute = () => 
        <ShopInfo navigation={navigation} shop={shop} />
        
      break;

      case 'add':
      FirstRoute = () =>
        <AddItem navigation={navigation} mode="add"  />

      SecondRoute = () => 
        <AddItem navigation={navigation} mode="add" />

      ThirdRoute = () => 
        <EditShopInfo navigation={navigation} />
        // <ShopInfo navigation={navigation} shop={shop} />
        
      break;
  
    default:
      break;
  }
     



  return (
    <Tab.Navigator
      _light={{bg: colors.white }}
      _dark={{bg: colors.black}}
      initialRouteName="shop"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,
        tabBarLabelStyle: {
          fontSize: 15,
        //   fontFamily: "helvetica-neue",
          textTransform: "none",
        },
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
        tabBarStyle: { 
          // backgroundColor: colors.white 
        },
        initialLayout: { width: Dimensions.get('window').width },
      }}>
      <Tab.Screen name="已吃品項" id="dish" component={FirstRoute}  />
      <Tab.Screen name="下次想吃" id="wish" component={SecondRoute} />
      <Tab.Screen name="店家資訊" id="info" component={ThirdRoute} />
    </Tab.Navigator>
  );
} 


export default TopTab;