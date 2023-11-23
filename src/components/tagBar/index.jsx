import React from "react";
import { View,FlatList,StyleSheet,TouchableOpacity,Text } from "react-native";
import { Tags } from "../../constants/tags";
import { COLORS } from "../../constants/colors";

export const TagBar = ()=>{

    const renderItem = ({item}) =>(      
        <View style={styles.Container}>  
            <TouchableOpacity onPress={()=> null} style={styles.itemContainer} >
                <Text style={styles.itemText} >{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
    return (
       
            <FlatList
            data={Tags}
            renderItem={renderItem}
            keyExtractor={item=> item.id}
            horizontal
        contentContainerStyle={{
            alignItems: 'center',  flexGrow: 1, justifyContent: 'center',
          }}
          ItemSeparatorComponent={<View style={styles.separator}
                getItemLayout={(data,index)=>({
                    length: 50,
                    offset: 50 * index,
                    index,
                })}
                />}
                showsHorizontalScrollIndicator={false}
            />
        
    )
} 

const styles = StyleSheet.create({
    Container: {
        marginTop: 15,
        backgroundColor: COLORS.CONTRAST['yellow-lower'],
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        padding: 5,
        marginHorizontal: 10,
        
    },
    separator:{
       width: 2
    },
    itemText:{
        fontSize: 20,
        color: 'black'

    }
})