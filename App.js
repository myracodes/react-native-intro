import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "black" }}>Youpi ça marche :D</Text>
      <StatusBar style="auto" />
      <Text style={{ color: "yellow" }}>Et un autre !</Text>
      <Button
        // onPress={onPressAction}
        title="Click me"
        color="#841584"
        accessibilityLabel="This is a test button"
        s
      />
      <Text style={{ color: "#FFF" }}>Et encore un !</Text>
      <Text style={{ color: "#FFF" }}>Et encore un !</Text>
      <Text style={{ color: "#FFF" }}>Et encore un !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f",
    alignItems: "center",
    justifyContent: "center",
  },
});
