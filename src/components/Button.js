import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

const Button = (props) => { 
  return (
    <View>
      <TouchableOpacity style={{height:100,width:100,backgroundColor:props.color}}><Text>login</Text></TouchableOpacity>
    </View>
  )
}

export default Button