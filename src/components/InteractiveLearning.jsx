"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SectionReveal from "./SectionReveal";

/* ── Animated Counter ─────────────────────────────────── */
function AnimatedCounter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span
      ref={(el) => {
        if (!el || started) return;
        const obs = new IntersectionObserver(
          ([e]) => {
            if (e.isIntersecting) {
              setStarted(true);
              obs.disconnect();
            }
          },
          { threshold: 0.5 }
        );
        obs.observe(el);
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

/* ── Floating Blob ────────────────────────────────────── */
function FloatingBlob({ className, delay = "0s" }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ animation: `float 6s ease-in-out infinite`, animationDelay: delay }}
    />
  );
}

const visualizationSteps = [
  {
    id: "scatter",
    label: "1. See the Data",
    desc: "Watch real data points appear on an interactive chart — understand the pattern before any math.",
    visual: (
      <svg viewBox="0 0 200 140" className="w-full h-auto">
        <rect width="200" height="140" fill="#faf5ff" rx="8" />
        {/* axes */}
        <line x1="30" y1="10" x2="30" y2="120" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="30" y1="120" x2="190" y2="120" stroke="#e5e7eb" strokeWidth="1" />
        <text x="110" y="135" textAnchor="middle" fontSize="7" fill="#9ca3af">Cement (kg/m³)</text>
        <text x="12" y="70" textAnchor="middle" fontSize="6" fill="#9ca3af" transform="rotate(-90 12 70)">Strength (MPa)</text>
        {/* data points */}
        {[[45,95],[55,82],[70,75],[85,60],[95,68],[105,50],[120,42],[135,35],[150,28],[165,22],[60,88],[80,70],[100,55],[130,38],[160,25],[50,90],[90,62],[110,48],[140,32],[170,18]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#8b5cf6" opacity="0.7">
            <animate attributeName="opacity" from="0" to="0.7" dur="0.4s" begin={`${i*0.08}s`} fill="freeze" />
            <animate attributeName="r" from="0" to="3" dur="0.3s" begin={`${i*0.08}s`} fill="freeze" />
          </circle>
        ))}
      </svg>
    ),
  },
  {
    id: "fit",
    label: "2. Watch the Model Learn",
    desc: "See the best-fit line evolve in real-time as the model adjusts weights through gradient descent.",
    visual: (
      <svg viewBox="0 0 200 140" className="w-full h-auto">
        <rect width="200" height="140" fill="#faf5ff" rx="8" />
        <line x1="30" y1="10" x2="30" y2="120" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="30" y1="120" x2="190" y2="120" stroke="#e5e7eb" strokeWidth="1" />
        {/* data points */}
        {[[45,95],[55,82],[70,75],[85,60],[95,68],[105,50],[120,42],[135,35],[150,28],[165,22]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#8b5cf6" opacity="0.6" />
        ))}
        {/* Evolving fit lines */}
        <line x1="35" y1="40" x2="180" y2="80" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.2;0" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="35" y1="60" x2="180" y2="50" stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="4" opacity="0.5">
          <animate attributeName="opacity" values="0;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </line>
        {/* Best-fit line */}
        <line x1="35" y1="100" x2="180" y2="15" stroke="#7c3aed" strokeWidth="2.5">
          <animate attributeName="opacity" values="0;0;1" dur="3s" repeatCount="indefinite" />
        </line>
        <text x="140" y="12" fontSize="7" fill="#7c3aed" fontWeight="bold">
          <animate attributeName="opacity" values="0;0;1" dur="3s" repeatCount="indefinite" />
          Best Fit ✓
        </text>
      </svg>
    ),
  },
  {
    id: "loss",
    label: "3. Track the Cost Drop",
    desc: "Visualize how the model's error (cost) decreases with every training epoch — making optimization tangible.",
    visual: (
      <svg viewBox="0 0 200 140" className="w-full h-auto">
        <rect width="200" height="140" fill="#faf5ff" rx="8" />
        <line x1="30" y1="10" x2="30" y2="120" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="30" y1="120" x2="190" y2="120" stroke="#e5e7eb" strokeWidth="1" />
        <text x="110" y="135" textAnchor="middle" fontSize="7" fill="#9ca3af">Epochs</text>
        <text x="12" y="70" textAnchor="middle" fontSize="6" fill="#9ca3af" transform="rotate(-90 12 70)">Cost / Loss</text>
        {/* Cost curve */}
        <path d="M35,22 C50,24 60,35 80,55 C100,75 120,95 140,105 C155,110 170,113 185,115" stroke="#7c3aed" strokeWidth="2.5" fill="none">
          <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="2.5s" repeatCount="indefinite" />
        </path>
        {/* Animated dot on curve */}
        <circle r="4" fill="#7c3aed">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M35,22 C50,24 60,35 80,55 C100,75 120,95 140,105 C155,110 170,113 185,115" />
        </circle>
        <text x="145" y="100" fontSize="7" fill="#16a34a" fontWeight="bold">↓ Loss minimized</text>
      </svg>
    ),
  },
];

const AUTO_STEP_DURATION = 4000; // ms per step

