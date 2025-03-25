import {View, StyleSheet, Button} from 'react-native';
import React from 'react';
import {Link, useLocalSearchParams} from 'expo-router';


export default function HomeScreen() {
    return (
        <View style = {styles.header}>
            <View style = {styles.containerRow}>
                <Link href = "../PermissionButton" asChild>
                    <Button title = "Location"></Button>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 40
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9
    }
});