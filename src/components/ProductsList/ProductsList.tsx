import { Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "src/types/product";
import productService from "../../services/product.service";
import ProductCard from "../ProductCard/ProductCard";

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
});

const ProductsList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(8);
    useEffect(() => {
        getImages(count);
    }, [count]);

    const getImages = async (count: number): Promise<void> => {
        try {
            const { data } = await productService.getProducts(count);
            const products: Product[] = data;
            setProducts(products);
            setIsLoading(false);
        } catch (err) {
            throw err;
        }
    };

    const loadMore = (): void => {
        let nextCount = count + 8;
        setCount(nextCount);
        console.log(nextCount);
    };

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
                            onEndReached={() => {
                                count <= products.length && loadMore();
                            }}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={
                                <ActivityIndicator
                                    size="large"
                                    color="#00ff00"
                                    style={styles.spinner}
                                />
                            }
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
