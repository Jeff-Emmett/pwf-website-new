export function PhotoGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-rose mb-4">
            Follow My Journey
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            See the latest from my Pilates practice and teaching on Instagram
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Instagram Feed Embed */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mb-6">
                <i className="fab fa-instagram text-6xl text-pink-500 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">@fadia.elgharib</h3>
                <p className="text-gray-600 mb-6">Follow me on Instagram for daily inspiration, movement tips, and behind-the-scenes content from my classes.</p>
              </div>
              
              <a 
                href="https://www.instagram.com/fadia.elgharib/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300 shadow-lg"
              >
                View on Instagram
              </a>
              
              {/* Instagram embed placeholder - this would typically be replaced with actual Instagram embed code */}
              <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <i className="fab fa-instagram text-3xl text-gray-400"></i>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Instagram feed will display here. For the best experience, visit my Instagram profile directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}