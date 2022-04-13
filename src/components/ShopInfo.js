import react from "react";
import { Box, Text } from "native-base";

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