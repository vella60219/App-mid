import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useTheme,  } from '@react-navigation/native';
import {useTheme, useColorMode} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

import MyTabs from "./MyTabs";
import MyTheme from "../Theme";

import HomeScreen from "../screens/HomeScreen";
import ShopScreen from  "../screens/ShopScreen";
import ShopDetailScreen from "../screens/ShopDetailScreen";
import AddShopScreen from "../screens/AddShopScreen";
import MoreScreen from "../screens/MoreScreen";

const Stack = createNativeStackNavigator();

export const HomeStack = ({navigation ,props }) => {
  const {colors} = useTheme(MyTheme);
  const {colorMode} =useColorMode(MyTheme);

    return (
          <Stack.Navigator
            initialRouteName="Home"
            options={{
              headerStyleInterpolator:{
                backgroundColor: colorMode == 'light' ? colors.white : colors.black
              }
            }}
          >
            <Stack.Screen
                name="Home"
                component={MyTabs}
                options={{
                  headerShown: false,
                  headerShadowVisible:false,
                  title: null,
                  headerStyle:{
                      // elevation: 0,
                      // shadowOpacity: 0,
                      // shadowOffset:{height: 0, width: 0},
                  },

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
                        // elevation: 0,
                        // shadowOpacity: 0,
                        // shadowOffset:0,
                        
                    },

                }}
                
            />
            <Stack.Screen
                name="Add"
                component={AddShopScreen}
                options={({ route }) => ({
                    title: null,
                    headerBackTitleVisible: false,
                    headerShadowVisible:false,
                    headerTintColor: '#131313',
                    headerStyle:{
                        // elevation: 0,
                        // shadowOpacity: 0,
                        // shadowOffset:0,
                    },
                    // headerLeft: () => (
                    //   <TouchableOpacity 
                        // onPress={() => navigation.goBack()}
                    //   >
                    //      <Ionicons name="chevron-back" color={colors.primary} size={25} />
                    //   </TouchableOpacity>
                    // ),
                  })
                }
            />
            
        </Stack.Navigator>
      );
};

//search bar 之後再解決，可能找個新套件
// export const ShopStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Shop"
//         component={ShopScreen}
//         options={{
//           title: null,
//           headerStyle:{
//               // elevation: 0,
//               // shadowOpacity: 0,
//               // shadowOffset:{height: 0, width: 0},
//           },
//           searchBar: 0,
//           headerSearchBarOptions: {
//               autoCapitalize: 'none',
//               obscureBackground: true,
//               onCancelButtonPress: false,
//               hideWhenScrolling: false,
//           },
//         }}
//       />
//     </Stack.Navigator>
//     );
// };

// export const MoreStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="More"
//         component={MoreScreen}
//         options={{
//           headerShown: true,
//           headerShadowVisible:false,
//           headerBackground:"transparent",
//           headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#fff"
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//     );
// };
