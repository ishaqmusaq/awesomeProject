import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./src/screens/ListScreen";
import InfoScreen from "./src/screens/InfoScreen";
import {
  FontAwesome,
  EvilIcons,
  Fontisto,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen
          options={{
            title: "Discover",

            headerTitleAlign: "center",
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <Fontisto name="nav-icon-grid-a" size={24} color="red" />
              </View>
            ),

            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <EvilIcons name="search" size={30} color="red" />
              </View>
            ),
          }}
          name="ListScreen"
          component={ListScreen}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="InfoScreen"
          component={InfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});