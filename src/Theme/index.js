import { DefaultTheme } from '@react-navigation/native';
import {extendTheme } from 'native-base';


const MyTheme =  extendTheme({
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     primary:{
      50:'#BBEFEC', //primary color
      100:'#4DC5D6', //tag
     },
     pink:'#FF8593',
     black:'#343434',
     grey:'#949494',
     white:'#FAFAFA',
     background: '#4DC5D6',
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


 