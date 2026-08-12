import { useEffect, useState } from "react"

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Categories from "./Components/Categories"
import RecipeGrid from "./Components/RecipeGrid"
import RecipeModal from "./Components/RecipeModal"
import Footer from "./Components/Footer"

function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("recipeFavorites")
    return saved ? JSON.parse(saved) : []
  })

  const [showFavorites, setShowFavorites] = useState(false)

  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"
  })


  
  useEffect(() => {

    localStorage.setItem(
      "recipeFavorites",
      JSON.stringify(favorites)
    )

  }, [favorites])


 
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


  
  const toggleFavorite = (recipe) => {

    setFavorites((current) => {

      const exists = current.some(
        (item) => item.id === recipe.id
      )

      if (exists) {

        return current.filter(
          (item) => item.id !== recipe.id
        )

      }

      return [...current, recipe]

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


      <Footer />

    </div>
  )
}

export default App