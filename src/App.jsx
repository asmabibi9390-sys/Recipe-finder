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


  
  useEffect(() => {

    localStorage.setItem(
      "recipeFavorites",
      JSON.stringify(favorites)
    )

  }, [favorites])


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
    <div className="min-h-screen bg-gray-50">

      <Navbar
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
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