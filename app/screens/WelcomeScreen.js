import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';


function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} blurRadius={6} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="Login" color='secondary'/>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }, 
    logo: {
        width: 100,
        height: 100,
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ECDC4"
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
})

export default WelcomeScreen;