import { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Title from "../components/ui/Title";
import GuessContainer from "../components/game/GuessContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessesListItem from "../components/game/GuessesListItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function Game({ chosenNumber, onGameOver }) {
  const firstGuess = generateRandomBetween(1, 100, chosenNumber);
  const [guess, setGuess] = useState(firstGuess);
  const [roundsCount, setRoundsCount] = useState([firstGuess]);
  useEffect(() => {
    if (guess === chosenNumber) {
      onGameOver(roundsCount.length);
    }
  }, [guess, chosenNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && guess < chosenNumber) ||
      (direction === "greater" && guess > chosenNumber)
    ) {
      Alert.alert("Yalan söyleme!", "Bu yönlendirme yanlış görünüyor.", [
        { text: "Tamam", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }

    const newGuess = generateRandomBetween(minBoundary, maxBoundary, guess);
    setGuess(newGuess);
    setRoundsCount((prevRounds) => [newGuess, ...prevRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title>Our Guess</Title>
      <GuessContainer>{guess}</GuessContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="arrow-down-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="arrow-up-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={roundsCount}
          renderItem={(itemData) => (
            <GuessesListItem
              roundNumber={roundsCount.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
