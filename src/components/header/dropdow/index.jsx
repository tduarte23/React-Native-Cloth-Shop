import React,{ useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

import { COLORS } from "../../../constants/colors";
import { TouchableOpacity, Text , Image, View, StyleSheet,FlatList, } from "react-native";

import {Location} from "../../../constants/data"




export const Dropdown = ({Locations}) => {

    const [selectLocation, setSelectLocation] = useState('Select Location');
    const [showDropdown, setShowDropdown] = useState(false);
    

    const onSelectLocation = () => {
        
        setShowDropdown(!showDropdown);
        
    }

    const renderItem = ({item}) =>(        
        <TouchableOpacity onPress={()=> onLocation(item.name)} style={styles.itemContainer} >
            <Text >{item.name}</Text>
        </TouchableOpacity>
    )

    const onLocation = (name)=>{
        setSelectLocation(name);
        setShowDropdown(!showDropdown);
        
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSelectLocation } style={styles.dropdown} >
                    <Text style={styles.dropdownText}>
                        {selectLocation}
                    </Text>
                    <Ionicons name="arrow-down-outline" size={20} color={'white'}  />
            </TouchableOpacity>
            {showDropdown ? <View style={styles.listContainer}>
                <FlatList 
                data={Location}
                renderItem={renderItem}
                keyExtractor={item=> item.id}
                ItemSeparatorComponent={<View style={styles.separator}
                getItemLayout={(data,index)=>({
                    length: 50,
                    offset: 50 * index,
                    index,
                })}
                />}
                />
            </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 7,
      zIndex:0
    },
    dropdown : {
        width : '80%',
        height : 45,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor : COLORS.PRIMARY['200'],
        
        paddingHorizontal: 10,
        alignSelf: 'center',
        zIndex: 0
        
       
    },
    dropdownText:{
        fontSize: 13,
        color: COLORS.TEXT['white'],
        fontWeight:"bold",

    },
    icon :{},
    listContainer: {
        width: '80%',
        marginHorizontal: 20,
        
        borderRadius: 20,
        backgroundColor: COLORS.TEXT['white'],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        alignSelf: 'center',
        position:'absolute',
        zIndex: 3, // works on ios
        elevation: 3, // works on android
        marginTop: 69,
    },
    itemContainer:{
        backgroundColor: COLORS.TEXT['white'],
        padding: 10,
        borderRadius: 20,
        zIndex: 100,
    },
    separator:{
        height: 1,
        backgroundColor: 'black'
    }
  });