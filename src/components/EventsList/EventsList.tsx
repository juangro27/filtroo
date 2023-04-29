import {
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    View,
    RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import eventsService from "../../services/events.service";
import { Event } from "types/event";
import RetryPage from "../../components/RetryPage/RetryPage";

const EventsList = (): JSX.Element => {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [limit, setLimit] = useState<number>(10);
    const [showRetryPage, setShowRetryPage] = useState<boolean>(false);
    const [refreshing, setRefreshing] = React.useState<boolean>(false);

    useEffect(() => {
        getEvents(limit);
    }, [limit]);

    const getEvents = async (limit: number): Promise<void> => {
        try {
            const { data } = await eventsService.getAllEvents(limit);
            const events: Event[] = data.events;
            setEvents(events);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setShowRetryPage(true);
        }
    };

    const loadMore = (): void => {
        let nextCount = limit + 8;
        setLimit(nextCount);
    };

    const handleRetry = (): void => {
        setShowRetryPage(false);
        getEvents(limit);
    };

    const onRefresh = (): void => {
        setRefreshing(true);
        setTimeout(async () => {
            await setLimit(10);
            await getEvents(limit);
            setRefreshing(false);
        }, 1000);
    };

    return (
        <>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#58C6FF"
                />
            ) : showRetryPage ? (
                <RetryPage onRetry={handleRetry} />
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
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    tintColor={"#fff"}
                                />
                            }
                        />
                    ) : (
                        <View style={styles.center}>
                            <Text style={styles.noResultText}>
                                No results...
                            </Text>
                        </View>
                    )}
                </>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
        paddingBottom: 10,
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
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    noResultText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    separator: {
        width: 20,
    },
});

export default EventsList;
