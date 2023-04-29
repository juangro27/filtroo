import {
    ActivityIndicator,
    ScrollView,
    RefreshControl,
    StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import EventDescription from "./EventDescription";
import eventsService from "../../services/events.service";
import { Event } from "../../types/event";
import RetryPage from "../../components/RetryPage/RetryPage";

const EventDetails = (props: { id: string }): JSX.Element => {
    const { id } = props;
    const [event, setEvent] = useState<Event>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [showRetryPage, setShowRetryPage] = useState<boolean>(false);
    const [refreshing, setRefreshing] = React.useState<boolean>(false);

    useEffect(() => {
        getEvent();
    }, []);

    const getEvent = async (): Promise<void> => {
        try {
            const { data }: { data?: Event } = await eventsService.getEvent(id);
            setEvent(data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setShowRetryPage(true);
        }
    };

    const handleRetry = (): void => {
        setShowRetryPage(false);
        getEvent();
    };

    const onRefresh = (): void => {
        setRefreshing(true);
        setTimeout(() => {
            getEvent();
            setRefreshing(false);
        }, 1000);
    };
    return (
        <>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#58C6FF"
                    style={styles.spinner}
                />
            ) : showRetryPage ? (
                <RetryPage onRetry={handleRetry} />
            ) : (
                <>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={styles.container}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                tintColor={"#fff"}
                            />
                        }
                    >
                        {event && <EventDescription event={event} />}
                    </ScrollView>
                </>
            )}
        </>
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
    spinnerRefresh: {
        paddingBottom: 0,
        height: 0,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default EventDetails;
