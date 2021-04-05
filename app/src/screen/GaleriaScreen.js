import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, TouchableoOpacity} from 'react-native';


export default function GaleriaScreen({ navigation, route }) {

    const onPressHandler = () => {
        navigation.navigate('Profile');
        navigation.toggleDrawer();
    }

   return (
        <View style={styles.body}>
            <Text style={styles.text}>
                 GALERIA SCREEN
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