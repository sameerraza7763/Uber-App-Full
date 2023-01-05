import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Picup from "./Picup";
import Destination from "./Destination";
import Carselec from "./Carselec";
import Summery from "./Summery";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pick up" component={Picup} />
        <Stack.Screen name="Destination" component={Destination} />
        <Stack.Screen name="Car Selection" component={Carselec} />
        <Stack.Screen name="Summary" component={Summery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
