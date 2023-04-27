import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import CardListScreen from "./src/screens/ProductListScreen/ProductListScreen";
import NavigationTab from "./src/navigation/NavigationTab/NavigationTab";

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            {/* <NavigationStack /> */}
            <NavigationTab />
        </NavigationContainer>
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
// interface Props {
//     firstname?: string; //Propiedad opcional
//     lastname: string;
// }

// export default function AppScreen({ firstname = "Pepa", lastname }: Props) {
// }
