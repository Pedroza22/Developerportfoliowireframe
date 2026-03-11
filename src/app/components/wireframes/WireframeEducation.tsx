export function WireframeEducation() {
  return (
    <section className="py-20 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="h-12 w-72 bg-black text-white flex items-center px-4 text-2xl">
              EDUCATION
            </div>
            <div className="h-1 w-20 bg-black" />
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {['Degree 1', 'Degree 2'].map((edu) => (
              <div key={edu} className="border-4 border-black bg-white p-8">
                <div className="space-y-4">
                  {/* Header with Icon */}
                  <div className="flex gap-4">
                    <div className="w-16 h-16 border-2 border-black bg-gray-200 flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-6 w-full bg-black text-white flex items-center px-2">
                        DEGREE NAME
                      </div>
                      <div className="h-4 w-48 bg-gray-300 border border-black" />
                      <div className="h-3 w-32 bg-gray-200 border border-gray-400" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2 pt-2">
                    <div className="h-3 w-full bg-gray-100 border border-gray-400" />
                    <div className="h-3 w-full bg-gray-100 border border-gray-400" />
                    <div className="h-3 w-full bg-gray-100 border border-gray-400" />
                    <div className="h-3 w-3/4 bg-gray-100 border border-gray-400" />
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
