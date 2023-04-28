import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventListScreen from "../../screens/EventListScreen/EventListScreen";
import DetailsScreen from "../../screens/DetailsScreen/DetailsScreen";
import { RootStackParamList } from "screens/RootStackParams";

const ProductNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Events"
                component={EventListScreen}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default ProductNavigation;
