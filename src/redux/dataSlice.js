import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)

 
 const dataSlice = createSlice({
    name: 'data',
    initialState: {
        shop: [
            {
                shop_id: 1,
                shop_name: "店名",
                dish_count: 3,
                favorite: false,
                introduction: "好耶！",
                tag_data: [ "早午餐", "國北優惠" ],
                city: "台北",
                address: "台北市大安區和平東路二段134號",
                open_time: "週一～週五　08:10~17:20",
                phone_number: "02-6639-6688",
                detail: "救救我啊我救我",
                dish_data: [
                    {
                        "id": "1",
                        "name": "品項",
                        "photo": "https://raw.githubusercontent.com/vella60219/App-mid/master/src/img/img_shop1_item1.png",
                        "date": "2022/04/01",
                        "rate": 3.2,
                        "price": 2333,
                        "detail": "好吃好吃好吃好吃"
                    },
                    {
                        "id": "2",
                        "name": "品項2",
                        "photo": "https://raw.githubusercontent.com/vella60219/App-mid/master/src/img/img_shop1_item1.png",
                        "date": "2022/04/02",
                        "rate": 4,
                        "price": 360,
                        "detail": "好吃好吃好吃好吃ccccccc"
                    }
                ],
                wish_data: [
                    {
                        "wish_id": "1",
                        "name": "品項",
                        "photo": "",
                        "date": "",
                        "rate": null,
                        "price": 2333,
                        "detail": "好想吃好想吃好想吃"
                    },
                    {
                        "wish_id": "2",
                        "name": "品項2",
                        "photo": "https://raw.githubusercontent.com/vella60219/App-mid/master/src/img/img_shop1_item1.png",
                        "date": "2022/04/02",
                        "rate": 4,
                        "price": 360,
                        "detail": "好吃好吃好吃好吃ccccccc"
                    }
                ]
            },
        
        ],
        count: {
            citys: 0,
            shop: 0,
            item: 1,
        }
     },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addShop: (state, action) => {
            state.shop.push(action.payload);
        },
        editShop: (state, action) => {
            state.shop(action.payload);
        },
    },
 });
 
 // export state to global
 export const selectShop = (state) => state.data.shop;
//  export const selectCount = (state) => state.user.count;
 
 // export actions to global
 export const { addShop } = dataSlice.actions;
 
 // export reducer to global
 export default dataSlice.reducer;
 