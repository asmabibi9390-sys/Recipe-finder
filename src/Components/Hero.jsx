function Hero({ searchTerm, setSearchTerm }) {
  return (
    <section className="bg-orange-50 py-20">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Discover Delicious Recipes 🍴
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Find the perfect recipe for your next meal
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a recipe..."
            className="flex-1 px-5 py-4 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-orange-400"
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