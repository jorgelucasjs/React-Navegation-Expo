import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

type PROPS = NativeStackNavigationProp<RootStackParams, 'Restaurant'>;

const RestaurantScreen:React.FC<PROPS> = ({namestring}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.screenTitle}>{name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginTop: 24,
	},
	screenTitle: {
		fontSize: 24,
		marginTop: 8,
		fontWeight: 'bold'
	}
})

export default RestaurantScreen;