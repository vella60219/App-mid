import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();





export const HomeStack = () => {
    return (
          <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                    headerShadowVisible:false,
                    title: null,
                    headerStyle:{
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                    },
                    // searchBar: 0,
                    // headerSearchBarOptions: {
                    //     autoCapitalize: 'none',
                    //     obscureBackground: false,
                    //     onCancelButtonPress: false,
                    //     hideWhenScrolling: true,
                    //   },
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
        </Stack.Navigator>
      );
};


export const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
              hideWhenScrolling: true,
          },
        }}
      />
    </Stack.Navigator>
    );
};
