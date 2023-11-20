import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { onAuthStateChanged } from "firebase/auth";
import AppNavigator from "./src/components/AppNavigator";
import LoginNavigator from "./src/components/LoginNavigator";
import { FIREBASE_AUTH } from "./src/config/firebase";

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
    return () => unsuscribe();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <LoginNavigator />}
      </NavigationContainer>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
