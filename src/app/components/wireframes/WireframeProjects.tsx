export function WireframeProjects() {
  return (
    <section className="py-20 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="h-12 w-80 bg-black text-white flex items-center px-4 text-2xl">
              PROJECTS
            </div>
            <div className="h-1 w-20 bg-black" />
            <div className="space-y-2">
              <div className="h-4 w-96 bg-gray-200 border border-gray-400" />
              <div className="h-4 w-80 bg-gray-200 border border-gray-400" />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Project 1', 'Project 2', 'Project 3'].map((project) => (
              <div key={project} className="border-4 border-black bg-white">
                {/* Image */}
                <div className="h-48 bg-gray-300 border-b-4 border-black flex items-center justify-center">
                  <div className="text-gray-600 text-center">
                    <div className="text-4xl mb-2">🖼️</div>
                    <div>PROJECT IMAGE</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="h-6 w-full bg-black text-white flex items-center px-2">
                    {project}
                  </div>

                  <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-200 border border-gray-400" />
                    <div className="h-3 w-full bg-gray-200 border border-gray-400" />
                    <div className="h-3 w-4/5 bg-gray-200 border border-gray-400" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['Tech 1', 'Tech 2', 'Tech 3'].map((tech) => (
                      <div key={tech} className="h-6 px-3 bg-gray-200 border border-black text-xs flex items-center">
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 pt-2">
                    <div className="flex-1 h-9 border-2 border-black bg-white flex items-center justify-center text-xs">
                      [View]
                    </div>
                    <div className="h-9 w-9 border-2 border-black bg-white" />
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
