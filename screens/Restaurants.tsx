import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/Menu';

const RestaurantsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Restaurants Screen</Text>
            <ScrollView>
                <RestaurantCard name='Sushi restaurant' />
                <RestaurantCard name='Buger restaurant' />
                <RestaurantCard name='Fine dining restaurant' />
                <RestaurantCard name='Sushi restaurant' />
                <RestaurantCard name='Buger restaurant' />
                <RestaurantCard name='Fine dining restaurant' />
            </ScrollView>

            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:16,
        marginTop:20,
    },
    screenTitle:{
        fontSize:24,
        marginTop:8,
        fontWeight:'bold',
        marginBottom:10
    }
});
export default RestaurantsScreen