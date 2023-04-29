import EventDetails from "../../components/EventDetails/EventDetails";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = ({ route }: any): JSX.Element => {
    const { id } = route.params;

    return (
        <SafeAreaView edges={["top"]}>
            <EventDetails id={id} />
        </SafeAreaView>
    );
};

export default DetailsScreen;
