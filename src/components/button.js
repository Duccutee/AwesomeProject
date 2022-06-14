import React from "react";
import { TouchableOpacity,View,StyleSheet,Text } from "react-native";
import COLORS from "../colors/color";
 
const Primarybutton =({title, onPress=()=>{}})=>{
   return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
       <View style={style.btncont}>
          <Text style={style.title}>{title}</Text>
       </View>
   </TouchableOpacity>
};

const style = StyleSheet.create({
     btncont:{
         backgroundColor:COLORS.primary,
         height:60,
         borderRadius:30,
         justifyContent:'center',
         alignItems:'center',
     },
     title:{color:COLORS.white,fontWeight:'bold', fontSize:18,
     },
});
export {Primarybutton};
