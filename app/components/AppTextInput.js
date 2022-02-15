import React from 'react';
import { Text, View, StyleSheet, TextInput, Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function AppTextInput({icon, width='100%', ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && (
            <MaterialCommunityIcons 
                name={icon} 
                style={styles.icon} 
                color={colors.medium} 
                size={20} 
                style={styles.icon}
        />
            )}
            <TextInput 
                placeholderTextColor = "#000"
                style={styles.textInput} 
                {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;