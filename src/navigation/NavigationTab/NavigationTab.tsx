import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import CardListScreen from "../../screens/ListScreen/ListScreen";
import DetailsScreen from "../../screens/DetailsScreen/DetailsScreen";

const NavigationTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="List"
                component={CardListScreen}
            />
        </Tab.Navigator>
    );
};

export default NavigationTab;
