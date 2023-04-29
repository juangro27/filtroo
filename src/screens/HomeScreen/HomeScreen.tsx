import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, Button, Image, StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { RootStackParamList } from "../RootStackParams";
import { SafeAreaView } from "react-native-safe-area-context";
const background = require("../../../assets/home.jpg");
const logo = require("../../../assets/logo.png");
type listScreenProp = StackNavigationProp<RootStackParamList, "Events">;

const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation<listScreenProp>();
    return (
        <SafeAreaView edges={["top"]}>
            <View style={styles.container}>
                <Image
                    source={background}
                    style={styles.background}
                    resizeMode="cover"
                />
                <Image
                    source={logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.sloganContainer}>
                    <Text style={styles.slogan}>
                        Find your next concert adventure.
                    </Text>
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate("EventsMenu")}
                    >
                        <Text style={styles.buttonColor}>Explore</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        position: "absolute",
        zIndex: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
    },
    logo: {
        position: "absolute",
        top: "20%",
        height: 50,
    },
    sloganContainer: {
        backgroundColor: "rgba(31,31,31,0.7)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    slogan: {
        color: "#58C6FF",
        fontSize: 18,
        fontWeight: "bold",
        padding: 20,
    },
    button: {
        backgroundColor: "#58C6FF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
    },
    buttonColor: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default HomeScreen;
