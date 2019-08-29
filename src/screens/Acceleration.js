import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import AccelerationItem from '../components/AccelerationItem';
import AccelerationsData from '../services/accelerations.data';
import Header from '../components/Header';

const _keyExtractor = (item, index) => item.slug;
const _renderItem = ({ item }) => <AccelerationItem item={item} />

export default function Acceleration() {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Acelereções</Text>
            <View>
                <FlatList
                    data={AccelerationsData}
                    keyExtractor={({ item }) => <AccelerationItem item={item} />}
                    renderItem={item => item.slug}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        color: '#7800ff',
    },
});
