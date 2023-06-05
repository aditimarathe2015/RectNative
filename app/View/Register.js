import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegistrationScreen = ({ navigation }) => {
  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");
  const [PasswordConfirm, SetPasswordConfirm] = useState("");
  const CancelRegistation = () => {
    Alert.alert("Registartion Cancelled");
    navigation.navigate("Home");
  };
  const registerAccount = () => {
    if (!UserName) {
      Alert.alert("Please enter username");
    }
    else if(!Password){
      Alert.alert("Please enter password");
    }
    else if (Password !== PasswordConfirm) {
      Alert.alert("Please mismatch");
    } 
    else {
      AsyncStorage.getItem(UserName, (err, result) => {
        if (result !== null) {
          Alert.alert("UserName already exist");
        } else {
          AsyncStorage.setItem(UserName, Password, (err, result) => {
            Alert.alert(`${UserName},UserName Account created`);
            navigation.navigate("Home");
          });
        }
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register Account</Text>

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

      <TextInput
        style={styles.textInput}
        onChangeText={SetPasswordConfirm}
        value={PasswordConfirm}
        secureTextEntry={true}
      ></TextInput>
      <Text style={styles.label}>Confirm Password</Text>

      <TouchableHighlight onPress={registerAccount} underlayColor="#000000">
        <Text style={styles.button}>Register</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={CancelRegistation} underlayColor="#000000">
        <Text style={styles.button}>Cancel</Text>
      </TouchableHighlight>
    </View>
  );
};
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

export default RegistrationScreen;
