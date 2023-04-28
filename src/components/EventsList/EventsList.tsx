import { Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import eventsService from "../../services/events.service";
import { Event } from "types/event";

const EventsList = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [limit, setLimit] = useState<number>(8);
    useEffect(() => {
        getEvents(limit);
    }, [limit]);

    const getEvents = async (limit: number): Promise<void> => {
        try {
            const { data } = await eventsService.getAllEvents({
                limit: limit.toString(),
            });
            const events: Event[] = data.events;
            setEvents(events);
            setIsLoading(false);
        } catch (err) {
            throw err;
        }
    };

    const loadMore = (): void => {
        let nextCount = limit + 8;
        setLimit(nextCount);
    };

    return (
        <>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#58C6FF"
                />
            ) : (
                <>
                    {events.length >= 1 ? (
                        <FlatList
                            data={events}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(event) => event._id}
                            renderItem={({ item }) => (
                                <EventCard event={item} />
                            )}
                            contentContainerStyle={styles.flatListContainer}
                            onEndReached={() => {
                                limit <= events.length && loadMore();
                            }}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={
                                limit <= events.length ? (
                                    <ActivityIndicator
                                        size="large"
                                        color="#58C6FF"
                                        style={styles.spinner}
                                    />
                                ) : null
                            }
                        />
                    ) : (
                        <Text>No results...</Text>
                    )}
                </>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
        paddingBottom: 30,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
    endResults: {
        marginTop: 20,
        marginBottom: 40,
        color: "#58C6FF",
        textAlign: "center",
        fontSize: 20,
    },
});

export default EventsList;
