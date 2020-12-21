// components/dashboard.js

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker';
import InputBox from '../components/InputBox';
import Icons from 'react-native-vector-icons/AntDesign';
import database  from '@react-native-firebase/database'
import Matrix from '../contants/matrix/index'
import matrix from '../contants/matrix/index';
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      uid: '',
      firstName:'',
      lastName:'',
      address:'',

    };
  }

  signOut = () => {
    auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'));
  };
componentDidMount(){
  database()
      .ref(`/users/${auth().currentUser.uid}`)
      .on('value', snapshot => {
        this.setState({
          firstName:snapshot.val().firstName,
          lastName:snapshot.val().lastName,
          address:snapshot.val().city,
        })
        //console.log('User data: ', snapshot.val().firstName);
      });
}
  render() {
    console.log("data",auth().currentUser)
    // this.state = {
    //   displayName: auth().currentUser.providerData[0].displayName,
    //   uid: auth().currentUser.uid
    // }

    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
           <View style={{marginTop:Matrix.VerticalSize(41.22),justifyContent:'center',alignItems:'center'}} >
          <View  style={{height: Matrix.VerticalSize(25), width: Matrix.HorizontalSize(90)}}>
          <Text style={{alignSelf: 'center', fontSize: 18,fontFamily:'Poppins-Regular'}}>
                Profile
              </Text>
          </View>
        </View>
        {/* <View style={{height: 70, width: '100%', paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
           
            <View style={{justifyContent: 'center',}}>
              <Text style={{alignSelf: 'center', fontSize: 18,fontFamily:'Poppins-Regular'}}>
                Profile
              </Text>
            </View>
          </View>
        </View> */}
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            paddingHorizontal: 10,
            marginTop:Matrix.VerticalSize(52)
          }}>
          <View
            style={{
              alignSelf: 'center',
              width:Matrix.HorizontalSize(144),
              height:Matrix.VerticalSize(175),
              paddingLeft:Matrix.HorizontalSize(17)
            }}>
            <Image
              resizeMode="cover"
              style={{height: '100%', width: '100%', borderRadius: 10}}
              source={{
                uri:
                  'https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/Shah%20Rukh%20Khan-2085361793-1572690045.jpg',
              }}></Image>
          </View>
          <View style={{marginLeft: 10, justifyContent: 'flex-end'}}>
            <View style={{height: 24, width: 24}}>
              <Image source={require('../../assets/img/men-line.png')}></Image>
            </View>
            <View style={{width:'100%'}}>
              <Text style={{marginTop: 7, fontSize: 16, fontWeight: 'bold',fontFamily:'Poppins-Bold'}}>
                {this.state.firstName} {this.state.lastName} 
              </Text>
            </View>
            <View style={{marginTop: 5, fontSize: 14,fontFamily:'Poppins-Regular'}}>
              <Text>{this.state.address}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 140,
                  backgroundColor: '#4EF892',
                  borderRadius: 5,
                  justifyContent: 'center',
                  marginTop: 15,
                  fontFamily:'Poppins-SemiBold'
                }}
                onPress={() => this.signOut()}
                >
                <Text style={{textAlign: 'center'}}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop:Matrix.VerticalSize(20),
            alignSelf: 'center',
            height: Matrix.VerticalSize(50),
            width: Matrix.HorizontalSize(321),
            backgroundColor:'white',
            shadowOpacity: 0.1,
            shadowRadius: 40,
            borderRadius: 10,
            justifyContent:'center'
          }}>
         
            <View style={{flexDirection:'row' ,justifyContent:'space-between' , paddingHorizontal:17}}>
            <Text style={{fontSize:12,color:'#232632B3'}}>I'm available to play on weekends!</Text>
            <Icons name="edit" color="#4EF892" size={16}></Icons>
          
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal:Matrix.HorizontalSize(17),
            marginTop:Matrix.VerticalSize(20),
          }}>
          <View
            style
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                height:Matrix.VerticalSize(65),
                width: Matrix.HorizontalSize(163),
                backgroundColor: '#4EA9F8',
                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: Matrix.VerticalSize(65),
                width: Matrix.HorizontalSize(163),
                backgroundColor: '#F8A94E',
                borderRadius: 10,
              }}></View>
          </View>
          <View
            style
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <View
              style={{
                height: Matrix.VerticalSize(65),
                width:Matrix.HorizontalSize(163),
                backgroundColor: '#D74EF8',
                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: Matrix.VerticalSize(65),
                width: Matrix.HorizontalSize(163),
                backgroundColor: '#F84E82',
                borderRadius: 10,
              }}></View>
          </View>
        </View>
        <View
          style={{
            marginTop: Matrix.VerticalSize(20),
            justifyContent: 'center',
            paddingHorizontal: 17,
          }}>
          <View>
            <Text style={{fontSize:14,fontFamily:'Poppins-Bold'}}>About Me:</Text>
          </View>
          <View style={{marginTop:Matrix.VerticalSize(10), height:Matrix.VerticalSize(55), width: Matrix.HorizontalSize(341)}}>
            <Text style={{color: '#232632B3', fontSize:Matrix.customFontSize(12),fontFamily:'Poppins-Regular'}}>
              This here is some text that tells the users about this person.
              This is essentially a paragraph which is broken into parts.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop:Matrix.VerticalSize(15),
            justifyContent: 'center',
            paddingHorizontal: 17,
          }}>
          <View>
            <Text style={{fontSize:14,fontFamily:'Poppins-Bold'}}>Interests:</Text>
          </View>
          <View style={{marginTop:Matrix.VerticalSize(10), height:Matrix.VerticalSize(55), width:Matrix.HorizontalSize(341)}}>
            <Text style={{color: '#232632B3', fontSize: 12,fontFamily:'Poppins-Regular'}}>
              Golf, Books, Movies and Music
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
