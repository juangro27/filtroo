import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "screens/RootStackParams";
import { RouteProp } from "@react-navigation/native";

const DetailsScreen = ({ route }: any): JSX.Element => {
    console.log(route.params);
    return (
        <SafeAreaView>
            <Text>DetailsScresdsen</Text>
        </SafeAreaView>
    );
};

export default DetailsScreen;
