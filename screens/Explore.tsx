import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/Menu';

const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Restaurants</Text>

            <View>
                <Text style={styles.container}>Restaurants Near You</Text>
                <RestaurantCard name='Sushi restaurant'/>
                <RestaurantCard name='Buger restaurant'/>
                <RestaurantCard name='Fine dining restaurant'/>

                <Text style={styles.container}>Most Popular</Text>
                <RestaurantCard name='Sushi restaurant'/>
                <RestaurantCard name='Buger restaurant'/>

            </View>

            <Menu />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 16,
        marginTop:5
    },
    restaurantCard: {
        backgroundColor: '#efefef'
    },
    sectionTitle:{
        fontSize:16,
        marginTop:16,
    },
    screenTitle:{
        fontSize:24,
        marginTop:8,
        fontWeight:'bold'
    }
});


export default ExploreScreen