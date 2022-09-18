import { createContext, useState, useContext } from "react"

const FavouritesContext = createContext({
	ids: [],
	addFavourite: (id) => {},
	removeFavourite: (id) => {},
})

function FavouritesProvider({ children }) {
	const [favouritesMealIds, setFavouritesMealIds] = useState([])

	const addFavourite = (id) => {
		setFavouritesMealIds((prevState) => [...prevState, id])
	}

	const removeFavourite = (id) => {
		setFavouritesMealIds((prevState) =>
			prevState.filter((mealId) => mealId !== id)
		)
	}

	const value = {
		ids: favouritesMealIds,
		addFavourite,
		removeFavourite,
	}

	return (
		<FavouritesContext.Provider value={value}>
			{children}
		</FavouritesContext.Provider>
	)
}

export const useFavourites = () => useContext(FavouritesContext)

export default FavouritesProvider
