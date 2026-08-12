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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  useEffect(() => {

    const searchRecipes = async () => {

      try {

        setLoading(true)
        setError("")


        const query = searchTerm.trim()


        const url = query
          ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
          : "https://www.themealdb.com/api/json/v1/1/search.php?s="


        const response = await fetch(url)


        if (!response.ok) {
          throw new Error("Failed to fetch recipes")
        }


        const data = await response.json()


        const meals = data.meals || []


        const formatted = meals.map((meal) => ({

          id: meal.idMeal,

          name: meal.strMeal,

          category: meal.strCategory,

          image: meal.strMealThumb,

          rating: "4.8",

          instructions: meal.strInstructions,

          ingredients: Array.from(
            { length: 20 },
            (_, index) => {

              const ingredient =
                meal[`strIngredient${index + 1}`]

              const measure =
                meal[`strMeasure${index + 1}`]


              if (
                !ingredient ||
                ingredient.trim() === ""
              ) {
                return null
              }


              return `${measure || ""} ${ingredient}`.trim()

            }
          ).filter(Boolean)

        }))


        setRecipes(formatted)


      } catch (err) {

        console.error(err)

        setError(
          "Recipes load nahi ho rahi. Internet check karein."
        )

      } finally {

        setLoading(false)

      }

    }


    
    const timer = setTimeout(
      searchRecipes,
      400
    )


    return () => clearTimeout(timer)

  }, [searchTerm])


  
  const filteredRecipes = recipes.filter((recipe) => {

    const categoryMatch =
      selectedCategory === "All" ||
      recipe.category === selectedCategory


    const favoriteMatch =
      !showFavorites ||
      favorites.some(
        (item) => item.id === recipe.id
      )


    return categoryMatch && favoriteMatch

  })


  return (

    <section
      id="recipes"
      className="py-14 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >

      <div className="max-w-7xl mx-auto px-6">


        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">

          {showFavorites
            ? "My Favorite Recipes ❤️"
            : searchTerm
              ? `Search Results 🔍`
              : "Popular Recipes 🍴"}

        </h2>


        
        {loading && (

          <div className="flex flex-col items-center justify-center py-20">

            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Finding your recipe...
            </p>

          </div>

        )}


        

        {!loading && error && (

          <div className="text-center py-20">

            <div className="text-5xl">
              ⚠️
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {error}
            </p>

          </div>

        )}


        

        {!loading &&
          !error &&
          filteredRecipes.length > 0 && (

            <div
              key={`${searchTerm}-${selectedCategory}-${showFavorites}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in"
            >

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


        

        {!loading &&
          !error &&
          filteredRecipes.length === 0 && (

            <div className="text-center py-20">

              <div className="text-6xl">
                🔍
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
                No Recipe Found
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Try Pizza, Pasta, Chicken or Burger
              </p>

            </div>

          )}

      </div>

    </section>

  )
}

export default RecipeGrid