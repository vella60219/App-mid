import React from "react";

import { Pressable, Center } from "native-base";

import Octicons from 'react-native-vector-icons/Octicons';

const ActionButton = ({ navigation, mode }) =>{
    return(
        <>
        {(mode=="edit") ? (
        <Pressable
            w="60" h="60" bg="primary" mt="-60" pt="13"
            borderRadius={90}
            pos="fixed" top="-21.5" left="345.5"
            zIndex={2}

            // onPress={() => navigation.navigate('Shop')}
        >
            <Center>
                
                    <Octicons name="pencil" color="black" size={32} />
            </Center>
        </Pressable> ) : (
            <Pressable
            w="60" h="60" bg="primary" mt="-60" pt="13"
            borderRadius={90}
            pos="fixed" top="-21.5" left="345.5"
            zIndex={2}

            onPress={() => navigation.navigate('Add')}
        >
            <Center>            
                    <Octicons name="plus" color="black" size={32} />
            </Center>
        </Pressable>
            )
                }
        </>
    );
};

export default ActionButton;