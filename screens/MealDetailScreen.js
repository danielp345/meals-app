import { useLayoutEffect } from "react"
import { Image, StyleSheet, Text, View, ScrollView } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List"
import IconButton from "../components/IconButton"
import { useDispatch, useSelector } from "react-redux"
// import { useFavourites } from "../store/context/FavouritesContext"
import { addFavourite, removeFavourite } from "../store/redux/favourites"

const MealDetailScreen = ({ route, navigation }) => {
	const { mealId } = route.params

	const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids)
	const dispatch = useDispatch()

	// const { ids, addFavourite, removeFavourite } = useFavourites()

	// const mealIsFavourite = ids.includes(mealId)

	const mealIsFavourite = favouriteMealIds.includes(mealId)

	const selectedMeal = MEALS.find((meal) => meal.id === mealId)

	const favouriteStatusHandler = () => {
		// mealIsFavourite ? removeFavourite(mealId) : addFavourite(mealId)
		mealIsFavourite
			? dispatch(removeFavourite({ id: mealId }))
			: dispatch(addFavourite({ id: mealId }))
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						onPress={favouriteStatusHandler}
						icon={mealIsFavourite ? "star" : "star-outline"}
						color="white"
					/>
				)
			},
		})
	}, [navigation, favouriteStatusHandler])

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Step</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	)
}

export default MealDetailScreen

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 24,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	detailText: {
		color: "white",
	},
	listContainer: {
		width: "80%",
	},
	listOuterContainer: {
		alignItems: "center",
	},
})
