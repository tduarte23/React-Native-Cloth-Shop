import React from "react"
import { TouchableOpacity, Image,StyleSheet } from "react-native"

export const Avatar = () =>{
    return(
        <TouchableOpacity onPress={()=> null} style={styles.container}>
            <Image source={require('../../../assets/yabuki.jpg')} 
                   style={styles.avatar} 
                   resizeMode="cover"
            />            
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    container:{
        
    }
  });