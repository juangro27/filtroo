import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardListView from "./src/views/CardListView/CardListView";

export default function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Hola</Text>
            <StatusBar style="auto" />
            <CardListView />
        </View>
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
