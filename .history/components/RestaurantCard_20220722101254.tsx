import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    name: string;
	onPress: ()=> void
}

const RestaurantCard: React.FC<Props> = ({name, onPress}) => {
  return (
    <TochableOpa
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#efefef',
        padding:15,
        marginBottom:5,
    }
})
export default RestaurantCard