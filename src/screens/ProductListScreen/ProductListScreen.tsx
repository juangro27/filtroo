import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Product } from "src/types/product";
import productService from "../../services/product.service";
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
                }}
            >
                Our Products
            </Text>
            <ProductsList />
        </SafeAreaView>
    );
};

export default ListScreen;
