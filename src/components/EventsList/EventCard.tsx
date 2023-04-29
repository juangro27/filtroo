import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { truncateString } from "../../utils/truncateString";
import { RootStackParamList } from "screens/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type listScreenProp = StackNavigationProp<RootStackParamList, "Details">;

const EventCard = ({ event }: any): JSX.Element => {
    const navigation = useNavigation<listScreenProp>();
    const goToEvent = () => {
        navigation.navigate("Details", { id: event._id });
    };
    const hostsList = (hosts: string[]): string => {
        return hosts.reduce((acc: string, elm: string, index: number) => {
            return acc + (index + 1 === event.hosts.length ? elm : `${elm}, `);
        }, "");
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={goToEvent}>
                <View style={styles.card}>
                    <View style={styles.spacing}>
                        <View style={styles.bgCard}>
                            <Image
                                source={{ uri: event.images[0] }}
                                style={styles.image}
                            />
                            <Text style={styles.name}>
                                {truncateString(event.name, 19)}
                            </Text>
                            <Text style={styles.hosts}>
                                Hosts:
                                {truncateString(hostsList(event.hosts), 20)}
                            </Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        height: 180,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgCard: {
        borderRadius: 12,
        flex: 1,
    },
    image: {
        bottom: 2,
        width: "100%",
        borderRadius: 12,
        height: 100,
    },
    name: {
        color: "#fff",
        paddingTop: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    hosts: {
        color: "#fff",
        paddingTop: 4,
        fontSize: 10,
        fontWeight: "bold",
    },
    number: {
        position: "absolute",
        top: 10,
        right: 10,
        fontSize: 11,
        color: "#fff",
    },
});

export default EventCard;
