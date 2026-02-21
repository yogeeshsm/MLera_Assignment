export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-14 sm:pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 -z-10" />
      <div className="absolute top-20 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-indigo-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-on-load animate-fade-in-up">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-6">
                🎓 Built at IIIT Dharwad Research Park
              </span>
            </div>

            <h1 className="animate-on-load animate-fade-in-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Master Machine Learning with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Clarity
              </span>
              , Not Confusion
            </h1>

            <p className="animate-on-load animate-fade-in-up delay-200 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A structured, beginner-friendly platform that replaces chaos with
              clarity. Learn ML step-by-step with guided paths, interactive
              lessons, and a built-in technical lexicon.
            </p>

            <div className="animate-on-load animate-fade-in-up delay-300 mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out shadow-lg shadow-violet-200"
              >
                Get Started
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-violet-700 bg-white border-2 border-violet-200 rounded-full hover:border-violet-400 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out"
              >
                Explore Platform
              </a>
            </div>

            {/* Trust badges */}
            <div className="animate-on-load animate-fade-in-up delay-400 mt-6 sm:mt-10 flex items-center gap-4 sm:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Beginner friendly
              </div>
            </div>
          </div>

          {/* Right – Product Mockup Placeholder */}
          <div className="animate-on-load animate-fade-in-up delay-300 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="animate-float relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
              <div className="rounded-2xl bg-white shadow-2xl shadow-violet-200/50 border border-gray-100 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-gray-400 font-mono">mlera.iiitdwd.ac.in</span>
                </div>
                {/* Content area – realistic platform preview */}
                <div className="p-4 sm:p-6">
                  {/* Welcome bar */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-[11px] sm:text-sm font-bold text-gray-800">Welcome back, Learner 👋</h3>
                      <p className="text-[9px] sm:text-xs text-gray-400 mt-0.5">Continue your ML journey</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1">
                      <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" /></svg>
                      <span className="text-[8px] sm:text-[10px] font-bold text-amber-700">5-day streak</span>
                    </div>
                  </div>

                  {/* Current course progress */}
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-violet-200 font-semibold">Current Path</div>
                        <div className="text-[11px] sm:text-sm font-bold mt-0.5">Supervised Learning Fundamentals</div>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-white rounded-full" />
                      </div>
                      <span className="text-[9px] sm:text-[11px] font-bold text-white/90">65%</span>
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-violet-200 mt-1">Module 7 of 12 — Linear Regression</div>
                  </div>

                  {/* Module cards grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="rounded-xl bg-violet-50 border border-violet-100 p-2.5 sm:p-3 hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-violet-200/60 flex items-center justify-center mb-1.5 sm:mb-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      </div>
                      <div className="text-[9px] sm:text-xs font-bold text-gray-800">Neural Networks</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">12 lessons</div>
                      <div className="mt-1.5 flex items-center gap-1">
                        <div className="flex-1 h-1 bg-violet-100 rounded-full overflow-hidden"><div className="h-full w-[40%] bg-violet-400 rounded-full" /></div>
                        <span className="text-[7px] sm:text-[9px] text-violet-500 font-semibold">40%</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 border border-blue-100 p-2.5 sm:p-3 hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-200/60 flex items-center justify-center mb-1.5 sm:mb-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                      </div>
                      <div className="text-[9px] sm:text-xs font-bold text-gray-800">Data Wrangling</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">8 lessons</div>
                      <div className="mt-1.5 flex items-center gap-1">
                        <div className="flex-1 h-1 bg-blue-100 rounded-full overflow-hidden"><div className="h-full w-[75%] bg-blue-400 rounded-full" /></div>
                        <span className="text-[7px] sm:text-[9px] text-blue-500 font-semibold">75%</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-2.5 sm:p-3 hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-200/60 flex items-center justify-center mb-1.5 sm:mb-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      </div>
                      <div className="text-[9px] sm:text-xs font-bold text-gray-800">ML Lexicon</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">200+ terms</div>
                      <div className="mt-1.5 flex items-center gap-1">
                        <div className="flex-1 h-1 bg-emerald-100 rounded-full overflow-hidden"><div className="h-full w-[90%] bg-emerald-400 rounded-full" /></div>
                        <span className="text-[7px] sm:text-[9px] text-emerald-500 font-semibold">90%</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-amber-50 border border-amber-100 p-2.5 sm:p-3 hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-200/60 flex items-center justify-center mb-1.5 sm:mb-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      </div>
                      <div className="text-[9px] sm:text-xs font-bold text-gray-800">Model Evaluation</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">6 lessons</div>
                      <div className="mt-1.5 flex items-center gap-1">
                        <div className="flex-1 h-1 bg-amber-100 rounded-full overflow-hidden"><div className="h-full w-[20%] bg-amber-400 rounded-full" /></div>
                        <span className="text-[7px] sm:text-[9px] text-amber-500 font-semibold">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
