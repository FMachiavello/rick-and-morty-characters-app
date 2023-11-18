import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../Screens/Home";
import Screen2 from "../Screens/Search";
import Screen3 from "../Screens/Album";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = "";
            switch (route.name) {
              case "Home":
                iconName = "home-outline";
                break;
              case "Search":
                iconName = "search-outline";
                break;
              case "Album":
                iconName = "albums-outline";
                break;
            }
            return <Icon name={iconName} size={25} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Search" component={Screen2} />
        <Tab.Screen name="Album" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
