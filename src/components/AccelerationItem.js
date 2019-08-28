import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment'

const noImg = 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png';
export default function AccelerationItem({ item }) {
    return (
        <View style={styles.rowContainer}>
            <View style={styles.rowBgColor}>
                <Image
                    source={{ uri: (item.banner_url ? item.banner_url : noImg) }}
                    style={styles.imageStyle}
                />

                <View style={styles.contentBgColor}>
                    <Text style={styles.rowName}>{item.name}</Text>
                    <Text style={styles.rowLocation}>{item.location}</Text>
                    <Text style={styles.rowDate}>{moment(item.subscription_finish_at).format('DD/MM/YYYY')}</Text>
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
        alignItems: "center",
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    contentBgColor: {
        height: 100,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        borderLeftWidth: 1,
        borderLeftColor: "#CECED2",
    },
    rowName: {
        color: "#212121",
        fontSize: 20,
    },
    rowLocation: {
        color: "#7800ff",
        fontSize: 17,
    },
    rowDate: {
        color: "#212121",
        fontSize: 17,
    },
});
