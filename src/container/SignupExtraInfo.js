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
  alert
} from 'react-native';
import auth  from '@react-native-firebase/auth';
import database  from '@react-native-firebase/database'
import firebase  from '@react-native-firebase/app'
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
import {color} from 'react-native-reanimated';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import Matrix from '../contants/matrix/index'
import matrix from '../contants/matrix/index';
var dateOfBirth  = '';
export default class SignupExtraInfo extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      isEnabled: false,
      picker: false,
      date:new Date(),
      status:false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  registerUser = () => {
   const email=  this.props.route.params.email;
   const password = this.props.route.params.password
    
    if(email === '' && password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
  
     
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        var dateOfBirth = this.state.date.getDate() + " " + this.state.date.getMonth() + " " +this.state.date.getFullYear()
        const obj = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          gender: this.state.gender.value,
          dateOfBirth:dateOfBirth,
          uid:res.user.uid,
          city:this.state.city
        }
        console.log("user", obj)
       database().ref(`users/${res.user.uid}`).set(obj)
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => console.log("error",error))      
    }
  }

  toggleSwitch = () => {
    this.setState({
      isEnabled: !this.state.isEnabled,
    });
  };

  render() {

    
   var dateOfBirth = this.state.date.getDate() + " " + this.state.date.getMonth() + " " +this.state.date.getFullYear()
   console.log(dateOfBirth)
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <View style={{height:Matrix.VerticalSize(100), width: '100%', paddingHorizontal:Matrix.HorizontalSize(17)}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View style={{width: '10%'}}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../assets/img/arrow-left-line.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', width: '80%'}}>
              <Text style={{alignSelf: 'center', fontSize: 18,fontFamily:'Poppins-Regular'}}>
                Complete Registeration
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'column', justifyContent: 'center' ,}}>
            <View style={{height: 43, width: 232, alignSelf: 'center'}}>
              <Text style={{textAlign: 'center', fontSize:Matrix.customFontSize(14),fontFamily:'Poppins-Regular' , color:'#232632B3'}}>
                Some information is required to set up your profile on GolfLinks
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', marginTop:Matrix.VerticalSize(145)}}>
            <View
              style={{
                alignSelf: 'center',
                width:Matrix.HorizontalSize(321),
                height:Matrix.VerticalSize(250),

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
                  <InputBox
                    style={{height:Matrix.VerticalSize(50)}} onChange={(fName => this.setState({firstName:fName}))}
                    placeholder="First Name"></InputBox>
                </View>
                <View
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderBottomWidth: 1,
                  }}>
                  <InputBox
                    style={{height:Matrix.VerticalSize(50)}} onChange={(lname => this.setState({lastName:lname}))}
                    placeholder="Last Name"></InputBox>
                </View>

                <DropDownPicker
                  placeholder="Gender"
                  items={[
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'},
                  ]}
                  // defaultValue={this.state.country}
                  containerStyle={{height:Matrix.VerticalSize(50), paddingLeft: 6}}
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderWidth: 1,
                    borderColor: 'transparent',
                    backgroundColor: 'transparent',
                    shadowOpacity: 0.1,
                    shadowRadius: 50,
                    height: 50,
                    width: 321,
                    borderRadius: 10,
                    alignSelf: 'center',
                    color:'#232632B3'
                  }}
                  arrowColor="#4EF892"
                  onChangeItem={(gender) =>
                    this.setState({
                      gender: gender,
                    })
                  }
                />
                <View
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{height:Matrix.VerticalSize(50), width: 295, justifyContent: 'center'}}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                      onPress={() =>this.RBSheet.open()}>
                
                     { this.state.status ? <Text style={{color:'#232632B3'}}>{dateOfBirth}</Text> : <Text style={{color:'#232632B3'}}>Date of Birth</Text> }
                
                      <RBSheet
                        ref={(ref) => {
                          this.RBSheet = ref;
                        }}
                        height={300}
                        openDuration={250}
                        customStyles={{
                          container: {
                            justifyContent: 'center',
                            alignItems: 'center',
                          },
                        }}>
                        <DatePicker
                        date={this.state.date}
                        onDateChange={date => this.setState({ date:date,status:true })}
                        mode={'date'}
                      />
                      </RBSheet>

                      <Image
                        source={require('../../assets/img/calendar-icon.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderBottomWidth: 1,
                  }}>
                  <InputBox style={{height:Matrix.VerticalSize(50)}} onChange={(city => this.setState({city:city}))} placeholder="City"></InputBox>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{justifyContent: 'center', marginTop:Matrix.VerticalSize(88)}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#4EF892',
              width: 321,
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
            }} onPress = { () => this.registerUser()}>
            <Text style={{textAlign: 'center',fontFamily:'Poppins-SemiBold', fontSize:Matrix.customFontSize(14), color:'#4B5767'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
