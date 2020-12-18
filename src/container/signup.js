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
                Welcome,
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
                Let's create an account
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', marginTop: 90}}>
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
                      placeholder="Password" onChange={(password) =>this.setState({password:password}) }></InputBox>
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
        <View
          style={{marginTop: 15, flexDirection: 'row', paddingHorizontal: 27}}>
          <Text style={{fontSize: 14}}>I agree with </Text>
          <Text style={{color: '#4EF892', fontSize: 14 , width:'60%'}}>
            Terms and Conditions
          </Text>
          <View >
          <SwitchToggle
        containerStyle={{
         
          width: 34,
          height: 16,
          borderRadius: 25,
        
          padding: 5,
        }}
        circleStyle={{
          width: 12,
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
        <View style={{justifyContent: 'center', marginTop: 102}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#4EF892',
              width: 321,
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
            }} onPress={() => this.props.navigation.navigate('SignupExtraInfo',{email,password})}> 
            <Text style={{textAlign: 'center'}}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', marginTop: 16}}>
          <Text style={{textAlign: 'center'}}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', color: '#4EF892'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
