import Image from "next/image";
import SectionReveal from "./SectionReveal";

export default function CTA() {
  return (
    <section id="cta" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

            <div className="relative px-5 py-10 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:py-24 text-center">
              <div className="flex justify-center mb-6 sm:mb-8">
                <Image
                  src="/logo-dark.png"
                  alt="MLera"
                  width={160}
                  height={56}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Start Your Machine Learning
                <span className="hidden sm:inline"><br /></span>{" "}
                Journey Today
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-violet-100 max-w-2xl mx-auto leading-relaxed">
                Join MLera and experience structured, clear, and interactive ML
                learning. No more confusion — just clarity and progress.
              </p>
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-violet-700 bg-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out shadow-lg"
                >
                  Get Started Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 ease-out"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
