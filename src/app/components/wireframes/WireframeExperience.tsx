export function WireframeExperience() {
  return (
    <section className="py-20 bg-gray-50 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="h-12 w-96 bg-black text-white flex items-center px-4 text-2xl">
              EXPERIENCE
            </div>
            <div className="h-1 w-20 bg-black" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {[1, 2, 3].map((item, index) => (
                <div
                  key={item}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-black rounded-full border-4 border-gray-50" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                    <div className="border-4 border-black bg-white p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex gap-3">
                          <div className="w-12 h-12 border-2 border-black bg-gray-200" />
                          <div className="space-y-1 flex-1">
                            <div className="h-6 w-48 bg-black text-white flex items-center px-2 text-sm">
                              JOB TITLE
                            </div>
                            <div className="h-4 w-32 bg-gray-300 border border-black" />
                            <div className="h-3 w-24 bg-gray-200 border border-gray-400" />
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                          <div className="h-3 w-full bg-gray-100 border border-gray-400" />
                          <div className="h-3 w-full bg-gray-100 border border-gray-400" />
                        </div>

                        {/* Skills */}
                        <div className="space-y-2 border-t-2 border-gray-300 pt-4">
                          <div className="h-4 w-32 bg-gray-300 border border-black" />
                          {[1, 2, 3].map((skill) => (
                            <div key={skill} className="flex gap-2 items-center">
                              <div className="w-4 h-4 border border-black bg-white" />
                              <div className="h-3 w-40 bg-gray-100 border border-gray-400" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
