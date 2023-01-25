import React from "react";
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation()

  return (
        <View style={{alignItems:'center', justifyContent:'center',flex:1}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('SecondScreen',{name :"sheik"})}}>
      <Text >HomeScreen</Text>
      </TouchableOpacity>
    </View>
  )
}





