import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, Button } from "react-native";
import React from "react";
import { RootStackParamList } from "../RootStackParams";
import { SafeAreaView } from "react-native-safe-area-context";

type listScreenProp = StackNavigationProp<RootStackParamList, "Events">;

const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation<listScreenProp>();
    return (
        <SafeAreaView>
            <Text style={{ color: "white" }}>HomeScreen</Text>
            <Button
                onPress={() => navigation.navigate("Events")}
                title="Go to List page"
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
