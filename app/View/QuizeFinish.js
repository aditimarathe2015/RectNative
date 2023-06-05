import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";

const QuizeFinish = ({ route, navigation }) => {
  const { score, missed, questions } = route.param;
  const exitQuize = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text>Your quize score was {score}</Text>
      <Text>
        You missed on {missed} out of question {questions}
      </Text>
      <TouchableHighlight onPress={exitQuize} style={styles.button}>
        <Text>Finish Quize</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems :'center',
    justifyContent :'center'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
  },
  disable: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    height: "10%",
  },
});

export default QuizeFinish;
