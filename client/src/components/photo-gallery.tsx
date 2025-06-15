export function PhotoGallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-rose mb-4">
            Follow My Journey
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Instagram Feed Embed */}
            <div className="rounded-lg p-8 text-center bg-[#a3587554]">
              <div className="mb-6">
                <i className="fab fa-instagram text-6xl text-pink-500 mb-4"></i>
                <p className="text-gray-600 mb-6">Follow me on Instagram for daily inspiration, movement tips, and behind-the-scenes content from my classes.</p>
              </div>
              
              
              
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