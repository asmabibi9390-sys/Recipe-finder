function Categories({
  selectedCategory,
  setSelectedCategory
}) {
  const categories = [
    "All",
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Pasta",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
    "Goat"
  ]

  return (
    <section className="py-10 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Popular Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Categories