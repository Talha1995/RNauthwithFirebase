import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  InteractionManager,
} from 'react-native';
import Carousel , { Pagination } from 'react-native-snap-carousel';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Matrix from '../contants/matrix/index'



class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeSlide:[0],
        
      entries: [
        {
          title: 'Schedule and Manage your games in a calender.',
          image: require('../../assets/img/Slider1.png'),
          color: '#FFEBF0',
        },
        {
          title: 'Find Golfers from all around the Globe.',
          image: require('../../assets/img/Slider2.png'),
          color: '#FFF7E8',
        },
        {
          title: 'Make Friends and Plan games with them!',
          image: require('../../assets/img/Slider3.png'),
          color: '#F5FFFF',
        },
      ],
    };
  }
  _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: item.color,
          height: Matrix.VerticalSize(408),
          width: Matrix.HorizontalSize(311),
          borderRadius: 10,
        }}>
        <View style={{height: Matrix.VerticalSize(52), width: Matrix.HorizontalSize(265), marginTop:Matrix.VerticalSize(35),marginLeft:Matrix.HorizontalSize(15), marginRight:Matrix.HorizontalSize(31)}}>
          <Text
            style={{
              color: '#232632',
              textAlign: 'left',
              height:"100%",
              width:'100%',
              fontSize: Matrix.FontRegular,
              fontFamily:'Poppins-SemiBold'
            }}>
            {item.title}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',

            bottom: Matrix.VerticalSize(27.27),
            height:Matrix.VerticalSize(177.73),
            width:Matrix.HorizontalSize(170.88)
          }}>
          <Image
            style={{height:'100%',width:'100%'}} resizeMode='contain'
            source={item.image}></Image>
        </View>
      </View>
    );
  };
  get pagination () {
    const { entries, activeSlide } = this.state;
    return (
        <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent' }}
        dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: '#4EF892',
            marginLeft:-10
            
        }}
        inactiveDotStyle={{
            backgroundColor:'white',
            borderWidth:1,
            borderColor:'black',
           
       

            // Define styles for inactive dots here
        }}
        
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.7}
      />
    );
}

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <View style={{marginTop:Matrix.VerticalSize(61),justifyContent:'center',alignItems:'center'}} >
          <View  style={{height: Matrix.VerticalSize(18.74), width: Matrix.HorizontalSize(100)}}>
            <Image
              style={{alignSelf: 'center', height: "100%", width: "100%",}} resizeMode='contain'
              source={require('../../assets/img/LogoWithText.png')}
            />
          </View>
        </View>
        <View style={{marginTop:Matrix.VerticalSize(82)}}> 
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          sliderWidth={360}
          itemWidth={300}

        />
        </View>
        
        <View style={{ marginTop:Matrix.VerticalSize(45) }}>
          <DropDownPicker
           placeholder='Choose your Language'
            items={[
              {label: 'USA', value: 'usa'},
              {label: 'UK', value: 'uk'},
              {label: 'France', value: 'france'},
            ]}
            // defaultValue={this.state.country}
            containerStyle={{height: 40,}}
            style={{ borderColor:'white', shadowOpacity:0.1,shadowRadius:50 ,height:Matrix.VerticalSize(50),width:Matrix.HorizontalSize(321),borderRadius:10,alignSelf:'center'}}
           
            arrowColor='#4EF892'
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
        </View>
        <View style={{marginTop:Matrix.VerticalSize(30)}}>
            {/*  */}
            <View style={{flexDirection:'row' }}>
            <View style={{paddingHorizontal:10,width:'82%',alignItems:'flex-start'}}>{ this.pagination }</View>
            <View style={{justifyContent:'center'}}>
            <TouchableOpacity style={{height:50,width:50,borderRadius:25,backgroundColor:'#4EF892',justifyContent:'center',alignItems:'center'}}
            onPress={()=>this.props.navigation.navigate('Login')}
            >
                <Image source={require('../../assets/img/arrow-right-line.png')} ></Image>
                </TouchableOpacity>
            </View>
            </View>
        </View>

        
      </SafeAreaView>
    );
  }
}

export default Intro;
