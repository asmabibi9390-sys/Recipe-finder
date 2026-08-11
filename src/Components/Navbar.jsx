function Navbar({ showFavorites, setShowFavorites }) {
  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      
        <div className="flex items-center gap-2">

          <span className="text-3xl">
            🍴
          </span>

          <h1 className="text-2xl font-bold text-gray-900">
            Recipe<span className="text-orange-500">
              Finder
            </span>
          </h1>

        </div>

        <div className="flex items-center gap-6">

          <button
            onClick={() => setShowFavorites(false)}
            className={
              !showFavorites
                ? "text-orange-500 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Home
          </button>

          <button
            onClick={() => setShowFavorites(true)}
            className={
              showFavorites
                ? "text-orange-500 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Favorites ❤️
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar