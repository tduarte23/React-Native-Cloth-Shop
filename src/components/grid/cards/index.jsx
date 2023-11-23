import React from "react";
import { FlatList, View,TouchableOpacity,Text,Image,StyleSheet } from "react-native";
import {Card} from "../../../constants/cards";
import { TagBar } from "../../tagBar";
import { COLORS } from "../../../constants/colors";

export const Cards = () =>{
    
    const renderItem=({item}) =>{
        return(
        <View style={styles.item}>
            <View style={styles.imgWrap}>
            <Image style={styles.img} resizeMode="cover" source={{uri: item.img} } />
            </View>
            <View>
                <Text>
                {`${item.name}`}
                </Text>

            </View>
        </View>)
}

    return(
        <FlatList
        data={Card}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        numColumns={2} 
        />
    )
}

const styles = StyleSheet.create({
    imgWrap:{
        height: '80%',
        width: '100%',
        
        
    },
    img:{
        
        flex: 1,
        borderRadius: 10,
        
    },
    item: {
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        borderRadius: 10,
        flexBasis: 0,
        height: 160
      },
})