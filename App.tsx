import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

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
            <StatusBar style="light" />
            <Navigation />
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
