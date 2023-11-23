import { TouchableOpacity, View,StyleSheet,TextInput } from "react-native";
import React ,{useState} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from "../../../constants/colors";

export const SearchButton = ({onClick}) => {

    const [showForm, setShowForm] = useState(false);

    const handleClick = () =>{
        var test = onClick();
        setShowForm(test);
    }
    return(
        <View style={styles.sepa}>
            {showForm ? <TextInput style={styles.search} /> : null}
            <View style={styles.container}>
                <TouchableOpacity style={styles.view} onPress={() => handleClick()
                }>     
                    <Ionicons name="search" size={25} color={COLORS.TEXT['white']}  />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      
      width: 50,
      height: 50,
      borderRadius: 15,
      backgroundColor: COLORS.PRIMARY['300'],
      alignItems:"center",
      
      justifyContent:"center",
    },
    search:{
        backgroundColor: 'white',
        width: '60%',
        borderRadius: 15,
        marginRight: 14
        
    },
    sepa:{
        
        flexDirection:'row'
    }
  });