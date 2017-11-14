import React from 'react'
import { StackNavigator } from 'react-navigation'

import ListRecipes from './src/ListRecipes'
import AddRecipe from './src/addRecipe'
import RecipeDetails from './src/RecipeDetails'

const App = StackNavigator({
  Home: { screen: ListRecipes },
  AddRecipe: { screen: AddRecipe },
  RecipeDetails: { screen: RecipeDetails },
})

export default App
