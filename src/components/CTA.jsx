"use client";

import Image from "next/image";
import SectionReveal from "./SectionReveal";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <section id="cta" className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

            {/* Animated orbs */}
            <div className="pointer-events-none">
              <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-violet-400/30 blur-3xl animate-pulse" />
              <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-indigo-400/25 blur-3xl animate-pulse delay-700" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full bg-purple-300/15 blur-3xl animate-pulse delay-300" />
            </div>

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
                <Button href="#" variant="white" size="lg">
                  Get Started Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <Button href="#features" variant="ghost" size="lg">
                  Explore Features
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
