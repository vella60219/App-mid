import react from "react";

import { Text, Center, Pressable, Box } from "native-base";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ShopTag = ( {content, bg  } ) => {
    var bgColor;
    {bg? ( bgColor="tag" ) : ( bgColor="transparent" )};
    return (
        <>
            <Center
                bg= {bgColor} borderRadius={22.5}
                marginX='auto' px='2' py='0.5'
            >
            <Text
                fontSize={15}
                textAlign="center"
            >＃ {content}</Text>
            </Center>
        </>
    );
};

export const EditTag = () => {
    return (
        <Pressable>
            <Center
            w={60} h={22}
            flexDirection="row"
            bg="tag" borderRadius={22.5}
        >
            <MaterialCommunityIcons
                    name= {"tag-outline"}
                    size={15}
                    style={{
                        color: "black", 
                        marginRight: 2.5,
                        transform: [{rotateY: "180deg"}]
                    }} 
                />
        <Text>Tag</Text>
    </Center>
        </Pressable>
    );
};