import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Center, Text, Image, HStack ,Pressable ,useTheme, useAccessibleColors, getColor } from "native-base";

import { selectGeneral, selectProfilePic, selectCount, setGeneralUserInfo } from "../redux/userSlice";

import Octicons from 'react-native-vector-icons/Octicons';

//這裡沒資料，資料在HomeScreen

export const UserPic = () => {
    const profile_pic = useSelector(selectProfilePic);

    return (
        <>
            <Image
                h='114' w='114'
                borderRadius={90}
                mb={3} mt={8}
                source={{uri: profile_pic}}
                alt="大頭照"
            />
        </>
    );
}

export const UserName = () => {
    const general = useSelector(selectGeneral);
    const [name] = useState(general.name);

    return (
        <>
            <Text
                fontSize="24" fontWeight="800"
                letterSpacing='1.3px'
            >{name}</Text>
        </>
    );
}

export const UserHomeProfile = ({user}) => {
    const general = useSelector(selectGeneral);
    const count = useSelector(selectCount);

    const [name] = useState(general.name);

    const [shop] = useState(count.shop);
    const [month] = useState(count.month);
    const [city] = useState(count.citys);

    return (
        <>
            <Text 
                mt='5' 
                mx='3'
                fontSize="md"
            >
                歡迎回來，</Text>
            <Text
                mx='3'
                fontSize="md"
            >{name}！</Text>
            <Center>
                <UserPic/>
                <UserName/>
                <HStack
                    py={18} px={10} mt={3}
                    space={8}
                    justifyContent= "center"
                    borderWidth={2}
                    borderRadius={15}
                    borderColor="primary"
                >
                    <Center>
                        <Text fontSize="2xl">{shop}</Text>
                        <Text fontSize="md" color="grey">已吃店家</Text>
                    </Center>
                    <Center>
                        <Text fontSize="2xl">{month}</Text>
                        <Text fontSize="md" color="grey">本月已吃</Text>
                    </Center>
                    <Center>
                        <Text fontSize="2xl">{city}</Text>
                        <Text fontSize="md" color="grey">去過縣市</Text>
                    </Center>
                </HStack>
            </Center>
        </>
    );
}


export const UserMoreProfile = ({navigation}) => {
    const general = useSelector(selectGeneral);
    const [bio] = useState(general.bio);

    return (
        <>
            <Center>
                <UserPic/>
                <UserName/>
                <Text
                    fontSize='15' fontWeight="500"
                    mb={21}
                    letterSpacing={1.2}
                >{bio}</Text>
                <Pressable
                    mb={15} px="5px" py="7px"
                    onPress={() => navigation.navigate('EditProfile')}
                >
                    <HStack>
                        <Text
                            fontSize='12' fontWeight="500"
                            letterSpacing={0.03}
                            color="grey"
                        >編輯個人資訊</Text>
                        <Center
                            w="18" h="18" bg="primary" ml={2}
                            borderRadius={90}
                        >
                            <Octicons name="pencil" color="black" size={10} />
                        </Center>
                    </HStack>
                </Pressable>
            </Center>
        </>
    );
}
