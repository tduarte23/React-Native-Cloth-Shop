import React from "react";
import {Cards} from '../grid/cards/index'
import { View,StyleSheet } from "react-native";

export const Grid =()=>{
    return (
        <View style={styles.container}>

            <Cards />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})