import React, { useContext } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../colors/color';
import { useState } from 'react';
import categories from '../data/categories';
import yourbody from '../data/yourbody';
import { auth } from '../auth';


const {width} = Dimensions.get("screen");
const  cardWidth = width-25;
const HomeScreen = ({navigation}) => {
  const [selectCategoryIndex, setSeletCategoryIndex] = React.useState(0);
  const {userInfo} = useContext(auth);
  const Card = ({yourbody}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => {}}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-start', top: -5}}>
          
          <View style={{marginHorizontal: 30}}>
          <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.dark, marginTop: 30,}}>Height:{yourbody.height}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.dark, marginTop: 30,}}>Weight:{yourbody.weight}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.dark, marginTop: 30,}}>Gender: {yourbody.gender}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.dark, marginTop: 30,}}>Age: {yourbody.age}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold',color:COLORS.dark, marginTop: 30,}}>BMR: {yourbody.BMR}</Text>
          <Text style={{fontSize:24 , fontWeight: 'bold',color:COLORS.dark, marginTop: 30,}}>AMR: {yourbody.AMR}</Text>
           </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
         
        </View>
      </TouchableHighlight>
    );
  };
   return (
  <SafeAreaView style={{flex:1, backgroundColor:COLORS.white,}}>

    <View style={style.header}>
     <View>
        <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:28}}> Hello, </Text>
           <Text style={{fontSize:28, fontWeight:'bold', marginLeft:10, color:COLORS.dark,}}>{userInfo.username}</Text>
        </View>
           <Text style={{fontSize:22, marginTop:5, marginLeft:10, color:COLORS.grey}}>
               Content.....
            </Text>
           </View>
         <Image source={require('../../public/img/avatar.jpg')} style={{height:50, width:50, borderRadius:25}}/>
    </View>
    <View> 

    </View>
    <FlatList showsVerticalScrollIndicator={false} 
            
              data={yourbody}
              renderItem={({item})=><Card yourbody={item}/>}
    />
  </SafeAreaView>
    );
};

const style = StyleSheet.create({
  header:{
  marginTop:20,
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:20,
  },
  categoriescont:{
    paddingVertical:30,
    alignItems:'center',
    paddingHorizontal:20,
  },
  categorybtn:{
    height:45,
    width:120,
    marginRight:7,
    borderRadius:30,
    alignItems:"center",
    paddingHorizontal:5,
    flexDirection:'row',
  },
  card:{
    height:500,
    width:cardWidth,
    marginHorizontal:10,
    marginBottom:20,
    marginTop:50,
    borderRadius:15,
    elevation:30,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    marginLeft:cardWidth-230,
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;

