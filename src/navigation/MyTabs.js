import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import MoreScreen from '../screens/MoreScreen';
import CollectionScreen from "../screens/CollectionScreen";

const Tab = createBottomTabNavigator();

import { HomeStack, ShopStack } from "./MyStacks";


const MyTabs = () => {
    return (
      <Tab.Navigator
        
        screenOptions={{
            tabBarActiveTintColor: '#6200EE',
            tabBarInactiveTintColor: '#666666',
            headerShown: false,
          // headerShown: false
            tabBarLabelStyle: {
                fontWeight: '500',
                fontSize: 12,
                letterSpacing: 0.4,
            },
            tabBarIconStyle: {
                marginTop: 11,
            },
            headerStyle: { 
                headerShadowVisible: false,
                        shadowColor: 'transparent',
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                        borderBottomColor: 'transparent',
              },
        }}
      >
        <Tab.Screen 
          name="HomeStack" 
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "首頁",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen 
          name="ShopStack" 
          component={ShopStack}
          options={{
            headerShown: false,
            title: "我的店家",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen 
          name="CollectionStack" 
          component={CollectionScreen} 
          options={{
            headerShown: false,
            title: "我的收藏",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen 
          name="MoreStack" 
          component={MoreScreen} 
          options={{
            headerShown: false,
            title: "更多",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

export default MyTabs;