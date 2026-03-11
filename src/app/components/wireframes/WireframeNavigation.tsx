export function WireframeNavigation() {
  return (
    <nav className="border-b-4 border-black bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="w-12 h-12 border-2 border-black bg-black text-white flex items-center justify-center font-bold">
            JP
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <div key={item} className="h-6 w-20 bg-gray-200 border border-black flex items-center justify-center text-xs">
                {item}
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden w-10 h-10 border-2 border-black bg-gray-200" />
        </div>
      </div>
    </nav>
  );
}
