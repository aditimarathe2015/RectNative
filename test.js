import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Platform,
  Alert,
  Dimensions
} from "react-native";

export default function Test() {
  console.log(Dimensions.get("screen"));
  const handelPress = () => console.log("Handel press");
  const image = { uri: "https://picsum.photos/seed/picsum/200/300" };
  return (
    <SafeAreaView style={[styles.container, styleContainer]}>
      {/* <Text numberOfLines={2} onPress={()=>{console.log("text click react")}}>Open up App.js hello word to chek really really long test in react native app </Text> */}
      <Text numberOfLines={1} onPress={handelPress}>
        Touch me{" "}
      </Text>
      {/* <Image source={require('./assets/favicon.png')}></Image> */}

      <TouchableHighlight onPress={() => console.log("Image Press")}>
        <Image
          style={styles.stretch}
          source={require("./assets/img.png")}
        />
      </TouchableHighlight>

      <TouchableNativeFeedback>
        <View
          style={{ width: 200, height: 70, backgroundColor: "blue" }}
        ></View>
      </TouchableNativeFeedback>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>img</Text>
    </ImageBackground> */}

      <Button
        title="Click Me"
        color={"orange"}
        onPress={() =>
          Alert.alert("button tab", "clicked on button", [
            { text: "Yes", onPress: () => console.log("yes Press") },
            { text: "No", onPress: () => console.log("No Press") },
          ])
        }
      ></Button>
    </SafeAreaView>
  );
}
const styleContainer = { backgroundColor: "yellow", height: 400 };

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "blue",
    // paddingTop: Platform.OS === "android" ? 80 :0,
    padding: Platform.OS === "android" ? 50 : 0,
    width: "70%",
    height: 70,
    //paddingTop: Platform.OS === "android" ? StatusBar.height :80,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 200,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
