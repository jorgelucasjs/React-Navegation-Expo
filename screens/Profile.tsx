import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text>Name: Jorge Lucas</Text>
       <TouchableOpacity><Text>Edit Profile</Text></TouchableOpacity> 
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        padding:16,
        //marginTop:20,
    },
    screenTitle:{
        fontSize:24,
        marginTop:8,
        fontWeight:'bold'
    }
});

export default ProfileScreen