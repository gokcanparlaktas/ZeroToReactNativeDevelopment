import { StyleSheet, View, Text, Pressable } from "react-native";

function CafeItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.cafeItem}>
        <Text style={styles.cafeName}>{props.name}</Text>
        <Text style={styles.cafeDetail}>Good sides: {props.pros}</Text>
        <Text style={styles.cafeDetail}>Bad sides: {props.cons}</Text>
      </View>
    </Pressable>
  );
}

export default CafeItem;

const styles = StyleSheet.create({
  cafeItem: {
    marginVertical: 8,
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#fffaf3",
    borderWidth: 1,
    borderColor: "#d8cbb8",
  },
  cafeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5a3e2b",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e6dccf",
    paddingBottom: 6,
  },
  cafeDetail: {
    color: "#6b4f3a",
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 20,
  },
});
