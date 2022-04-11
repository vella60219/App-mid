import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyTabs from "./MyTabs";

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from  "../screens/ShopScreen";
import ShopDetailScreen from "../screens/ShopDetailScreen";
import AddShopScreen from "../screens/AddShopScreen";

const Stack = createNativeStackNavigator();





export const HomeStack = () => {
    return (
          <Stack.Navigator
            initialRouteName="Home"
          >
            <Stack.Screen
                name="Home"
                component={MyTabs}
                options={{
                  headerShown: false,
                    headerShadowVisible:false,
                    title: null,
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          size={24}
                        />
                      ),
                      headerRight: () => (
                        <MaterialCommunityIcons
                          name={'magnify'}
                          size={24}
                        />
                      ),
                }}
                
            />
             <Stack.Screen
                name="Shop"
                component={ShopDetailScreen}
                options={{
                    title: null,
                    headerBackTitleVisible: false,
                    headerShadowVisible:false,
                    headerTintColor: '#131313',
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:0,
                        
                    },

                }}
                
            />
            
        </Stack.Navigator>
      );
};


//search bar 之後再解決，可能找個新套件
export const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ShopScreen}
        options={{
          title: null,
          headerStyle:{
              // elevation: 0,
              // shadowOpacity: 0,
              // shadowOffset:{height: 0, width: 0},
          },
          searchBar: 0,
          headerSearchBarOptions: {
              autoCapitalize: 'none',
              obscureBackground: true,
              onCancelButtonPress: false,
              hideWhenScrolling: false,
          },
        }}
      />
    </Stack.Navigator>
    );
};
