import { DefaultTheme } from '@react-navigation/native';
import {extendTheme } from 'native-base';


const MyTheme =  extendTheme({
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     primary:'#4DC5D6',
     tag: '#BBEFEC',
     pink:'#FF8593',
     black:'#131313',
     grey:'#949494',
     white:'#FAFAFA',
     item_dark:'rgba(250,250,250,0.15)',
     tag_dark:'rgba(250,250,250,0.85)',
    //  background: '#131313',
    },
    //字體 
    // fontSizes 
    // 4xl 
    // 2xl 
    // xl
    // md

 });

 export default MyTheme;


 