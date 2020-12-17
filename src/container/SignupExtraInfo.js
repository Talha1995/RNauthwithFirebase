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
import DropDownPicker from 'react-native-dropdown-picker';
export default class SignupExtraInfo extends Component {
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

  toggleSwitch = () => {
    this.setState({
      isEnabled: !this.state.isEnabled,
    });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <View style={{height: 100, width: '100%' , paddingHorizontal:20}}>
          <View
            style={{
             
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View style={{width:"10%"}}>
           <TouchableOpacity onPress={()=> this.props.navigation.goBack()}><Image source={require('../../assets/img/arrow-left-line.png')}></Image></TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',width:'80%'}}>
              <Text style={{alignSelf: 'center', fontSize: 18}}>
                Complete Registeration 
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View style={{height: 43, width: 232, alignSelf: 'center'}}>
              <Text
                style={{textAlign: 'center', fontSize: 14, }}>
                Some information is required to set up your profile on GolfLinks
              </Text>
            </View>
       
          </View>
          <View style={{justifyContent: 'center', marginTop: 70}}>
            <View
              style={{
                alignSelf: 'center',
                width: 321,
                height: 250,

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
                  <InputBox style={{height: 50}} placeholder="First Name"></InputBox>
                </View>
                <View
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderBottomWidth: 1,
                  }}>
                  <InputBox style={{height: 50}} placeholder="Last Name"></InputBox>
                </View>
                
                <DropDownPicker
           placeholder='Gender'
            items={[
              {label: 'Male', value: 'Male'},
              {label: 'Female', value: 'Female'},
              
            ]}
            // defaultValue={this.state.country}
            containerStyle={{height: 40,paddingLeft:5}}
            style={{ borderBottomColor:'#4EF8921A',borderWidth:1,borderColor:'transparent',backgroundColor:'transparent', shadowOpacity:0.1,shadowRadius:50 ,height:50,width:321,borderRadius:10,alignSelf:'center'}}
           
            arrowColor='#4EF892'
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
                <View
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderBottomWidth: 1,
                  }}>
                  <InputBox style={{height: 50}} placeholder="First Name"></InputBox>
                </View>
                <View
                  style={{
                    borderBottomColor: '#4EF8921A',
                    borderBottomWidth: 1,
                  }}>
                  <InputBox style={{height: 50}} placeholder="First Name"></InputBox>
                </View>
                
                
              </View>
              
            </View>
          </View>
        </View>
        
        <View style={{justifyContent: 'center', marginTop: 88}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#4EF892',
              width: 321,
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{textAlign: 'center'}}>Continue</Text>
          </TouchableOpacity>
        </View>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({});
