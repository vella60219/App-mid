import { DefaultTheme } from '@react-navigation/native';
import {extendTheme } from 'native-base';


const MyTheme =  extendTheme({
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     primary:{
      50:'#4DC5D6', //primary color
      100:'#BBEFEC', //tag
      200:'#FF8593', //pink
      300:'#949494', //gray 
      //黑跟白先不用 
      //要切換mode，有找到可customize的解法再進行微調
      400:'#343434', //black 
      500:'#FAFAFA', //white
     },
    },
    //字體
    
    // fontConfig: {
    //   Roboto: {
    //     100: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     200: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     300: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-LightItalic',
    //     },
    //     400: {
    //       normal: 'Roboto-Regular',
    //       italic: 'Roboto-Italic',
    //     },
    //     500: {
    //       normal: 'Roboto-Medium',
    //     },
    //     600: {
    //       normal: 'Roboto-Medium',
    //       italic: 'Roboto-MediumItalic',
    //     },
    //     // Add more variants
    //     //   700: {
    //     //     normal: 'Roboto-Bold',
    //     //   },
    //   },
    // },
  
    // // Make sure values below matches any of the keys in `fontConfig`
    // fonts: {
    //   heading: 'Roboto',
    //   body: 'Roboto',
    //   mono: 'Roboto',
    // },
 });

 export default MyTheme;


 