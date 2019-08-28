import React from 'react';
import { View, Image, StyleSheet, PixelRatio } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            {/* <Image style={styles.image} source={require("../assets/images/logo.png")} /> */}
            <Image style={styles.image} source={{ uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        width: "100%",
        borderBottomColor: '#7800ff',
        borderBottomWidth: 5 / PixelRatio.get()
    },
    image: {
        height: 100,
        width: 250,
        // resizeMode: "center",
    }
});

export default Header
