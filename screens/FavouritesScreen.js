// import { useFavourites } from "../store/context/FavouritesContext"
import { MEALS } from "../data/dummy-data"
import MealsList from "../components/MealsList/MealsList"
import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"

const FavouritesScreen = () => {
	// const { ids } = useFavourites()

	const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids)

	// const favouriteMeals = MEALS.filter((meal) => ids.includes(meal.id))
	const favouriteMeals = MEALS.filter((meal) =>
		favouriteMealIds.includes(meal.id)
	)

	if (favouriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favourite meals yet.</Text>
			</View>
		)
	}

	return <MealsList items={favouriteMeals} />
}

export default FavouritesScreen

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
})
