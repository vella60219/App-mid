import React from 'react';
import { Center, Box , ScrollView,  Text, Pressable ,VStack, Input,StatusBar ,useColorMode,useColorModeValue} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions ,TouchableOpacity, Animated } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MoreScreen from './MoreScreen';

import users from "../json/user.json";
import MyTheme from "../Theme";

import TopTab from '../navigation/TopTabs';

const Tab = createMaterialTopTabNavigator();

const FirstRoute = () => <Center flex={1} my="4">
    This is Tab 1 ahhh cant find my content :((
  </Center>;

const SecondRoute = () => <Center flex={1} my="4">
    This is Tab 2
  </Center>;

const ThirdRoute = () => <Center flex={1} my="4">
    This is Tab 3
  </Center>;


// const initialLayout = {
//   width: Dimensions.get("window").width
// };
// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute
// });


const AddShopScreen = ({ navigation }) => {
    let user = users[0];
    const [value, setValue] = React.useState("");
    const handleChange = text => setValue(text);

    const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([{
//     key: "first",
//     title: "已吃品項"
//   }, {
//     key: "second",
//     title: "下次想吃"
//   }, {
//     key: "third",
//     title: "店家資訊"
//   }
// ]);

//   const renderTabBar = props => {
//     const inputRange = props.navigationState.routes.map((x, i) => i);
//     return <Box flexDirection="row">
//         {props.navigationState.routes.map((route, i) => {
//         const opacity = props.position.interpolate({
//           inputRange,
//           outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
//         });
//         const color = index === i ? useColorModeValue("#000", "#e5e5e5") : useColorModeValue("#1f2937", "#a1a1aa");
//         const borderColor = index === i ? "cyan.500" : useColorModeValue("coolGray.200", "gray.400");
//         return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3">
//               <Pressable onPress={() => {
//             console.log(i);
//             setIndex(i);
//           }}>
//                 <Animated.Text style={{
//               color
//             }}>{route.title}</Animated.Text>
//               </Pressable>
//             </Box>;
//       })}
//       </Box>;
//   };
 
    return (
        <>
        
            <ScrollView 
                theme={MyTheme}
                //記得改回white
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
                    <Text fontSize="xl">
                        Tag section
                    </Text>
                </Center>
                {/* <TabView navigationState={{
                        index,
                        routes
                    }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
                        marginTop: StatusBar.currentHeight
                    }} 
                /> */}
                  <Box flex={1} height={800}>
                    <TopTab/>
                    </Box>

                {/* <Pressable
                    onPress={() => navigation.navigate('Shop')}
                    shadow= {2}
                    h={100} w={100} bg="#999999"
                ></Pressable>       */}
            </ScrollView>
        </>

    );
}

export default AddShopScreen;