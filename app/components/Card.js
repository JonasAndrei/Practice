import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        height: 200,
        width: '100%',
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})

export default Card;