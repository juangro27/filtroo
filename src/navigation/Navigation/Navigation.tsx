import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import EventNavigation from "../EventNavigation/EventNavigation";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";

const Navigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeMenu"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Icon
                            name="home"
                            color={focused ? "#58C6FF" : "#1f1f1f"}
                            size={size}
                        />
                    ),
                    tabBarLabel: "Home",
                    tabBarInactiveTintColor: "#1f1f1f",
                    tabBarActiveTintColor: "#58C6FF",
                }}
            />

            <Tab.Screen
                name="EventsMenu"
                component={EventNavigation}
                options={{
                    tabBarLabel: "Events",
                    tabBarInactiveTintColor: "#1f1f1f",
                    tabBarActiveTintColor: "#58C6FF",

                    tabBarIcon: ({ focused, size }) => (
                        <Icon
                            name="event"
                            color={focused ? "#58C6FF" : "#1f1f1f"}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigation;
