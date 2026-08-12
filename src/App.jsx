import { useEffect, useState } from "react"

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Categories from "./Components/Categories"
import RecipeGrid from "./Components/RecipeGrid"
import RecipeModal from "./Components/RecipeModal"

function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("recipeFavorites")

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : []
  })

  const [showFavorites, setShowFavorites] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  // Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"
  })

  // Save Favorites
  useEffect(() => {
    localStorage.setItem(
      "recipeFavorites",
      JSON.stringify(favorites)
    )
  }, [favorites])

  // Apply Dark Mode
  useEffect(() => {

    document.documentElement.classList.toggle(
      "dark",
      darkMode
    )

    localStorage.setItem(
      "darkMode",
      darkMode
    )

  }, [darkMode])

  // Favorite Add / Remove
  const toggleFavorite = (recipe) => {

    setFavorites((currentFavorites) => {

      const alreadyFavorite = currentFavorites.some(
        (item) => item.id === recipe.id
      )

      if (alreadyFavorite) {

        return currentFavorites.filter(
          (item) => item.id !== recipe.id
        )

      }

      return [...currentFavorites, recipe]

    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

      <Navbar
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <RecipeGrid
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        showFavorites={showFavorites}
        setSelectedRecipe={setSelectedRecipe}
      />

      <RecipeModal
        recipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />

    </div>
  )
}

export default App