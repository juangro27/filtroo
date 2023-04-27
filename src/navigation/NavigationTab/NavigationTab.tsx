import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import ProductList from "../../screens/ProductListScreen/ProductListScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NavigationTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="home"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="List"
                    component={ProductList}
                    options={{
                        tabBarLabel: "List",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="format-list-bulleted"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default NavigationTab;