export default function InteractiveLearning() {
  const [activeStep, setActiveStep] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(null);
  const stepRef = useRef(0);

  const goToStep = useCallback(
    (i) => {
      if (i === stepRef.current) return;
      setTransitioning(true);
      setTimeout(() => {
        setActiveStep(i);
        stepRef.current = i;
        setTransitioning(false);
        setProgress(0);
      }, 220);
    },
    []
  );

  /* Auto-cycle + progress bar */
  useEffect(() => {
    if (isPaused) return;
    const startTime = performance.now();
    const tick = () => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min((elapsed / AUTO_STEP_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(tick);
      } else {
        const next = (stepRef.current + 1) % visualizationSteps.length;
        goToStep(next);
      }
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [activeStep, isPaused, goToStep]);

  const handleStepClick = (i) => {
    setIsPaused(false);
    goToStep(i);
  };

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-violet-50/30 to-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Floating background blobs ── */}
      <FloatingBlob
        className="w-72 h-72 bg-violet-200/30 -top-20 -left-20"
        delay="0s"
      />
      <FloatingBlob
        className="w-96 h-96 bg-indigo-200/20 top-1/2 -right-32"
        delay="2s"
      />
      <FloatingBlob
        className="w-56 h-56 bg-purple-200/25 bottom-0 left-1/4"
        delay="4s"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-4 animate-pulse">
              🔬 Interactive Learning
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Watch Models{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Come Alive
                <span className="absolute -inset-1 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 blur-sm rounded -z-10" />
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Don&apos;t just read about ML — see it happen. Build models, watch
              them train, and understand every step visually.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* ── Visualization Panel ──────────────────────── */}
          <SectionReveal delay={100}>
            <div className="relative rounded-2xl bg-white shadow-xl shadow-violet-100/40 border border-gray-100 overflow-hidden group">
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-[10px] text-gray-400 font-mono">
                  MLera — Live Visualization
                </span>
                {/* Live / paused badge */}
                <span className="ml-auto flex items-center gap-1.5 text-[9px] text-gray-400 font-mono">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isPaused ? "bg-yellow-400" : "bg-green-400 animate-pulse"
                    }`}
                  />
                  {isPaused ? "paused" : "live"}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-0.5 bg-gray-100 relative overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
                  style={{ width: `${progress}%`, transition: "none" }}
                />
              </div>

              <div className="p-4 sm:p-6">
                {/* Step tabs */}
                <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {visualizationSteps.map((step, i) => (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(i)}
                      className={`relative text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full font-semibold transition-all duration-300 ${
                        activeStep === i
                          ? "bg-violet-600 text-white shadow-md scale-105"
                          : "bg-gray-100 text-gray-500 hover:bg-violet-50 hover:text-violet-600 hover:scale-105"
                      }`}
                    >
                      {activeStep === i && (
                        <span className="absolute inset-0 rounded-full ring-2 ring-violet-400 ring-offset-1 animate-ping opacity-30 pointer-events-none" />
                      )}
                      {step.label}
                    </button>
                  ))}
                </div>

                {/* Active visualization — fade + scale transition */}
                <div
                  className={`rounded-xl overflow-hidden border border-violet-100 transition-all duration-300 ${
                    transitioning
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  {visualizationSteps[activeStep].visual}
                </div>

                {/* Step dot indicators */}
                <div className="flex justify-center gap-2 mt-3">
                  {visualizationSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleStepClick(i)}
                      className={`rounded-full transition-all duration-300 ${
                        activeStep === i
                          ? "w-5 h-2 bg-violet-600"
                          : "w-2 h-2 bg-gray-300 hover:bg-violet-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Description — fades with step */}
                <p
                  className={`mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed transition-all duration-300 ${
                    transitioning
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {visualizationSteps[activeStep].desc}
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* ── Right Side ───────────────────────────────── */}
          <SectionReveal delay={250}>
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Story-Driven, Not Formula-Driven
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Every module starts with a <strong>real-world scenario</strong>
                  . Imagine an engineer trying to predict concrete strength — you
                  learn <em>why</em> linear regression matters before touching a
                  single equation.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="space-y-3">
                {[
                  {
                    icon: "📈",
                    title: "Live Visualizations",
                    text: "Watch best-fit lines evolve and cost curves drop in real-time",
                    gradient: "from-violet-50 to-purple-50",
                    border: "hover:border-violet-300",
                  },
                  {
                    icon: "🎯",
                    title: "Step-by-Step Building",
                    text: "Build models incrementally — no black boxes, full transparency",
                    gradient: "from-indigo-50 to-blue-50",
                    border: "hover:border-indigo-300",
                  },
                  {
                    icon: "🧪",
                    title: "Experiment Freely",
                    text: "Change parameters and instantly see how your model reacts",
                    gradient: "from-purple-50 to-pink-50",
                    border: "hover:border-purple-300",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group/card flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white border border-gray-100 ${item.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-base group-hover/card:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-800 group-hover/card:text-violet-700 transition-colors duration-200">
                        {item.title}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 mt-0.5 group-hover/card:text-gray-600 transition-colors duration-200">
                        {item.text}
                      </div>
                    </div>
                    <span className="text-gray-200 group-hover/card:text-violet-400 group-hover/card:translate-x-0.5 transition-all duration-300 text-lg leading-none mt-0.5">
                      →
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 26, suffix: "+", label: "ML Modules", icon: "🧠" },
                  { value: 200, suffix: "+", label: "Lexicon Terms", icon: "📚" },
                  { value: 50, suffix: "+", label: "Visualizations", icon: "✨" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group/stat relative text-center p-3 sm:p-4 rounded-xl bg-violet-50/70 border border-violet-100 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 hover:bg-violet-50 transition-all duration-300 overflow-hidden cursor-default"
                  >
                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover/stat:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none" />
                    <div className="text-base mb-0.5">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl font-extrabold text-violet-700 group-hover/stat:text-violet-900 transition-colors duration-200">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 font-medium">
                      {stat.label}
                    </div>
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
