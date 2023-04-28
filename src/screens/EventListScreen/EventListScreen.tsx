import { Text, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EventsList from "../../components/EventsList/EventsList";

const EventListScreen = (): JSX.Element => {
    return (
        <SafeAreaView
            style={{
                paddingBottom: Platform.OS === "android" ? 30 : 0,
            }}
        >
            <Text
                style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 24,
                    marginTop: 10,
                    marginBottom: 10,
                    color: "#58C6FF",
                }}
            >
                Our Events
            </Text>
            <EventsList />
        </SafeAreaView>
    );
};

export default EventListScreen;
