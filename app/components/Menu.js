import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
 
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Lessons</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.buttonStyle}
          onPress={()=>navigation.navigate("Quize")}
        >
          <Text style={styles.buttonText}>Quize</Text>
        </TouchableOpacity> */}
      </View>
      <View style={[styles.buttonRow, styles.border]}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={()=>navigation.navigate("Blog")}
        >
          <Text style={styles.buttonText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.bottomStyleButton}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.buttonText}>About gobaolmatric</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#35605a",
  },
  bottomRow: {
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  bottomStyleButton: {
    backgroundColor: "#35605a",
    width: "100%",
    height: "50%",
    paddingRight: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#35605a",
    width: "50%",
    height: "55%",
    alignItems: "center",
  },
  border: {
    borderColor: "#ffffff",
    borderBottomWidth: 1,
  },
});

export default Menu;
