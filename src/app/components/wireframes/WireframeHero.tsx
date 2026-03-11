export function WireframeHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white border-b-4 border-black">
      <div className="max-w-7xl w-full mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="h-4 w-32 bg-gray-300 border border-black" />
              <div className="h-16 w-full bg-gray-300 border-2 border-black" />
              <div className="h-10 w-4/5 bg-gray-200 border border-black" />
            </div>

            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-100 border border-gray-400" />
              <div className="h-4 w-full bg-gray-100 border border-gray-400" />
              <div className="h-4 w-3/4 bg-gray-100 border border-gray-400" />
            </div>

            <div className="flex gap-4 pt-4">
              <div className="h-12 w-40 bg-black text-white flex items-center justify-center border-2 border-black">
                [View Projects]
              </div>
              <div className="h-12 w-40 bg-white border-2 border-black flex items-center justify-center">
                [Download CV]
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 border-4 border-black bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-2">👤</div>
                <div>PROFILE PHOTO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
