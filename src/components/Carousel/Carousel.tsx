import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import EventModal from "../../components/EventModal/EventModal";

interface CarouselProps {
    images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((activeSlide + 1) % images.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [activeSlide, images]);

    const handlePrevSlide = () => {
        setActiveSlide(activeSlide === 0 ? images.length - 1 : activeSlide - 1);
    };

    const handleNextSlide = () => {
        setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1);
    };

    const handleImagePress = (index: number) => {
        setActiveSlide(index);
        setModalVisible(true);
        console.log(modalVisible);
    };
    return (
        <View style={styles.carouselContainer}>
            <View style={styles.buttonsContainerLeft}>
                <Icon
                    onPress={handlePrevSlide}
                    name="keyboard-arrow-left"
                    color={"#fff"}
                    size={32}
                />
            </View>
            <View style={styles.buttonsContainerRight}>
                <Icon
                    onPress={handleNextSlide}
                    name="keyboard-arrow-right"
                    color={"#fff"}
                    size={32}
                />
            </View>
            {images.map((img, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.slideContainer,
                        index === activeSlide ? styles.activeSlide : null,
                    ]}
                    onPress={() => handleImagePress(index)}
                >
                    <View
                        style={[
                            styles.slideContainer,
                            index === activeSlide ? styles.activeSlide : null,
                        ]}
                    >
                        <Image
                            source={{ uri: img }}
                            style={styles.image}
                        />
                    </View>
                </TouchableOpacity>
            ))}

            <EventModal
                images={images}
                visible={modalVisible}
                activeIndex={activeSlide}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        position: "relative",
        height: 250,
    },
    buttonsContainerLeft: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        zIndex: 2,
    },
    buttonsContainerRight: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        zIndex: 2,
    },
    buttonsContainer: {},
    slideContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
    },
    activeSlide: {
        zIndex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
});

export default Carousel;
