import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Carousel from "./Carousel";
import { Event } from "types/event";
import { truncateString } from "../../utils/truncateString";

interface EventDescriptionProps {
    event: Event;
}
const EventDescription = ({ event }: EventDescriptionProps): JSX.Element => {
    const [fullDescription, setFullDescription] = useState<boolean>(false);
    const maxCharacters: number = 200;

    return (
        <View>
            <Carousel images={event.images} />
            <View style={styles.header}>
                <Text style={styles.eventTitle}>{event.name}</Text>
                <Text style={styles.price}>
                    {event.price === 0 ? "FREE" : `${event.price} €`}
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.title}>Description</Text>
                <View style={styles.infoContainer}>
                    <Text>
                        {truncateString(
                            event.description,
                            fullDescription
                                ? event.description.length
                                : maxCharacters
                        )}
                    </Text>
                    {event.description.length > maxCharacters && (
                        <Text
                            onPress={() => {
                                setFullDescription(!fullDescription);
                            }}
                            style={styles.descriptionSize}
                        >
                            {fullDescription ? "   See less" : "   See more"}
                        </Text>
                    )}
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.title}>Address</Text>
                <View style={styles.infoContainer}>
                    <Text>
                        <Text style={styles.bold}>Street: </Text>
                        {event.address}
                    </Text>
                    <Text>
                        <Text style={styles.bold}>City: </Text>
                        {event.city}
                    </Text>
                    <Text>
                        <Text style={styles.bold}>Country: </Text>
                        {event.country}
                    </Text>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.title}>Hosts:</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.bold}>
                        {truncateString(
                            event.hosts.reduce(
                                (acc: string, elm: string, index: number) => {
                                    return (
                                        acc +
                                        (index + 1 === event.hosts.length
                                            ? elm
                                            : `${elm}, `)
                                    );
                                },
                                ""
                            ),
                            20
                        )}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    price: {
        color: "#fff",
        fontSize: 21,
        fontWeight: "bold",
    },
    eventTitle: {
        color: "#fff",
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "center",
        marginRight: 20,
        maxWidth: "85%",
    },
    descriptionSize: {
        paddingRight: 40,
        textAlign: "right",
        fontSize: 16,
        fontWeight: "bold",
    },
    sectionContainer: {
        marginTop: 10,
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    infoContainer: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
    },
    bold: {
        fontWeight: "bold",
    },
});

export default EventDescription;
