import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import CategoriesScreen from "./screens/CategoriesScreen"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import FavouritesScreen from "./screens/FavouritesScreen"

import { Ionicons } from "@expo/vector-icons"

import FavouritesProvider from "./store/context/FavouritesContext"
import { Provider } from "react-redux"
import { store } from "./store/redux/store"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "#351401" },
				headerTintColor: "white",
				sceneContainerStyle: { backgroundColor: "#3f2f25" },
				drawerContentStyle: { backgroundColor: "#351401" },
				drawerInactiveTintColor: "white",
				drawerActiveTintColor: "#351401",
				drawerActiveBackgroundColor: "#e4baa1",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favourites"
				component={FavouritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	)
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			{/* <FavouritesProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: "#351401" },
							headerTintColor: "white",
							contentStyle: { backgroundColor: "#3f2f25" },
						}}
					>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigation}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
						/>
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
							options={{
								title: "About The Meal",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
			{/* </FavouritesProvider> */}
		</>
	)
}
