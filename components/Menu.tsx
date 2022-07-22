import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

const Menu = () => {
    const navegation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navigation</Text>
            <TouchableOpacity
                onPress={() => {
                     navegation.navigate('Explore')
                    //navegation.push('Explore')

                }}
            >
                <Text style={styles.link}>Explore</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navegation.navigate('Restaurants')
                }} 
            >
                <Text style={styles.link}>Restaurants</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navegation.navigate('Profile')
                }}
            >
                <Text style={styles.link}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        padding: 20,
        marginBottom: 5,
    },
    link:{
        fontSize:16,
        marginTop:4,
        color: '#007ade',
        marginBottom:5,
    },
    title:{
        fontSize:18,
        marginBottom:10,
        fontWeight:'bold'
    }
})
export default Menu