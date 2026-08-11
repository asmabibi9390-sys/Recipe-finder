function RecipeModal({ recipe, setSelectedRecipe }) {

  if (!recipe) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={() => setSelectedRecipe(null)}
    >

      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">

          <div className="flex justify-between items-start gap-4">

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                {recipe.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {recipe.category}
              </p>

              <p className="text-yellow-500 mt-2">
                ⭐ {recipe.rating}
              </p>

            </div>

            <button
              onClick={() => setSelectedRecipe(null)}
              className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-orange-500 hover:text-white transition text-xl"
            >
              ✕
            </button>

          </div>

    
          <div className="mt-8">

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ingredients 🥗
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (

                  <div
                    key={index}
                    className="bg-orange-50 rounded-lg px-4 py-3 text-gray-700"
                  >
                    🥄 {ingredient}
                  </div>

                ))}

            </div>

          </div>

          
          <div className="mt-8">

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cooking Instructions 👨‍🍳
            </h3>

            <p className="text-gray-600 leading-8 whitespace-pre-line">
              {recipe.instructions}
            </p>

          </div>

          <button
            onClick={() => setSelectedRecipe(null)}
            className="mt-8 w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Close Recipe
          </button>

        </div>

      </div>

    </div>
  )
}

export default RecipeModal