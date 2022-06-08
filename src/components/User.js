import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Center, Text, Image, HStack ,useTheme, useAccessibleColors, getColor } from "native-base";

import { selectGeneral, selectCount } from "../redux/userSlice";

//這裡沒資料，資料在HomeScreen

export const UserHomeProfile = ({user}) => {
    const general = useSelector(selectGeneral);
    const count = useSelector(selectCount);

    const [name] = useState(general.name);
    const [profile_pic] = useState(general.profile_pic);

    const [city] = useState(count.citys);
    const [shop] = useState(count.shop);
    const [month] = useState(count.item);

    return (
        <>
            <Text 
                mt='5' 
                mx='3'
                fontSize="md"
            >
                歡迎回來，{name}！</Text>
            <Center>
                <Image
                    h='114' w='114'
                    borderRadius={90}
                    mb={3} mt={8}
                    source={{uri: user.profile_pic}}
                    alt="大頭照"
                />
                <Text fontSize="4xl" fontWeight="bold">{name}</Text>
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