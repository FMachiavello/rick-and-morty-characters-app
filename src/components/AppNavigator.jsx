import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../Screens/Home";
import Screen2 from "../Screens/Search";
import Screen3 from "../Screens/Album";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
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
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Screen1} />
      <Tab.Screen name="Search" component={Screen2} />
      <Tab.Screen name="Profile" component={Screen3} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
