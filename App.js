import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const names = ["Abdul", "Sagheer", "Saqib", "Sadiq"];
  return (
    <View style={styles.container}>
      <Text>Hello ABDUL</Text>
      <Welcome name="Hii" />
    </View>
  );
}

const Welcome = (props) => {
  <View>
    <Text>Hello {props.name}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
