import { ActivityIndicator, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import eventsService from "../../services/events.service";
import { Event } from "types/event";
import Carousel from "../../components/Carousel/Carousel";

const DetailsScreen = ({
    route,
}: {
    route: { params: { id: string } };
}): JSX.Element => {
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
    console.log(event);
    return (
        <SafeAreaView>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#00ff00"
                />
            ) : (
                <>
                    {event && (
                        <>
                            <Carousel images={event.images} />
                            <Text>{event.name}</Text>
                        </>
                    )}
                </>
            )}
        </SafeAreaView>
    );
};

export default DetailsScreen;
