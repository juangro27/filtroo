import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import React from "react";
import { RootStackParamList } from "../RootStackParams";

type listScreenProp = StackNavigationProp<RootStackParamList, "List">;

const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation<listScreenProp>();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                onPress={() => navigation.navigate("List")}
                title="Go to List page"
            />
        </View>
    );
};

export default HomeScreen;
