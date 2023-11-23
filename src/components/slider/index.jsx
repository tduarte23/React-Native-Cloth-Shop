import React from "react";
import { FlatList, View,TouchableOpacity,Text,Image,StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const Slider = ({items}) => {

    const keyExtractor = (item) => item.id;
    const renderItem = ({item}) =>{
        
        return (        
     <View style={styles.container}>
        <View>
            <Image style={styles.img} source={{uri: item.image}} />
        </View>
        <Text style={styles.text}>{`${item.name}`}</Text>
     </View>
    )}
    return(
        <View style={styles.wrap}>
        <FlatList 
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{
            alignItems: 'center',  flexGrow: 1, justifyContent: 'center',
          }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={styles.separator}
        getItemLayout={(data,index)=>({
            length: 50,
            offset: 50 * index,
            index,
        })}
        />}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    wrap:{
        marginHorizontal: 6
    },
    container :{
        marginTop: 5,
        backgroundColor: COLORS.PRIMARY['400'],
        position: "relative",
        borderWidth: 1,
        gap: 15,
        borderRadius: 15,
        borderColor: 'white',

    },
    img:{
        height : 130,
        width :350,
        borderRadius: 15,
        marginLeft: 5
    },
    text:{
        color: 'white',
        fontSize: 24,
        position: 'absolute',
        top: 30,
        left: 20
    },
    separator: {
        width: 15
    }
});