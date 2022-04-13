import React from 'react';
import { Center, Box , ScrollView,  Text, Pressable ,VStack, Input,StatusBar ,useColorMode,useColorModeValue, useTheme} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions ,TouchableOpacity, Animated } from "react-native";

import users from "../json/user.json";
import { ShopTag } from '../components/Tag';
import MyTheme from "../Theme";

const FirstRoute = () => <Center flex={1} mt="10">
    This is Tab 1 ahhh cant find my content :((
  </Center>;

const SecondRoute = () => <Center flex={1} my="4">
    
    <Box width="200" height="20" color="pink">
      <Text color="pink">This is Tab 2</Text>
    </Box>
  </Center>;

const ThirdRoute = () => <Center flex={1} my="4">
    This is Tab 3
  </Center>;

const initialLayout = {
  width: Dimensions.get("window").width
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});


const AddShopScreen = ({ navigation }) => {
  const {colors} = useTheme(MyTheme);
  let user = users[0];
  const [value, setValue] = React.useState("");
  const handleChange = text => setValue(text);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
    key: "first",
    title: "已吃品項"
    }, 
    {
    key: "second",
    title: "下次想吃"
    }, 
    {
    key: "third",
    title: "店家資訊"
    }
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
        });
        const color = index === i ? useColorModeValue(colors.primary, colors.primary) : useColorModeValue("grey", "grey");
        const borderColor = index === i ? "primary" : useColorModeValue("coolGray.200", "gray.400");
        return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3">
          <Pressable 
            onPress={() => {
              console.log(i);
              setIndex(i);
            }}>
            <Animated.Text style={{color}}>{route.title}</Animated.Text>
          </Pressable>
        </Box>;
      })}
    </Box>;
  };
 
  return (
    <ScrollView 
        theme={MyTheme}
        _light={{bg: colors.white }}
        _dark={{bg: colors.black }}
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
                borderColor="transparent"
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
                borderColor="transparent"
                borderRadius={15}
                fontSize="xl"
                textAlign="center"
                numberOfLines={2}
            />
            <ShopTag content="tag" bg={true} />
        </Center>
        <TabView navigationState={{
                index,
                routes
            }} 
            renderScene={renderScene} 
            renderTabBar={renderTabBar}
            onIndexChange={setIndex} 
            initialLayout={initialLayout} 
            style={{
                marginTop: StatusBar.currentHeight
            }} 
        />
    </ScrollView>
  );
}

export default AddShopScreen;