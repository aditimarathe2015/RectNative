import React from 'react'
import {
    Text,
    View,
    } from "react-native";
  

const SampleComponent=(props) =>{
  
  return (
    <View><Text>Hi Text here {props.name}</Text></View>
  )
}


const SampleHomeComponent=(props) =>{
  
    return (
     <SampleComponent name="John dev"/>
    )
  }
  
  
export default SampleHomeComponent
