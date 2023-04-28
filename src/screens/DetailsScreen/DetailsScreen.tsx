import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import eventsService from "../../services/events.service";
import { Event } from "types/event";
import EventDescription from "../../components/EventDescription/EventDescription";

const DetailsScreen = ({ route }: any) => {
    const { id } = route.params;
    const [event, setEvent] = useState<Event>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getEvent();
    }, []);

    const getEvent = async (): Promise<void> => {
        try {
            const { data }: { data?: Event } = await eventsService.getEvent(id);
            if (data) {
                setEvent(data);
                setIsLoading(false);
            } else {
                //ERROR DE CARGA
            }
        } catch (err) {
            throw err;
        }
    };
    return (
        <SafeAreaView edges={["top"]}>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#58C6FF"
                    style={styles.spinner}
                />
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.container}
                >
                    {event && <EventDescription event={event} />}
                </ScrollView>
            )}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    spinner: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default DetailsScreen;
