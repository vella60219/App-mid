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
      300:'#343434', //black
      400:'#949494', //gray 
      500:'#FAFAFA', //white
     },
     background: '#4DC5D6',
   },
 });

 export default MyTheme;


 