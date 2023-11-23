import React, { useState } from "react"
import { View,StyleSheet,Text } from "react-native"
import { COLORS } from "../../constants/colors"
import { Avatar } from "./avatar/avatar"
import { SearchButton } from "./searchButton"
import { Dropdown } from "./dropdow"

export const Header = () =>  {
  const [showSearch, setShowSearch] =useState(false);

 const onClick = () =>{
 
  setShowSearch(!showSearch);
  return(showSearch)
 }


return(
    <View style={styles.container}>
        <Avatar />
        {showSearch ? <Dropdown/> : null}
        <SearchButton onClick={onClick} />      
    </View>
)
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      flexDirection: "row",
      backgroundColor: COLORS.PRIMARY[600],
      alignItems: 'center',
      justifyContent: 'space-around',
      zIndex: 4,
    },
  });
  