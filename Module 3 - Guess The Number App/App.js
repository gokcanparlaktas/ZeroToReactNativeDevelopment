import { ImageBackground, StyleSheet } from "react-native";
import Start from "./screens/Start";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import Game from "./screens/Game";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import Result from "./screens/Result";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const [chosenNumber, setChosenNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundsList, setRoundsList] = useState(0);
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  function pickedHandler(chosenNumber) {
    setChosenNumber(chosenNumber);
    setGameOver(false);
  }
  function overHandler(roundsCounter) {
    setGameOver(true);
    setRoundsList(roundsCounter);
  }

  function restartGame() {
    setChosenNumber(null);
    setRoundsList(0);
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }
  let screen = <Start onSelectedNumber={pickedHandler} />;

  if (chosenNumber) {
    screen = <Game chosenNumber={chosenNumber} onGameOver={overHandler} />;
  }

  if (gameOver && chosenNumber) {
    screen = (
      <Result
        chosenNumber={chosenNumber}
        rounds={roundsList}
        onRestart={restartGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
