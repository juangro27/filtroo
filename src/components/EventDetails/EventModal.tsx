import React from "react";
import { Modal, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface ModalImageProps {
    visible: boolean;
    images: string[];
    activeIndex: number;
    onClose: () => void;
}

const EventModal = ({
    visible,
    images,
    activeIndex,
    onClose,
}: ModalImageProps): JSX.Element => {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity
                    onPress={onClose}
                    style={styles.closeButton}
                >
                    <View style={styles.closeButtonIcon}>
                        <Icon
                            name="close"
                            color="#1f1f1f"
                            size={28}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: images[activeIndex] }}
                        style={styles.image}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    closeButton: {
        position: "absolute",
        top: 50,
        right: 20,
        zIndex: 1,
    },
    closeButtonIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 15,
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});

export default EventModal;
