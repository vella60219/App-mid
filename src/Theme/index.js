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
 });

 export default MyTheme;


 