import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
	name: string;
	onPress: () => void
}

const RestaurantCard: React.FC<Props> = ({ name, onPress }) => {
	return (
		<TouchableOpacity onc>
			<View style={styles.container}>
				<Text>{name}</Text>
			</View>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#efefef',
		padding: 15,
		marginBottom: 5,
	}
})
export default RestaurantCard