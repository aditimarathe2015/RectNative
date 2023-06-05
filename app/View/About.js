import { StyleSheet, Text, ScrollView, Image } from "react-native";

const AboutGlobo =
  "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ";

const WhatGlobo =
  "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const AboutScreen = () => {
    return(
  <ScrollView style={styles.container}>
    <Image
      style={styles.stretch}
      source={require("../../assets/favicon.png")}
    />
    <Text style={styles.aboutTitle}> Who we are</Text>
    <Text style={styles.aboutText}> {AboutGlobo}</Text>
    <Image
      style={styles.stretch}
      source={require("../../assets/favicon.png")}
    />
    <Text style={styles.aboutTitle}> What we do</Text>
    <Text style={styles.aboutText}> {WhatGlobo}</Text>
  </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,  
  },
  pic:{
    height:300
  },
  aboutTitle:{
    paddingTop:10,
    textAlign:"center"
  },
  aboutText :{
    paddingBottom:20,
    paddingLeft:10,
    paddingRight:10
    
  }
});

export default AboutScreen;
