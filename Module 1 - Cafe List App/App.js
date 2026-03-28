import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Image } from "react-native";

import CafeItem from "./components/CafeItem";
import CafeInput from "./components/CafeInput";

export default function App() {
  const [cafes, setCafes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addCafeHandler(name, pros, cons) {
    setCafes((currentCafes) => [
      ...currentCafes,
      {
        id: Math.random().toString(),
        name: name,
        pros: pros,
        cons: cons,
      },
    ]);
    setModalVisible(false);
  }

  function deleteCafeHandler(id) {
    setCafes((currentCafes) => {
      return currentCafes.filter((cafe) => cafe.id !== id);
    });
  }

  function openModal() {
    setModalVisible(true);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./assets/image/cafe.png")}
        />
      </View>
      <Button title="Add New Cafe" color="#8b5e3c" onPress={openModal} />

      {modalVisible && (
        <CafeInput
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAddCafe={addCafeHandler}
        />
      )}

      <View style={styles.goalsContainer}>
        <FlatList
          data={cafes}
          renderItem={(itemData) => {
            return (
              <CafeItem
                id={itemData.item.id}
                name={itemData.item.name}
                pros={itemData.item.pros}
                cons={itemData.item.cons}
                onDeleteItem={deleteCafeHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
    backgroundColor: "#f5efe6",
    justifyContent: "center",
  },
  goalsContainer: {
    flex: 1,
    marginTop: 16,
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
