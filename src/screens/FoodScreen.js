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
import foods from '../data/foods';
import { auth } from '../auth';


const {width} = Dimensions.get("screen");
const  cardWidth = width/2-25;
const FoodScreen = ({navigation}) => {
   const {userInfo} = useContext(auth);
   const [selectCategoryIndex, setSeletCategoryIndex] = React.useState(0);
  const ListCategories=()=>{
    return <ScrollView horizontal 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={style.categoriescont}>
      {categories.map((category,index)=>(
        <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=>setSeletCategoryIndex(index)
        }>
          <View style={{backgroundColor:selectCategoryIndex== index? COLORS.primary:COLORS.secondary,
            ...style.categorybtn}}>
              <View>
                <Image source={category.image} style={{height:45, width:46, resizeMode:'cover'}} ></Image>
              </View> 
              <Text style={{fontSize:16, fontWeight:'bold', color:selectCategoryIndex ==index? COLORS.white:COLORS.primary, marginLeft:10}}>{category.name}
              </Text>
          </View>
        </TouchableOpacity>
     ))}
    </ScrollView>
  };
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Login')}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -5}}>
            <Image source={food.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:COLORS.primary}}>
              {food.calories}
            </Text>
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
           <Text style={{fontSize:28, fontWeight:'bold', marginLeft:-10, color:COLORS.dark,}}> {userInfo.username} </Text>
        </View>
           <Text style={{fontSize:22, marginTop:5, marginLeft:10, color:COLORS.grey}}>
               Food.....
            </Text>
           </View>
         <Image source={require('../../public/img/avatar.jpg')} style={{height:50, width:50, borderRadius:25}}/>
    </View>
    <View> 
      <ListCategories/>
    </View>
    <FlatList showsVerticalScrollIndicator={false} 
              numColumns={2} 
              data={foods}
              renderItem={({item})=><Card food={item}/>}
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
    height:250,
    width:cardWidth,
    marginHorizontal:10,
    marginBottom:20,
    marginTop:50,
    borderRadius:15,
    elevation:30,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FoodScreen;

