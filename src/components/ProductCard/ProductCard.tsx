import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "src/types/product";
import { truncateString } from "../..//utils/truncateString";

interface Props {
    product: Product;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgCard: {
        backgroundColor: "#1f1f1f",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
    },
    image: {
        bottom: 2,
        right: 2,
        width: 70,
        height: 70,
    },
    name: {
        color: "#fff",
        paddingTop: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    number: {
        position: "absolute",
        top: 10,
        right: 10,
        fontSize: 11,
        color: "#fff",
    },
});
const ProductCard = ({ product }: Props) => {
    const goToProduct = () => {
        console.log(`Es pokemon ${product.title}`);
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={goToProduct}>
                <View style={styles.card}>
                    <View style={styles.spacing}>
                        <View style={styles.bgCard}>
                            <Image
                                source={{ uri: product.image }}
                                style={styles.image}
                            />
                            <Text style={styles.name}>
                                {truncateString(product.title)}
                            </Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default ProductCard;
