import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import React from "react";
import { RootStackParamList } from "../RootStackParams";
import { SafeAreaView } from "react-native-safe-area-context";

type listScreenProp = StackNavigationProp<RootStackParamList, "List">;

const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation<listScreenProp>();
    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
            <Button
                onPress={() => navigation.navigate("List")}
                title="Go to List page"
            />
        </SafeAreaView>
    );
};

export default HomeScreen;