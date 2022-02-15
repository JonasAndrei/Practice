import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeButton}>
                <MaterialCommunityIcons name='close' color='white' size={30} />
            </View>
            <View style={styles.deleteButton}>
            <MaterialCommunityIcons name='trash-can-outline' color='white' size={30} />
            </View>
            <Image source={require('../assets/chair.jpg')} style={styles.image}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    closeButton: {
        left: 20,
        top: 40,
        position: 'absolute',
    },
    deleteButton: {
        right: 20,
        top: 40,
        position: 'absolute',
    },
})
export default ViewImageScreen;