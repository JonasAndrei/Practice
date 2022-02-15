import React from 'react';
import { 
    Image, 
    View, 
    StyleSheet, 
    Text, 
    TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={'#f8f4f4'} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.detailsContainer}>
                        <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        {subTitle && <Text numberOfLines={2} style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
    },
    title: {
        fontWeight: '500',
        fontSize: 17,
    },
    subTitle: {
        color: colors.medium
    }
})
export default ListItem;