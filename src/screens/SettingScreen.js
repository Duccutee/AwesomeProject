import React from "react";
import { Text, StyleSheet, View,SafeAreaView, Image} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import COLORS from "../colors/color";
import settingoption from "../data/settingoption";
import { Primarybutton } from "../components/button";

const SettingScreen=({navigation})=>{
    const Settingcard =({setting}) =>{
        return(
            <View style={style.soption}>
                <Icon
              name={setting.icon}
              color={COLORS.primary}
              size={80}
              style={{marginTop: 15, position: 'absolute'}}
            />
                <View style={{height:100, marginLeft:10, paddingVertical:20, flex:1}}>
                  <Text style={{fontWeight:"bold",fontSize:24, marginLeft:70, marginTop:10}}>{setting.name}</Text>
                </View>
            </View>
        )
    }
     return(
       <SafeAreaView style={{backgroundColor:COLORS.white,flex:1} }>
        <View style={style.header}>
            <Icon name="arrow-back-ios" size={28}/>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Setting</Text>
        </View>
        <FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:80}}
        data={settingoption}
        renderItem={({item})=><Settingcard setting={item}/>} 
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
            </View>
            <View style={{marginHorizontal: 30}}>
              <Primarybutton onPress={() => navigation.navigate('First')} title="LOG OUT" />
            </View>
          </View>
        )}
      />
       </SafeAreaView>
     )
};
const style = StyleSheet.create({
     header:{
       paddingVertical:20,
       flexDirection:'row',
       alignItems:'center',
       marginHorizontalL:20,
     },
     soption:{
       height:100,
       elevation:20,
       borderRadius:10,
       backgroundColor:COLORS.white,
       marginVertical:10,
       marginHorizontal:20,
       paddingHorizontal:10,
       flexDirection:'row',
       alignItems:'center'
     }
     
});
export default SettingScreen;