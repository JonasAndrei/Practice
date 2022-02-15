import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';

import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/sample1.jpg')} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Jacket for sale</Text>
                <Text style={styles.price}>Php 1500</Text>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    image={require('../assets/avatar.png')}
                    title="John Kriz Lao Sedanza Cabiles"
                    subTitle="5 Listings"
                />  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 17,
        marginVertical: 10,
    }, 
    detailsContainer: {
        padding: 20,
    },
    userContainer: {
        marginVertical: 35,
        marginLeft: 15,
    }
})

export default ListingDetailsScreen;