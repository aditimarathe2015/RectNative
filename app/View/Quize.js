import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import {
  GeneralQuize,
  HtmlQuize,
  JavascriptQuize,
} from "../data/QuizeQuestions";
import { Questions } from "../components/Questions";

const Quiz = ({ navigation }) => {
  const [questLoaded, setQuestLoaded] = useEffect(false);
  const [totalScore, setTotalScore] = useEffect(100);
  const [complectedQuize, setComplectedQuize] = useEffect(false);
  const [questionList, setQuestionlist] = useEffect([]);
  const [noOfQuestions, setNoOfQuestions] = useEffect(0);
  const [incorrect, setInCorrect] = useEffect(0);
  const [questionsAnswer, setQuestionAnswer] = useEffect(1);
  const [questionsWorth, setQuestionWorth] = useEffect(0);
  const [selectedQuiz, setSelectedQuize] = useEffect("");

  const setUpQuize = async () => {
    let quizData = new Promise((resolve, reject) => {
      const quizze = [GeneralQuize, HtmlQuize, JavascriptQuize];
      let selected = quizze[Math.floor(Math.random() * quizze.length)];
      let choice = selected;
      resolve(choice);
    });

    let chosenQuize = await quizData;
    let quizeTitle = await chosenQuize.title[0];
    let quizeContent = await chosenQuize.question;
    let questionCount = await quizeContent.length;
    setSelectedQuize(quizeTitle);
    setQuestionlist(quizeContent);
    setQuestionWorth(Math.floor(100 / questionCount));
    setNoOfQuestions(questionCount);
    setQuestLoaded(true);
  };
  useEffect(() => {
    setUpQuize();
  }, []);

  const updateScore = (penelty) => {
    let tempScore = totalScore;
    let missed = incorrect;
    let questionsTotal = noOfQuestions;
    let questionsDone = questionsAnswer;
    setTotalScore(tempScore - penelty);
    setInCorrect(penelty ? missed + 1 : missed);
    setQuestionAnswer(questionsDone + 1);
    if (questionsAnswer === questionsTotal) {
      setComplectedQuize(true);
    }
  };
  const finishQuize = () => {
    navigation.navigate("QuizeFinish", {
      score: totalScore,
      missed: incorrect,
      questions: noOfQuestions,
    });
  };
  return (
    <View style={styles.container}>
      <Text>{selectedQuiz}</Text>
      {questLoaded && (
        <FileList
          keyExtractor={(item) => item.key.toString()}
          data={questionList}
          renderItem={({ item }) => (
            <Questions
              question={item.question}
              answer1={item.answer1}
              answer2={item.answer2}
              answer3={item.answer3}
              answer4={item.answer4}
              correstAnswer={item.correstAnswer}
              scoreUpdate={updateScore}
              worth={questionsWorth}
            />
          )}
        />
      )}
      {complectedQuize && (
        <TouchableHighlight onPress={finishQuize} style={styles.enabled}>
          <Text>Touch to Finish</Text>
        </TouchableHighlight>
      )}
      {!complectedQuize && (
        <TouchableHighlight style={styles.disable}>
          <Text>Answer all the question</Text>
        </TouchableHighlight>
      )}
      {!questLoaded && <Text>LOADING</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  enabled: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90ee90",
    height: "10%",
  },
  disable: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    height: "10%",
  },
});

export default Quiz