import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import moment from "moment";

export default function AccelerationItem({ item }) {
    const noImg =
        "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png";

    return (
        <View style={styles.rowContainer}>
            <View style={styles.rowBgColor}>
                <Image
                    source={{ uri: item.banner_url ? item.banner_url : noImg }}
                    style={styles.imageStyle}
                />

                <View style={styles.contentBgColor}>
                    <Text style={styles.rowName}>{item.name}</Text>
                    <Text style={styles.rowLocation}>{item.location}</Text>
                    <Text style={styles.rowDate}>
                        {moment(item.subscription_finish_at).format(
                            "DD/MM/YYYY"
                        )}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#CECED2"
    },
    rowBgColor: {
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    imageStyle: {
        width: 120,
        height: 100,
        resizeMode: "stretch"
    },
    contentBgColor: {
        height: 100,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        borderLeftWidth: 1,
        borderLeftColor: "#CECED2"
    },
    rowName: {
        color: "#212121",
        fontSize: 20
    },
    rowLocation: {
        color: "#7800FF",
        fontSize: 15
    },
    rowDate: {
        color: "#212121",
        fontSize: 15
    }
});
