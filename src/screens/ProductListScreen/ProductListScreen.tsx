import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductsList from "../../components/ProductsList/ProductsList";

const ListScreen = (): JSX.Element => {
    return (
        <SafeAreaView>
            <Text
                style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 24,
                    marginTop: 10,
                    marginBottom: 10,
                    color: "#58C6FF",
                }}
            >
                Our Products
            </Text>
            <ProductsList />
        </SafeAreaView>
    );
};

export default ListScreen;
