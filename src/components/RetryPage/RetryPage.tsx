import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
    onRetry: () => void;
};

const RetryPage = ({ onRetry }: Props): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                An error has occurred. Please try the request again.
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onRetry}
            >
                <Text style={styles.buttonText}>Try again</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingHorizontal: 40,
    },
    message: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#58C6FF",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default RetryPage;
