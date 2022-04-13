import react from "react";
import { Box, Text, Input, VStack } from "native-base";

import users from "../json/user.json"

export const ShopInfo = ({ nevigation, shop }) => {
    var user = users[0];
    var data = user.shop_data[shop-1];
    return (
        <>
        <Box>
            <Box>
                <Text>地址</Text>
                <Text>{data.address}</Text>
            </Box>
            <Box>
                <Text>營業時間</Text>
                <Text>{data.open_time}</Text>
            </Box>
            <Box>
                <Text>電話</Text>
                <Text>{data.phone_number}</Text>
            </Box>
            <Box>
                <Text>更多資訊</Text>
                <Text>{data.detail}</Text>
            </Box>
        </Box>
        </>
    );
}

export const EditShopInfo = ({ nevigation,}) => {
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