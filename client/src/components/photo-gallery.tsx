import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

export function PhotoGallery() {
  const [showAllPosts, setShowAllPosts] = useState(false);

  const { data: posts, isLoading, error } = useQuery<InstagramPost[]>({
    queryKey: ['/api/instagram-feed'],
    staleTime: 1000 * 60 * 30, // Cache for 30 minutes
  });

  const displayPosts = showAllPosts ? posts : posts?.slice(0, 6);

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
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
                ))}
              </div>
            )}

            {error && (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="mb-6">
                  <i className="fab fa-instagram text-6xl text-pink-500 mb-4"></i>
                  <p className="text-gray-600 mb-6">Follow me on Instagram for daily inspiration, movement tips, and behind-the-scenes content from my classes.</p>
                  <a 
                    href="https://www.instagram.com/pilateswithfadia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
                  >
                    <i className="fab fa-instagram mr-2"></i>
                    Visit Instagram
                  </a>
                </div>
              </div>
            )}

            {posts && posts.length > 0 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {displayPosts?.map((post: InstagramPost) => (
                    <a
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      {post.media_type === 'VIDEO' ? (
                        <div className="relative w-full h-full">
                          <video
                            src={post.media_url}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            muted
                            loop
                            playsInline
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => e.currentTarget.pause()}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                            <i className="fas fa-play text-white text-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300"></i>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={post.media_url}
                          alt={post.caption ? post.caption.substring(0, 100) + '...' : 'Instagram post'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      )}
                    </a>
                  ))}
                </div>

                {posts.length > 6 && (
                  <div className="text-center">
                    <button
                      onClick={() => setShowAllPosts(!showAllPosts)}
                      className="px-6 py-3 bg-rose text-white font-semibold rounded-full hover:bg-opacity-90 transition duration-300"
                    >
                      {showAllPosts ? 'Show Less' : `View All ${posts.length} Posts`}
                    </button>
                  </div>
                )}

                <div className="text-center mt-8">
                  <a 
                    href="https://www.instagram.com/pilateswithfadia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
                  >
                    <i className="fab fa-instagram mr-2"></i>
                    Follow on Instagram
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}