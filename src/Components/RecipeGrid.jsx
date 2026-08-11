import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard"

function RecipeGrid({
  searchTerm,
  selectedCategory,
  favorites,
  toggleFavorite,
  showFavorites,
  setSelectedRecipe
}) {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true)
        setError("")

        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        )

        if (!response.ok) {
          throw new Error("API error")
        }

        const data = await response.json()

        console.log("API DATA:", data)

        const formattedRecipes = (data.meals || []).map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          category: meal.strCategory,
          rating: "4.8",
          image: meal.strMealThumb,
          instructions: meal.strInstructions,

          ingredients: Array.from(
            { length: 20 },
            (_, index) => {
              const ingredient =
                meal[`strIngredient${index + 1}`]

              const measure =
                meal[`strMeasure${index + 1}`]

              if (!ingredient || !ingredient.trim()) {
                return null
              }

              return `${measure || ""} ${ingredient}`.trim()
            }
          ).filter(Boolean)
        }))

        setRecipes(formattedRecipes)

      } catch (error) {
        console.error(error)

        setError(
          "Recipes load nahi ho rahi. Internet connection check karein."
        )
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  const filteredRecipes = recipes.filter((recipe) => {

    const matchesSearch =
      recipe.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" ||
      recipe.category === selectedCategory

    const matchesFavorites =
      !showFavorites ||
      favorites.some(
        (item) => item.id === recipe.id
      )

    return (
      matchesSearch &&
      matchesCategory &&
      matchesFavorites
    )
  })

  return (
    <section className="py-12 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {showFavorites
            ? "My Favorite Recipes ❤️"
            : "Popular Recipes 🍴"}
        </h2>

        {/* Loading */}
        {loading && (
          <div className="text-center py-20">

            <div className="w-12 h-12 mx-auto border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>

            <p className="mt-4 text-gray-600">
              Loading recipes...
            </p>

          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-20">

            <div className="text-5xl mb-4">
              ⚠️
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              Something went wrong
            </h3>

            <p className="text-gray-500 mt-2">
              {error}
            </p>

          </div>
        )}

        {/* Recipes */}
        {!loading &&
          !error &&
          filteredRecipes.length > 0 && (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {filteredRecipes.map((recipe) => (

                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  setSelectedRecipe={setSelectedRecipe}
                />

              ))}

            </div>
          )}

        {/* No recipes */}
        {!loading &&
          !error &&
          filteredRecipes.length === 0 && (

            <div className="text-center py-20">

              <div className="text-5xl mb-4">
                😕
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                No recipes found
              </h3>

              <p className="text-gray-500 mt-2">
                Try another search or select All.
              </p>

            </div>
          )}

      </div>

    </section>
  )
}

export default RecipeGrid