import React, { useState } from 'react';
import { 
    Text, 
    View, 
    StyleSheet,  
    Platform, 
    TouchableWithoutFeedback, 
    Modal, 
    Button, 
    FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import PickerItem from './PickerItem';

function AppPicker({
    icon, 
    items, 
    onSelectItem, 
    placeholder, 
    numberOfColumns = 1,
    selectedItem,
    PickerItemComponent = PickerItem, 
    width="100%",
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
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
                { selectedItem ? (
                    <Text style={styles.text}>{selectedItem.label}</Text>
                ) : (
                    <Text style={styles.placeholder}>{placeholder}</Text>
                )}
            
                <MaterialCommunityIcons 
                    name="chevron-down" 
                    style={styles.icon} 
                    color={colors.medium} 
                    size={20} 
                    />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
            <Button title='Close' onPress={() => setModalVisible(false)} />
            <FlatList
                data={items}
                keyExtractor={(item) => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item }) => (
                    <PickerItemComponent
                        item={item}
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item);
                        }}
                    />
                )}
            />
        </Modal>
        </>
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
    // textInput: {
    //     fontSize: 18,
    //     fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    // },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
    }
})

export default AppPicker;