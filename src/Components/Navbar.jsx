function Navbar({
  showFavorites,
  setShowFavorites,
  darkMode,
  setDarkMode
}) {

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <button
          onClick={() => setShowFavorites(false)}
          className="text-2xl font-bold text-orange-500"
        >
          Recipe
          <span className="text-gray-900 dark:text-white">
            Finder
          </span>
        </button>


        <div className="flex items-center gap-3">

          {/* Dark Mode Button */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>


          {/* Favorites Button */}

          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              showFavorites
                ? "bg-orange-500 text-white"
                : "text-gray-700 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-gray-800"
            }`}
          >
            ❤️ Favorites
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar