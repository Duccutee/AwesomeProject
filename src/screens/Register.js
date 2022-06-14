import 'react-native-gesture-handler';
import React, { useState, useContext} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../colors/color';
import STYLES from '../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { Primarybutton } from '../components/button';
import { auth } from '../auth';


const Register = ({navigation}) => {
  const [username, setUsername]= useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword]= useState(null);
  const {register}= useContext(auth);
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
  
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            Natri
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
            Life
          </Text>
        </View>
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome User,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign up to join with us!!
          </Text>
        
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="create username" style={STYLES.input} value={username} onChangeText={text =>setUsername(text)}/>
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input}  value={email} onChangeText={text =>setEmail(text)} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
              value={password} onChangeText={text =>setPassword(text)}
            />
          </View>
          <View >
          <Primarybutton onPress={() => {
            {register(username,email,password)}
            navigation.navigate('Login')
            }} title="Sign up" style={{top:20}}/>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../public/img/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../public/img/google.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;