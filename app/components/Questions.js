import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";

const Questions = (props) => {
  const [selected, setSeleced] = useState(false);
  const [correct, setCorrect] = useState(false);

  const chooseAnswer = (ans) => {
    let worth = props.worth;
    if (ans === props.correctAnswer) {
      setSelected(true);
      setCorrect(true);
      props.scoreUpdate(0);
    } else {
      setSeleced(true);
      props.scoreUpdate(worth);
    }
  };

  return (
    <View style={style.container}>
      {!selected && (
        <View style={styles.container}>
          <Text style={styles.questionTxt}>{props.question}</Text>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => {
              chooseAnswer;
            }}
          >
            <Text style={styles.answerText}>{props.answer1}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => {
              chooseAnswer;
            }}
          >
            <Text style={styles.answerText}>{props.answer2}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => {
              chooseAnswer;
            }}
          >
            <Text style={styles.answerText}>{props.answer3}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => {
              chooseAnswer;
            }}
          >
            <Text style={styles.answerText}>{props.answer4}</Text>
          </TouchableHighlight>

          {selected && correct && (
            <View style={styles.correctContainer}>
              <Text style={styles.questionText}>{props.question}</Text>
              <Text style={styles.answerText}>{props.answer1}</Text>
              <Text style={styles.answerText}>{props.answer2}</Text>
              <Text style={styles.answerText}>{props.answer3}</Text>
              <Text style={styles.answerText}>{props.answer4}</Text>
              <Text style={styles.answerText}>Correct</Text>
            </View>
          )}

          {!selected && !correct && (
            <View style={styles.wrongContainer}>
              <Text style={styles.questionText}>{props.question}</Text>
              <Text style={styles.answerText}>{props.answer1}</Text>
              <Text style={styles.answerText}>{props.answer2}</Text>
              <Text style={styles.answerText}>{props.answer3}</Text>
              <Text style={styles.answerText}>{props.answer4}</Text>
              <Text style={styles.answerText}>InCorrect</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  questionTxt: {
    height: 300,
  },
  answerText: {
    flex: 2,
    padding: 20,
    fontSize: 20,
    textAlign: "center",
  },
  questionText: {
    flex: 2,
    padding: 20,
    fontSize: 20,
  },
  correctContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#008000",
  },

  wrongContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#ff0000",
  },
});

export default Questions;
