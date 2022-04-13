import react from "react";
import { Box, Text, Input, VStack } from "native-base";

import users from "../json/user.json"

export const ShopInfo = ({ nevigation, shop }) => {
    const {colors} = useTheme(MyTheme);
    var user = users[0];
    var data = user.shop_data[shop-1];
    return (
        <>
        <Box
            padding="5"
        >
            <Box mb="3">
                <Text
                    fontSize="xl"
                >地址</Text>
                <Text
                    fontSize="md"
                >{data.address}</Text>
            </Box>
            <Box mb="3">
                <Text
                    fontSize="xl"
                >營業時間</Text>
                <Text
                    fontSize="md"
                >{data.open_time}</Text>
            </Box>
            <Box mb="3">
                <Text
                    fontSize="xl"
                >電話</Text>
                <Text
                    fontSize="md"
                >{data.phone_number}</Text>
            </Box>
            <Box mb="3">
                <Text
                    fontSize="xl"
                >更多資訊</Text>
                <Text
                    fontSize="md"
                >{data.detail}</Text>
            </Box>
        </Box>
        </>
    );
}

export const EditShopInfo = ({ nevigation,}) => {
    const {colors} = useTheme(MyTheme);
    var user = users[0];
    // var data = user.shop_data[shop-1];
    return (
        <>
        <VStack m={22}>
            <VStack>
                <Text>地址</Text>
                <Box alignItems="center">
                    <Input 
                        mx="3" placeholder="Ex: 臺北市信義區信義路五段7號" w="100%"
                        variant="filled"
                        _focus={{borderColor:"primary"}}
                    />
                </Box>
            </VStack>
            <VStack>
                <Text>營業時間</Text>
                <Box alignItems="center">
                    <Input 
                        mx="3" placeholder="Ex: 週一～週五 08:00~17:30" w="100%"
                        variant="filled"
                        _focus={{borderColor:"primary"}}
                    />
                </Box>
            </VStack>
            <VStack>
                <Text>電話</Text>
                <Box alignItems="center">
                    <Input
                        mx="3" placeholder="02-8101-8800" w="100%" 
                        variant="filled"
                        _focus={{borderColor:"primary"}}
                    />
                </Box>
            </VStack>
            <VStack>
                <Text>更多資訊</Text>
                <Box alignItems="center">
                    <Input
                        mx="3" placeholder="Ex: 每月一日買五送一" w="100%" h="45%"
                        variant="filled"
                        _focus={{borderColor:"primary"}}
                    />
                </Box>
            </VStack>
        </VStack>
        </>
    );
}