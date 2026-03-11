export function WireframeContact() {
  return (
    <section className="py-20 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="h-12 w-80 bg-black text-white flex items-center justify-center px-4 text-2xl mx-auto">
              CONTACT
            </div>
            <div className="h-1 w-20 bg-black mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="border-4 border-black bg-white p-8">
              <div className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <div className="h-4 w-16 bg-gray-300 border border-black" />
                  <div className="h-12 w-full border-2 border-black bg-gray-50" />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <div className="h-4 w-16 bg-gray-300 border border-black" />
                  <div className="h-12 w-full border-2 border-black bg-gray-50" />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-300 border border-black" />
                  <div className="h-32 w-full border-2 border-black bg-gray-50" />
                </div>

                {/* Submit Button */}
                <div className="h-12 w-full bg-black text-white flex items-center justify-center border-2 border-black">
                  [SEND MESSAGE]
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="h-8 w-48 bg-black text-white flex items-center px-3">
                  LET'S CONNECT
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-100 border border-gray-400" />
                  <div className="h-3 w-full bg-gray-100 border border-gray-400" />
                  <div className="h-3 w-4/5 bg-gray-100 border border-gray-400" />
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <div className="h-5 w-32 bg-gray-300 border border-black" />
                <div className="space-y-3">
                  {['GitHub', 'LinkedIn', 'Email'].map((social) => (
                    <div key={social} className="flex items-center gap-4 p-4 border-2 border-black bg-white">
                      <div className="w-12 h-12 border-2 border-black bg-gray-200" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-24 bg-black text-white flex items-center px-2 text-xs">
                          {social}
                        </div>
                        <div className="h-3 w-40 bg-gray-100 border border-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
