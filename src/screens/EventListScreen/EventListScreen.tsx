import { Platform, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EventsList from "../../components/EventsList/EventsList";

const EventListScreen = (): JSX.Element => {
    return (
        <SafeAreaView
            edges={["top"]}
            style={styles.container}
        >
            <EventsList />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: Platform.OS === "android" ? 0 : 0,
    },
});

export default EventListScreen;
