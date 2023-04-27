import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import CardListScreen from "./src/screens/ProductListScreen/ProductListScreen";
import NavigationTab from "./src/navigation/NavigationTab/NavigationTab";

export default function App(): JSX.Element {
    const MyTheme = {
        ...DefaultTheme,

        colors: {
            primary: "#1f1f1f",
            background: "#1f1f1f",
            card: "rgb(255, 255, 255)",
            text: "#fff",
            border: "#1f1f1f",
            notification: "#1f1f1f",
        },
    };
    return (
        <NavigationContainer theme={MyTheme}>
            <NavigationTab />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1f1f1f",
        alignItems: "center",
        justifyContent: "center",
    },
});
