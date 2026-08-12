function Hero({
  searchTerm,
  setSearchTerm
}) {

  return (
    <section className="bg-orange-50 dark:bg-gray-900 py-20 transition-colors duration-300">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Discover Delicious Recipes 🍴
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Find the perfect recipe for your next meal
        </p>


        <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a recipe..."
            className="flex-1 px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            className="px-7 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            🔍 Search
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero