import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text,StyleSheet, useColorScheme } from 'react-native';
import ExploreScreen from './screens/Explore';
import RestaurantsScreen from './screens/Restaurants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/Profile';
import RestaurantScreen from './screens/Restaurant';

export type RootStackParams = {
	Explore: string;
	Restaurants: string;
	Profile: string;
	Restaurant: string;
}

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {

    const isDarkMode = useColorScheme() === 'dark';


    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName='Explore'>
                <RootStack.Screen name='Explore' component={ExploreScreen}/>
                <RootStack.Screen name='Restaurants' component={RestaurantsScreen}/>
                <RootStack.Screen name='Profile' component={ProfileScreen}/>
				<RootStack.Screen name='Restaurant' component={RestaurantScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}


const style = StyleSheet.create({
    content:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:150,
    }
})