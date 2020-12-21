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
import Icon from 'react-native-vector-icons/EvilIcons';
import {color} from 'react-native-reanimated';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import Matrix from '../contants/matrix/index'
export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      isEnabled: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

 

  toggleSwitch=() =>{
    this.setState({
      isEnabled:!this.state.isEnabled
    })
  }
  render() {
    const {email,password} = this.state
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
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
          <View style={{flexDirection: 'column', justifyContent: 'center', marginTop:Matrix.VerticalSize(82.04)}}>
            <View style={{height: Matrix.VerticalSize(31), width: Matrix.HorizontalSize(115), alignSelf: 'center'}}>
              <Text
                style={{textAlign: 'center', fontSize:Matrix.customFontSize(22), fontWeight: 'bold',fontFamily:'Poppins-SemiBold'}}>
                Welcome,
              </Text>
            </View>
            <View
              style={{
                height: Matrix.VerticalSize(25) ,
                width: Matrix.HorizontalSize(223),
                alignSelf: 'center',
                marginTop: Matrix.VerticalSize(15),
              }}>
              <Text style={{textAlign: 'center', fontSize: Matrix.customFontSize(18) , fontFamily:'Poppins-Regular'}}>
                Let's create an account
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', marginTop: Matrix.VerticalSize(90)}}>
            <View
              style={{
                alignSelf: 'center',
                width:Matrix.HorizontalSize(321),
                height:Matrix.VerticalSize(100),

                shadowOffset: {height:Matrix.VerticalSize(1)},

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
                  <InputBox style={{height:Matrix.VerticalSize(50)}} placeholder="Email" onChange={(email => this.setState({email:email}))}></InputBox>
                </View>
                <View style={{width: '100%', flexDirection: 'row'}}>
                  <View style={{width: '90%'}}>
                    <InputBox
                      style={{height:Matrix.VerticalSize(50)}}
                      placeholder="Password" onChange={(password) =>this.setState({password:password}) }></InputBox>
                  </View>
                  <View style={{justifyContent: 'center', paddingLeft: Matrix.HorizontalSize(10)}}>
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
        <View
          style={{marginTop:Matrix.VerticalSize(15), flexDirection: 'row', paddingHorizontal:Matrix.HorizontalSize(27)}}>
          <Text style={{fontSize: Matrix.customFontSize(14), fontFamily:'Poppins-Regular'}}>I agree with </Text>
          <Text style={{color: '#4EF892', fontSize: Matrix.customFontSize(14) , width:'67%', fontFamily:'Poppins-SemiBold'}}>
            Terms and Conditions
          </Text>
          <View >
          <SwitchToggle
        containerStyle={{
         
          width: Matrix.HorizontalSize(34),
          height:Matrix.VerticalSize(16),
          borderRadius: 25,
        
          padding: 5,
        }}
        circleStyle={{
          width:  12,
          height: 12,
          borderRadius: 6,
          
        }}
        switchOn={this.state.isEnabled}
        onPress={()  => this.toggleSwitch()}
        circleColorOff="#232632"
        circleColorOn="#4EF892"
        backgroundColorOff='#2326320C'
        backgroundColorOn='#232632'
        duration={500}
      />
          </View>
        </View>
        <View style={{justifyContent: 'center', marginTop:Matrix.VerticalSize(206)}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#4EF892',
              width: Matrix.HorizontalSize(321),
              height:Matrix.VerticalSize(50),
              justifyContent: 'center',
              borderRadius: 10,
            }} onPress={() => this.props.navigation.navigate('SignupExtraInfo',{email,password})}> 
            <Text style={{textAlign: 'center',fontFamily:'Poppins-SemiBold',color:"#4B5767"}}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', marginTop:Matrix.VerticalSize(16)}}>
          <Text style={{textAlign: 'center',fontFamily:'Poppins-Regular'}}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', color: '#4EF892',fontFamily:'Poppins-SemiBold'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
