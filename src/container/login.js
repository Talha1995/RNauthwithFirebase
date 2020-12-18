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
        <View style={{height: 100, width: '100%'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              style={{alignSelf: 'center', height: 18.74, width: 100}}
              source={require('../../assets/img/LogoWithText.png')}
            />
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View style={{height: 31, width: 177, alignSelf: 'center'}}>
              <Text
                style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>
                Welcome Back,
              </Text>
            </View>
            <View
              style={{
                height: 53,
                width: 216,
                alignSelf: 'center',
                marginTop: 15,
              }}>
              <Text style={{textAlign: 'center', fontSize: 18}}>
                Enter your login details to continue
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <View
              style={{
                alignSelf: 'center',
                width: 321,
                height: 100,

                shadowOffset: {height: 1},

                shadowColor: 'gray',
                shadowOpacity: 0.1,
                shadowRadius: 15,
                backgroundColor: 'white',
              }}>
              <View style={{paddingHorizontal: 20}}>
                <View
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderBottomWidth: 1,
                  }}>
                  <InputBox style={{height: 50}} placeholder="Email" onChange={(email => this.setState({email:email}))}></InputBox>
                </View>
                <View style={{width: '100%', flexDirection: 'row'}}>
                  <View style={{width: '90%'}}>
                    <InputBox
                      style={{height: 50}}
                      placeholder="Password"
                      onChange={(password) =>this.setState({password:password}) }
                      ></InputBox>
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: 10}}>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/img/eye-close-line.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'center', marginTop: 25}}>
          <TouchableOpacity>
            <Text style={{textAlign: 'center', color: '#4EF892', fontSize: 14}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', marginTop: 70}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#4EF892',
              width: 321,
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
              
            }}
            onPress={() => this.userLogin()}
            >
            <Text style={{textAlign: 'center'}}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center'}}>
          <View style={{alignSelf: 'center'}}>
            <Text style={{textAlign: 'center', marginTop: 15, fontSize: 14}}>
              OR
            </Text>
            <Text style={{textAlign: 'center', marginTop: 5, fontSize: 12}}>
              continue with socials
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <View style={{alignSelf: 'center', paddingRight: 7}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#3B5998',
                height: 38,
                width: 64,
                borderRadius: 5,
                justifyContent:'center'
              }}><Icon name='sc-facebook' size={30} style={{color:'white',alignSelf:'center'}}></Icon></TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', paddingLeft: 7}}>
            <TouchableOpacity
              style={{
                height: 38,
                width: 64,
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
        
        <View style={{justifyContent:'center', marginTop:16 }}>
        <Text style={{textAlign:'center'}}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Signup")} ><Text style={{textAlign:'center' , color:'#4EF892'}}>Register</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
