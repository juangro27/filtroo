import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventListScreen from "../../screens/EventListScreen/EventListScreen";
import DetailsScreen from "../../screens/DetailsScreen/DetailsScreen";

const ProductNavigation = (): JSX.Element => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Events"
                component={EventListScreen}
                options={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    title: "",
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: "#fff",
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    title: "",
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: "#fff",
                }}
            />
        </Stack.Navigator>
    );
};

export default ProductNavigation;
