import react from "react";

import { Text, Center, Pressable, useTheme } from "native-base";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyTheme from "../Theme";

export const ShopTag = ( {content, bg  } ) => {
    const {colors} = useTheme(MyTheme);
    var bgColor;
    {bg? ( bgColor="tag" ) : ( bgColor="transparent" )};
    return (
        <>
            <Center
                // flex={1}
                bg= {bgColor} 
                borderRadius={22.5}
                // marginX='auto' 
                px="2"
                py="1"
                mt="0"
                marginRight="1.5"
                h="30"
                borderWidth ="2"
                borderColor ="tag"
            >
                <Text
                    color = {colors.black}
                    fontSize="sm" 
                    lineHeight="sm" 
                    textAlign="center"
                >＃{content}</Text>
            </Center>
        </>
    );
};

export const EditTag = () => {
    const {colors} = useTheme(MyTheme);
    return (
        <Pressable
        >
            <Center
                w={60} h="30"
                flexDirection="row"
                bg="tag" 
                borderRadius={22.5}
                px="2.5"
                py="1.2"
                mx="1"
                borderWidth ="2"
                borderColor ="tag"
             >
                <MaterialCommunityIcons
                    name= {"tag-outline"}
                    size={15}
                    style={{
                        color: colors.black, 
                        marginRight: 2.5,
                        transform: [{rotateY: "180deg"}]
                    }} 
                />
                <Text 
                    fontSize="md" 
                    lineHeight="md" 
                >Tag</Text>
            </Center>
        </Pressable>
    );
};

