import React , {useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Alert,
  } from "react-native";
  import AsyncStorage from "@react-native-async-storage/async-storage";


  const LoginScreen = ({ navigation }) => {
    const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");
  const CancelLogin = () => {
    Alert.alert("Registartion Cancelled");
    navigation.navigate("Home");
  };
  const CreateAccount =()=>{
    navigation.navigate("Register");
  }
  const LoginUser =()=>{
    if(!UserName){
        Alert.alert("Please enter username")
    }
   else if(!Password){
        Alert.alert("Please enter password")
    }
    else{
        AsyncStorage.getItem('userLoggedIn',(err,result)=>{
            if(result !== "none"){
                Alert.alert("Some one already Logged in")
                navigation.navigate("Home");
            }
            else{
                AsyncStorage.getItem(UserName,(err,result)=>{
                    if(result !== null){
                        if(result !== Password){
                            Alert.alert("Password incorrect")
                        }
                        else{
                            AsyncStorage.setItem('user loggedin',UserName,(err,result)=>{
                                Alert.alert(`${UserName} LoggedIn`)
                                navigation.navigate("Home");
                            })
                        }
                    }
                    else{
                        Alert.alert(`No Account ${UserName}`)
                    }
                })
            }
        })
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={SetUserName}
        value={UserName}
      ></TextInput>
      <Text style={styles.label}>Enter UserName</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={SetPassword}
        value={Password}
        secureTextEntry={true}
      ></TextInput>
      <Text style={styles.label}>Enter Password</Text>

      

      <TouchableHighlight onPress={LoginUser} underlayColor="#000000">
        <Text style={styles.button}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={CancelLogin} underlayColor="#000000">
        <Text style={styles.button}>Cancel</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={CreateAccount} underlayColor="#000000">
        <Text style={styles.button}>Create Account</Text>
      </TouchableHighlight>
    </View>
    
  );
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingBottom: "45%",
      paddingTop: "5%",
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
    },
    textInput: {
      marginTop: 10,
      width: "80%",
      borderWidth: 1,
      height: 45,
      fontSize: 16,
    },
    label: {
      paddingBottom: 10,
      fontSize: 16,
      fontWeight: "bold",
    },
    button: {
      padding: 15,
      margin: 5,
      fontSize: 16,
      backgroundColor: "#DDDDDD",
      width: 150,
      height: 50,
      textAlign: "center",
    },
  });

  export default LoginScreen