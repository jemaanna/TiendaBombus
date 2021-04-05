import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

export default function ProfileScreen({ navigation, route }) {


    const onPressHandler = () => {
        navigation.navigate('Home', { Message: 'message from B' });
        // navigation.goBack();
        // navigation.setParams({ ItemId: 14 });
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                PROFILE SCREEN
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