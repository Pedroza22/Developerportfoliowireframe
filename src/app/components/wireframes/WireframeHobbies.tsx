export function WireframeHobbies() {
  return (
    <section className="py-20 bg-gray-50 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="h-12 w-96 bg-black text-white flex items-center justify-center px-4 text-2xl mx-auto">
              HOBBIES & INTERESTS
            </div>
            <div className="h-1 w-20 bg-black mx-auto" />
          </div>

          {/* Hobbies Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Hobby 1', 'Hobby 2', 'Hobby 3', 'Hobby 4'].map((hobby) => (
              <div key={hobby} className="border-4 border-black bg-white p-6 text-center">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 border-2 border-black bg-gray-200 mx-auto" />

                  {/* Text */}
                  <div className="space-y-2">
                    <div className="h-5 w-28 bg-black text-white flex items-center justify-center text-xs mx-auto">
                      HOBBY NAME
                    </div>
                    <div className="h-3 w-full bg-gray-100 border border-gray-400" />
                    <div className="h-3 w-3/4 bg-gray-100 border border-gray-400 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
