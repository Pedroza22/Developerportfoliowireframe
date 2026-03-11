export function WireframeAbout() {
  return (
    <section className="py-20 bg-gray-50 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="h-12 w-64 bg-black text-white flex items-center px-4 text-2xl">
              ABOUT ME
            </div>
            <div className="h-1 w-20 bg-black" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Text */}
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-300 border-2 border-black" />
              <div className="space-y-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 w-full bg-gray-200 border border-gray-400" />
                ))}
                <div className="h-4 w-2/3 bg-gray-200 border border-gray-400" />
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <div className="h-8 w-56 bg-gray-300 border-2 border-black" />
              <div className="grid grid-cols-2 gap-4">
                {['Java', 'Spring Boot', 'Django REST', 'Next.js', 'SQL', 'API Dev'].map((skill) => (
                  <div key={skill} className="border-2 border-black bg-white p-6">
                    <div className="w-10 h-10 border-2 border-black bg-gray-200 mb-3" />
                    <div className="h-4 w-full bg-gray-300 border border-black" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
