export function WireframeFooter() {
  return (
    <footer className="bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="h-4 w-64 bg-gray-200 border border-gray-400" />

          {/* Social Icons */}
          <div className="flex gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="w-10 h-10 border-2 border-black bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
