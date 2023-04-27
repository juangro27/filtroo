import { Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "src/types/product";
import productService from "../../services/product.service";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const styles = StyleSheet.create({
        flatListContainer: {
            paddingHorizontal: 5,
        },
    });

    const getImages = async (): Promise<void> => {
        try {
            const { data } = await productService.getProducts();
            const products: Product[] = data;
            setProducts(products);
            setIsLoading(false);
        } catch (err) {
            throw err;
        }
    };
    useEffect(() => {
        getImages();
    }, []);
    return (
        <>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#00ff00"
                />
            ) : (
                <>
                    {products.length >= 1 ? (
                        <FlatList
                            data={products}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(product) => String(product.id)}
                            renderItem={({ item }) => (
                                <ProductCard product={item} />
                            )}
                            contentContainerStyle={styles.flatListContainer}
                        />
                    ) : (
                        <Text>No results...</Text>
                    )}
                </>
            )}
        </>
    );
};

export default ProductsList;
