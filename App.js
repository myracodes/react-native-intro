import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container1}>
        <Text style={{ color: "blue" }}>Hello, world!</Text>
        <Text style={{ color: "blue" }}>Hello, world!</Text>
        <Text style={{ color: "blue" }}>Hello, world!</Text>
        <Button
          // onPress={onPressAction}
          title="This is a button"
          color="dodgerblue"
          accessibilityLabel="This is a button"
        />
      </View>
      <View style={styles.container2}>
        <Text style={{ color: "blue" }}>Hello, world!</Text>
        <Text style={{ color: "blue" }}>Hello, world!</Text>
        <Text style={{ color: "blue" }}>Hello, world!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "lightgreen",
    alignItems: "flex-end",
  },
});
