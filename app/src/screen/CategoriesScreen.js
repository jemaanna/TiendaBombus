import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

export default function CategoriesScreen({ navigation, route }) {

    const onPressHandler = () => {
        navigation.navigate('Categories');
        // navigation.toggleDrawer();
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                CATEGORIES SCREEN
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})