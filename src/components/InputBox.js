import React from 'react'
import { View, Text, } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const InputBox = (props) => {
    
  return (
    <View>
    <TextInput placeholder={props.placeholder} style={props.style} ></TextInput>
    </View>
  )
}

export default InputBox