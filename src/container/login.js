// components/login.js

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons'
import { color } from 'react-native-reanimated';
import Matrix from '../contants/matrix/index'
import matrix from '../contants/matrix/index';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      this.setState({
        isLoading: true,
      });

      auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log(
            'User logged-in successfully!',
            res.user._user.providerData,
          );
          this.setState({
            isLoading: false,
            email: '',
            password: '',
          });
          this.props.navigation.navigate('Dashboard');
        })
        .catch((error) => this.setState({errorMessage: error.message}));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff'}}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    
    return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View style={{marginTop:Matrix.VerticalSize(41.22),justifyContent:'center',alignItems:'center'}} >
          <View  style={{height: Matrix.VerticalSize(18.74), width: Matrix.HorizontalSize(100)}}>
            <Image
              style={{alignSelf: 'center', height: "100%", width: "100%",}} resizeMode='contain'
              source={require('../../assets/img/LogoWithText.png')}
            />
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View style={{height: Matrix.VerticalSize(31), width: Matrix.HorizontalSize(177), alignSelf: 'center', marginTop:Matrix.VerticalSize(82.04)}}>
              <Text
                style={{textAlign: 'center', fontSize: Matrix.customFontSize(22), fontFamily:'Poppins-SemiBold'}}>
                Welcome Back,
              </Text>
            </View>
            <View
              style={{
                height: Matrix.VerticalSize(53),
                width: Matrix.HorizontalSize(216),
                alignSelf: 'center',
                marginTop: Matrix.VerticalSize(15),
              }}>
              <Text style={{textAlign: 'center', fontSize: Matrix.customFontSize(18),FontFamily:'Poppins-Regular'}}>
                Enter your login details to continue
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <View
              style={{
                alignSelf: 'center',
                width: Matrix.HorizontalSize(321),
                height: Matrix.VerticalSize(100),
                marginTop:Matrix.VerticalSize(62),

                shadowOffset: {height: Matrix.VerticalSize(1)},

                shadowColor: 'gray',
                shadowOpacity: 0.1,
                shadowRadius: 15,
                backgroundColor: 'white',
              }}>
              <View style={{paddingHorizontal: Matrix.HorizontalSize(20)}}>
                <View
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderBottomWidth: 1,
                  }}>
                  <InputBox style={{height: Matrix.VerticalSize(50)}} placeholder="Email" onChange={(email => this.setState({email:email}))}></InputBox>
                </View>
                <View style={{width: '100%', flexDirection: 'row'}}>
                  <View style={{width: '90%'}}>
                    <InputBox
                      style={{height: Matrix.VerticalSize(50)}}
                      placeholder="Password"
                      onChange={(password) =>this.setState({password:password}) }
                      ></InputBox>
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: Matrix.HorizontalSize(10) }}>
                    <TouchableOpacity style={{height:Matrix.VerticalSize(18),width:Matrix.HorizontalSize(18)}}>
                      <Image
                        source={require('../../assets/img/eye-close-line.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'center', marginTop: Matrix.VerticalSize(25),}}>
          <TouchableOpacity style={{alignSelf:'center',height:Matrix.VerticalSize(20),width:Matrix.HorizontalSize(132)}}>
            <Text style={{textAlign: 'center', color: '#4EF892', fontSize: Matrix.customFontSize(14),fontFamily:'Poppins-SemiBold'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', marginTop: Matrix.VerticalSize(102)}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#4EF892',
              width: Matrix.HorizontalSize(321),
              height: Matrix.VerticalSize(50),
              justifyContent: 'center',
              borderRadius: 10,
              
            }}
            onPress={() => this.userLogin()}
            >
            <Text style={{color:'#4B5767',textAlign: 'center',fontFamily:'Poppins-SemiBold', fontSize:Matrix.customFontSize(14),height:Matrix.VerticalSize(20)}}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center'}}>
          <View style={{alignSelf: 'center',}}>
            <View style={{height:Matrix.VerticalSize(20),marginTop:Matrix.VerticalSize(15)}}>
            <Text style={{textAlign: 'center',  fontSize: Matrix.customFontSize(14),fontFamily:'Poppins-Regular'}}>
              OR
            </Text>
            </View>
            <View style={{height:Matrix.VerticalSize(17),marginTop:Matrix.VerticalSize(5)}}>
            <Text style={{textAlign: 'center', fontSize: Matrix.customFontSize(12),fontFamily:'Poppins-Regular' , color:'#232632B3'}}>
              continue with socials
            </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: Matrix.VerticalSize(15),
          }}>
          <View style={{alignSelf: 'center', paddingRight: 7}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#3B5998',
                height: Matrix.VerticalSize(38),
                width: Matrix.HorizontalSize(64),
                borderRadius: 5,
                justifyContent:'center'
              }}><Icon name='sc-facebook' size={30} style={{color:'white',alignSelf:'center'}}></Icon></TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', paddingLeft: 7}}>
            <TouchableOpacity
              style={{
                height: Matrix.VerticalSize(38),
                width: Matrix.HorizontalSize(64),
                borderRadius: 5,
                justifyContent: 'center',
                shadowColor: 'gray',
                shadowOpacity: 0.1,
                shadowRadius: 15,
                backgroundColor: 'white',
              }}>
              <Image source={require('../../assets/img/google.png')} style={{alignSelf:'center', height:22.51 , width:22}} ></Image>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={{justifyContent:'center', marginTop:Matrix.VerticalSize(16) }}>
        <Text style={{textAlign:'center',fontFamily:'Poppins-Regular', fontSize:Matrix.customFontSize(14)}}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Signup")} ><Text style={{textAlign:'center' , color:'#4EF892', fontFamily:'Poppins-Medium',fontSize:Matrix.customFontSize(14)}}>Register</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
