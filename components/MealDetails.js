import { StyleSheet, Text, View } from "react-native"
import React from "react"

const MealDetails = ({
	duration,
	complexity,
	affordability,
	containerStyle,
	textStyle,
}) => {
	return (
		<View style={[styles.details, containerStyle]}>
			<Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
			<Text style={[styles.detailItem, textStyle]}>
				{complexity.toUpperCase()}
			</Text>
			<Text style={[styles.detailItem, textStyle]}>
				{affordability.toUpperCase()}
			</Text>
		</View>
	)
}

export default MealDetails

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
})
