import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'


export default function SecondScreen(props) {

  const navigation  = useNavigation()
  const {name}=props.route.params;

  // const { itemId, otherParam } = route.params;

  return (
    <View >
      <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}} >
      <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  )
}