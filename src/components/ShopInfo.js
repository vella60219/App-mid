import react from "react";
import { Box, Text, Input, VStack,useTheme } from "native-base";

import users from "../json/user.json"
import MyTheme from "../Theme";


export const ShopInfo = ({ nevigation, shop }) => {
    const {colors} = useTheme(MyTheme);
    var user = users[0];
    var data = user.shop_data[shop-1];
    return (
        <>
        <Box
            padding="6"
        >
            <Box mb="5">
                <Text
                    fontSize="md"
                    color={colors.grey}
                >地址</Text>
                <Text
                    fontSize="md"
                    letterSpacing={1.1}
                >{data.address}</Text>
            </Box>
            <Box mb="5">
                <Text
                    fontSize="md"
                    color={colors.grey}
                >營業時間</Text>
                <Text
                    fontSize="md"
                    letterSpacing={1.1}
                >{data.open_time}</Text>
            </Box>
            <Box mb="5">
                <Text
                    fontSize="md"
                    color={colors.grey}
                >電話</Text>
                <Text
                    fontSize="md"
                    letterSpacing={1.1}
                >{data.phone_number}</Text>
            </Box>
            <Box mb="5">
                <Text
                    fontSize="md"
                    color={colors.grey}
                >更多資訊</Text>
                <Text
                    fontSize="md"
                    letterSpacing={1.1}
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
                        mx="3" my="1" mb="4" px="4" placeholder="Ex: 臺北市信義區信義路五段7號" w="100%"
                        variant="filled"
                        _focus={{borderColor:colors.primary}}
                    />
                </Box>
            </VStack>
            <VStack>
                <Text>營業時間</Text>
                <Box alignItems="center">
                    <Input 
                        mx="3" my="1" mb="4" px="4" placeholder="Ex: 週一～週五 08:00~17:30" w="100%"
                        variant="filled"
                        _focus={{borderColor:colors.primary}}
                    />
                </Box>
            </VStack>
            <VStack>
                <Text>電話</Text>
                <Box alignItems="center">
                    <Input
                        mx="3" my="1" mb="4" px="4" placeholder="02-8101-8800" w="100%" 
                        variant="filled"
                        _focus={{borderColor:colors.primary}}
                    />
                </Box>
            </VStack>
            <VStack>
                <Text>更多資訊</Text>
                <Box alignItems="center">
                    <Input
                        mx="3" my="1" mb="4" px="4" placeholder="Ex: 每月一日買五送一" w="100%" h="45%"
                        variant="filled"
                        _focus={{borderColor:colors.primary}}
                    />
                </Box>
            </VStack>
        </VStack>
        </>
    );
}