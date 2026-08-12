function Footer() {

  return (

    <footer className="bg-gray-900 dark:bg-black text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


          

          <div>

            <h2 className="text-2xl font-bold text-orange-500">
              Recipe
              <span className="text-white">
                Finder
              </span>
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Discover delicious recipes and find
              the perfect meal for every occasion.
            </p>

          </div>


          

          <div>

            <h3 className="text-lg font-semibold text-white mb-4">
              Features
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>🔍 Search Recipes</li>

              <li>❤️ Save Favorites</li>

              <li>🍴 Browse Categories</li>

              <li>🌙 Dark Mode</li>

            </ul>

          </div>


          
          <div>

            <h3 className="text-lg font-semibold text-white mb-4">
              Recipe Finder
            </h3>

        
          </div>

        </div>


        

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 RecipeFinder. All rights reserved.
          </p>

        
        </div>

      </div>

    </footer>

  )
}

export default Footer