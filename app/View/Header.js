import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  Image
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const GlobalHeader = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigation = useNavigation();

  const toggleUser = () => {
    if (isLoggedIn) {
      AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
        setLoggedIn(false);
        setLoggedInUser('');
        Alert.alert("user logged out");
      });
    } else {
      navigation.navigate("Login");
    }
  };

  // useEffect(() => {
  //   AsyncStorage.getItem("userLoggedIn", (err, result) => {
  //     if (result === "none") {
  //       console.log("None");
  //     } else if (result === null) {
  //       AsyncStorage.setItem("userLoggedIn", (err, result) => {
  //         console.log("set user to none");
  //       });
  //     } else {
  //       setLoggedIn(true);
  //       setLoggedInUser(result);
  //     }
  //   });
  // },[]);
  let display = isLoggedIn ? loggedInUser : "Tap to login";
  return <View style={styles.headStyle}>
     <Image
      style={styles.imageStyle}
      source={require("../../assets/favicon.png")}
    />
    <Text style={styles.headText} onPress={toggleUser}>
    {display} 
    </Text>
    
  </View>;
 
};
const styles = StyleSheet.create({
    headStyle:{
        backgroundColor : '#35605a',
        flexDirection :"row"
    },
    imageStyle:{
        alignSelf :'flex-start',
        height :100,
        width :200,
        flex :1
    },
    headText:{
        textAlign : 'right',
        textAlignVertical : 'center',
        color :'#ffffff',
        flex :1,
        padding :15
    }
})

export default GlobalHeader;
