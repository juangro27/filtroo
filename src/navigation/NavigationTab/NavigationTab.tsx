import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import ProductList from "../../screens/ProductListScreen/ProductListScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";

const NavigationTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
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
                name="List"
                component={ProductList}
                options={{
                    tabBarLabel: "List",
                    tabBarInactiveTintColor: "#1f1f1f",
                    tabBarActiveTintColor: "#58C6FF",

                    tabBarIcon: ({ focused, size }) => (
                        <Icon
                            name="format-list-bulleted"
                            color={focused ? "#58C6FF" : "#1f1f1f"}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default NavigationTab;
