function RecipeCard({
  recipe,
  favorites,
  toggleFavorite,
  setSelectedRecipe
}) {

  const isFavorite = favorites.some(
    (item) => item.id === recipe.id
  )

  return (

    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm dark:shadow-gray-950/50 hover:shadow-xl transition duration-300 group">

      {/* Image */}

      <div className="h-52 overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

      </div>


      {/* Content */}

      <div className="p-5">

        <div className="flex items-center justify-between mb-2">

          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {recipe.name}
          </h3>

          <button
            onClick={() => toggleFavorite(recipe)}
            className="text-2xl hover:scale-110 transition"
          >
            {isFavorite ? "❤️" : "♡"}
          </button>

        </div>


        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {recipe.category}
        </p>


        <div className="flex items-center justify-between">

          <span className="text-yellow-500">
            ⭐ {recipe.rating}
          </span>

          <button
            onClick={() => setSelectedRecipe(recipe)}
            className="text-orange-500 font-semibold hover:text-orange-600"
          >
            View Recipe →
          </button>

        </div>

      </div>

    </div>
  )
}

export default RecipeCard