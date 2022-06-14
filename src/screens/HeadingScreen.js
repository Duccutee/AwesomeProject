import React from 'react';
import { Text, StyleSheet, View,SafeAreaView, Image } from 'react-native';
import COLORS from '../colors/color';
import { Primarybutton } from '../components/button';

const HeadingScreen =({navigation})=>{
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white,}}>
         <View style={{height:400}}>
             <Image style={{width:'100%', resizeMode:"contain", top:-160,}} source={require('../../public/img/20860030.jpg')}>
             </Image>
         </View>
         <View style={style.textcont}>
           <View>
               <Text style={{fontSize:32, fontWeight:'bold', textAlign:'center', color:COLORS.dark}}>
                 Nutriton Life
               </Text>
                <Text style={{fontSize:18, textAlign:'center'}}>
                 Healthy food makes you feel good
                </Text>
           </View>
           <View style={style.slider}>
             <View style={style.aslider}/>
             <View style={style.bslider}/>
             <View style={style.bslider}/>
           </View>
           <Primarybutton onPress={() => navigation.navigate('Login')} title="Get Started"/>
         </View>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
  textcont:{
     flex:1,
     paddingHorizontal:50,
     justifyContent:"space-between",
     paddingBottom:40,
  },
  slider:{
     height:50,
     flex:1,
     justifyContent:"center",
     flexDirection:"row",
     alignItems:'center',
  },
  aslider:{
    height:12,
    width:30,
    borderRadius:10,
    flexDirection:"row",
    alignItems:'center',
    backgroundColor:COLORS.primary,
    marginHorizontal:5,
 },
 bslider:{
    height:12,
    width:12,
    borderRadius:9,
    flexDirection:"row",
    alignItems:'center',
    backgroundColor:COLORS.grey,
    marginHorizontal:5,
 },
     
})
export default HeadingScreen;