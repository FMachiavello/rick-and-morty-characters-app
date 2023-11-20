import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
