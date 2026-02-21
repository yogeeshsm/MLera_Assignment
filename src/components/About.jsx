import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-violet-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Interactive Illustration */}
          <SectionReveal>
            <div className="relative">
              {/* Main card – learning dashboard mockup */}
              <div className="rounded-2xl bg-white shadow-2xl shadow-violet-200/40 border border-gray-100 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-gradient-to-r from-violet-600 to-indigo-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="ml-3 text-[10px] sm:text-xs text-white/70 font-mono">MLera Learning Dashboard</span>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Neural network SVG visualization */}
                  <div className="relative bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-5 overflow-hidden">
                    {/* Animated grid dots background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg width="100%" height="100%">
                        <defs>
                          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="rgb(139,92,246)" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                      </svg>
                    </div>

                    {/* Neural network nodes & connections */}
                    <svg viewBox="0 0 320 160" className="w-full h-auto relative z-10" fill="none">
                      {/* Connections layer 1→2 */}
                      <line x1="50" y1="35" x2="130" y2="25" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.4" />
                      <line x1="50" y1="35" x2="130" y2="80" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.3" />
                      <line x1="50" y1="35" x2="130" y2="135" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.2" />
                      <line x1="50" y1="80" x2="130" y2="25" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.3" />
                      <line x1="50" y1="80" x2="130" y2="80" stroke="url(#grad1)" strokeWidth="2" opacity="0.6" />
                      <line x1="50" y1="80" x2="130" y2="135" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.4" />
                      <line x1="50" y1="125" x2="130" y2="25" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.2" />
                      <line x1="50" y1="125" x2="130" y2="80" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.4" />
                      <line x1="50" y1="125" x2="130" y2="135" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.5" />
                      {/* Connections layer 2→3 */}
                      <line x1="130" y1="25" x2="210" y2="45" stroke="url(#grad2)" strokeWidth="1.5" opacity="0.5" />
                      <line x1="130" y1="25" x2="210" y2="115" stroke="url(#grad2)" strokeWidth="1.5" opacity="0.3" />
                      <line x1="130" y1="80" x2="210" y2="45" stroke="url(#grad2)" strokeWidth="2" opacity="0.6" />
                      <line x1="130" y1="80" x2="210" y2="115" stroke="url(#grad2)" strokeWidth="2" opacity="0.6" />
                      <line x1="130" y1="135" x2="210" y2="45" stroke="url(#grad2)" strokeWidth="1.5" opacity="0.3" />
                      <line x1="130" y1="135" x2="210" y2="115" stroke="url(#grad2)" strokeWidth="1.5" opacity="0.5" />
                      {/* Connections layer 3→output */}
                      <line x1="210" y1="45" x2="280" y2="80" stroke="url(#grad3)" strokeWidth="2" opacity="0.7" />
                      <line x1="210" y1="115" x2="280" y2="80" stroke="url(#grad3)" strokeWidth="2" opacity="0.7" />

                      {/* Animated pulse along key paths */}
                      <circle r="3" fill="#8b5cf6" opacity="0.8">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M50,80 L130,80 L210,45 L280,80" />
                      </circle>
                      <circle r="3" fill="#6366f1" opacity="0.8">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M50,35 L130,135 L210,115 L280,80" />
                      </circle>
                      <circle r="2.5" fill="#a78bfa" opacity="0.6">
                        <animateMotion dur="3.5s" repeatCount="indefinite" path="M50,125 L130,25 L210,45 L280,80" />
                      </circle>

                      {/* Layer 1 nodes (input) */}
                      <circle cx="50" cy="35" r="8" fill="white" stroke="#8b5cf6" strokeWidth="2" />
                      <circle cx="50" cy="80" r="8" fill="white" stroke="#8b5cf6" strokeWidth="2" />
                      <circle cx="50" cy="125" r="8" fill="white" stroke="#8b5cf6" strokeWidth="2" />
                      <text x="50" y="38" textAnchor="middle" fontSize="7" fill="#7c3aed" fontWeight="bold">x₁</text>
                      <text x="50" y="83" textAnchor="middle" fontSize="7" fill="#7c3aed" fontWeight="bold">x₂</text>
                      <text x="50" y="128" textAnchor="middle" fontSize="7" fill="#7c3aed" fontWeight="bold">x₃</text>

                      {/* Layer 2 nodes (hidden) */}
                      <circle cx="130" cy="25" r="9" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
                      <circle cx="130" cy="80" r="10" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5" />
                      <circle cx="130" cy="135" r="9" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
                      <text x="130" y="28" textAnchor="middle" fontSize="6" fill="#6d28d9" fontWeight="bold">ReLU</text>
                      <text x="130" y="83" textAnchor="middle" fontSize="6" fill="#6d28d9" fontWeight="bold">ReLU</text>
                      <text x="130" y="138" textAnchor="middle" fontSize="6" fill="#6d28d9" fontWeight="bold">ReLU</text>

                      {/* Layer 3 nodes */}
                      <circle cx="210" cy="45" r="9" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
                      <circle cx="210" cy="115" r="9" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
                      <text x="210" y="48" textAnchor="middle" fontSize="5.5" fill="#4338ca" fontWeight="bold">σ</text>
                      <text x="210" y="118" textAnchor="middle" fontSize="5.5" fill="#4338ca" fontWeight="bold">σ</text>

                      {/* Output node */}
                      <circle cx="280" cy="80" r="11" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="2" />
                      <text x="280" y="83" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">ŷ</text>

                      {/* Layer labels */}
                      <text x="50" y="155" textAnchor="middle" fontSize="7" fill="#9ca3af" fontWeight="500">Input</text>
                      <text x="130" y="155" textAnchor="middle" fontSize="7" fill="#9ca3af" fontWeight="500">Hidden</text>
                      <text x="210" y="155" textAnchor="middle" fontSize="7" fill="#9ca3af" fontWeight="500">Dense</text>
                      <text x="280" y="155" textAnchor="middle" fontSize="7" fill="#9ca3af" fontWeight="500">Output</text>

                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#4f46e5" />
                        </linearGradient>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Mini module cards row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-violet-50 border border-violet-100 text-center group hover:bg-violet-100 transition-colors duration-200">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 mx-auto rounded-lg bg-violet-200/60 flex items-center justify-center mb-1.5">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-violet-700">Deep Learning</div>
                      <div className="text-[8px] sm:text-[9px] text-gray-400 mt-0.5">12 modules</div>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50 border border-blue-100 text-center group hover:bg-blue-100 transition-colors duration-200">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 mx-auto rounded-lg bg-blue-200/60 flex items-center justify-center mb-1.5">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-blue-700">Data Science</div>
                      <div className="text-[8px] sm:text-[9px] text-gray-400 mt-0.5">8 modules</div>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center group hover:bg-emerald-100 transition-colors duration-200">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 mx-auto rounded-lg bg-emerald-200/60 flex items-center justify-center mb-1.5">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-emerald-700">ML Ops</div>
                      <div className="text-[8px] sm:text-[9px] text-gray-400 mt-0.5">6 modules</div>
                    </div>
                  </div>

                  {/* Live learning activity feed */}
                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-lg bg-green-50/80 border border-green-100">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs font-semibold text-gray-800">Gradient Descent</div>
                        <div className="text-[9px] sm:text-[10px] text-gray-400">Concept mastered</div>
                      </div>
                      <span className="flex-shrink-0 text-[9px] sm:text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">+50 XP</span>
                    </div>
                    <div className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-lg bg-violet-50/80 border border-violet-100">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs font-semibold text-gray-800">Backpropagation</div>
                        <div className="text-[9px] sm:text-[10px] text-gray-400">Lexicon term viewed</div>
                      </div>
                      <span className="flex-shrink-0 text-[9px] sm:text-[10px] font-bold text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge – top right */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 animate-float bg-white rounded-xl shadow-lg shadow-violet-100/50 border border-violet-100 p-2 sm:p-2.5 z-10">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-800">Level 7</div>
                    <div className="text-[8px] sm:text-[9px] text-gray-400">ML Explorer</div>
                  </div>
                </div>
              </div>

              {/* Floating badge – bottom left */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-xl shadow-lg shadow-indigo-100/50 border border-indigo-100 p-2 sm:p-2.5 z-10" style={{ animationDelay: "1.5s", animationName: "float", animationDuration: "3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-800">3-Day Streak</div>
                    <div className="text-[8px] sm:text-[9px] text-gray-400">Keep going!</div>
                  </div>
                </div>
              </div>

              {/* Background decorative blobs */}
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-violet-200/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-indigo-200/30 rounded-full blur-3xl -z-10" />
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal delay={200}>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-4">
                About MLera
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                A Smarter Way to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Learn ML
                </span>
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <strong className="text-gray-900">MLera</strong> is a structured
                Machine Learning teaching platform developed under{" "}
                <strong className="text-gray-900">IIIT Dharwad Research Park</strong>.
                It is designed to make ML accessible to everyone — from absolute
                beginners to aspiring data scientists.
              </p>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Instead of overwhelming you with scattered content, MLera guides you
                through carefully curated learning paths with interactive lessons,
                concept clarity at every step, and a built-in technical lexicon that
                demystifies complex terminology instantly.
              </p>

              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { stat: "Structured", label: "Learning Paths" },
                  { stat: "Interactive", label: "Guided Lessons" },
                  { stat: "Built-in", label: "ML Lexicon" },
                  { stat: "Beginner", label: "Friendly Design" },
                ].map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 rounded-xl bg-violet-50/50 border border-violet-100">
                    <div className="text-base sm:text-lg font-bold text-violet-700">{item.stat}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
