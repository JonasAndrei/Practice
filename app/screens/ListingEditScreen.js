import React, { useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import FormImagePicker from '../components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "#ff6464", icon: "lamp"},
    { label: "Clothing", value: 2, backgroundColor: '#ff8e00', icon: 'car'},
    { label: "Camera", value: 3, backgroundColor: '#ffe400', icon: 'camera'},
    { label: "Games", value: 4, backgroundColor: '#77d970', icon: 'cards'},
    { label: "Clothing", value: 5, backgroundColor: '#54A49F', icon: 'shoe-heel'},
    { label: "Sports", value: 6, backgroundColor: '#548CFF', icon: 'basketball'},
    { label: "Camera", value: 7, backgroundColor: '#1C6DD0', icon: 'headphones'},
    { label: "Books", value: 8, backgroundColor: '#B983FF', icon: 'book-open-variant'},
    { label: "Other", value: 9, backgroundColor: '#92A9BD', icon: 'application'},
];

function ListingEditScreen() {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;
        const {coords: { latitude, longitude}} = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });

    }

    useEffect(() => {
        getLocation();
    }, [])

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >   
                <FormImagePicker name="images" />
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField 
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    numberOfColumns={3}
                    name="category"
                    placeholder="Category"
                    PickerItemComponent={CategoryPickerItem}
                    width="50%"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})
export default ListingEditScreen;