import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";

function CafeInput(props) {
  const { visible, onClose, onAddCafe } = props;

  const [enteredCafeName, setEnteredCafeName] = useState("");
  const [enteredCafePros, setEnteredCafePros] = useState("");
  const [enteredCafeCons, setEnteredCafeCons] = useState("");

  function cafeNameInputHandler(enteredText) {
    setEnteredCafeName(enteredText);
  }

  function cafeProsInputHandler(enteredText) {
    setEnteredCafePros(enteredText);
  }

  function cafeConsInputHandler(enteredText) {
    setEnteredCafeCons(enteredText);
  }

  function addCafeHandler() {
    onAddCafe(enteredCafeName, enteredCafePros, enteredCafeCons);
    setEnteredCafeName("");
    setEnteredCafePros("");
    setEnteredCafeCons("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.formCard}>
          <Text style={styles.title}>New Cafe Note</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Cafe name"
            onChangeText={cafeNameInputHandler}
            value={enteredCafeName}
          />

          <TextInput
            style={[styles.textInput, styles.multiLineInput]}
            placeholder="Good sides"
            onChangeText={cafeProsInputHandler}
            value={enteredCafePros}
            multiline={true}
          />

          <TextInput
            style={[styles.textInput, styles.multiLineInput]}
            placeholder="Bad sides"
            onChangeText={cafeConsInputHandler}
            value={enteredCafeCons}
            multiline={true}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button
                title="Add Cafe"
                color="#8b5e3c"
                onPress={addCafeHandler}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button title="Cancel" color="#a1887f" onPress={onClose} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CafeInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f5efe6",
  },
  formCard: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fffaf3",
    borderWidth: 1,
    borderColor: "#d8cbb8",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5a3e2b",
    marginBottom: 16,
    textAlign: "center",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#d8cbb8",
    backgroundColor: "#fffdf9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    color: "#5a3e2b",
  },
  multiLineInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  buttonStyle: {
    width: "48%",
  },
});
