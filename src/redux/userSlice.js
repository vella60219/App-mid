import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = {
    general: {
       name: "使用者",
       bio: "說點什麼吧"
    },
    profile_pic: "https://raw.githubusercontent.com/vella60219/App-mid/master/src/img/img_userpic.png",
    count: {
        citys: 0,
        shop: 0,
        month: 0,
    }
 };
 
 const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
       setGeneralUserInfo: (state, action) => {
          state.general = action.payload;
       },
       setUserCount: (state, action) => {
        state.count = action.payload;
     },
       login: (state) => {
          state.login.hasLogin = true;
       },
       logout: (state) => {
          state.login.hasLogin = false;
       }
    },
 });
 
 // export state to global
 export const selectGeneral = (state) => state.user.general;
 export const selectProfilePic = (state) => state.user.profile_pic;
 export const selectCount = (state) => state.user.count;
 
 // export actions to global
 export const { setGeneralUserInfo, setUserCount } = userSlice.actions;
 
 // export reducer to global
 export default userSlice.reducer;
 