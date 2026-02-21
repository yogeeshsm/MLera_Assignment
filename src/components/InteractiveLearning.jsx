"use client";

import { useState, useEffect } from "react";
import SectionReveal from "./SectionReveal";

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

export default function InteractiveLearning() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-violet-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-4">
              🔬 Interactive Learning
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Watch Models{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Come Alive
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Don&apos;t just read about ML — see it happen. Build models, watch
              them train, and understand every step visually.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* Visualization panel */}
          <SectionReveal delay={100}>
            <div className="rounded-2xl bg-white shadow-xl shadow-violet-100/40 border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-[10px] text-gray-400 font-mono">
                  MLera — Live Visualization
                </span>
              </div>
              <div className="p-4 sm:p-6">
                {/* Step tabs */}
                <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {visualizationSteps.map((step, i) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(i)}
                      className={`text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full font-semibold transition-all duration-200 ${
                        activeStep === i
                          ? "bg-violet-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-500 hover:bg-violet-50 hover:text-violet-600"
                      }`}
                    >
                      {step.label}
                    </button>
                  ))}
                </div>

                {/* Active visualization */}
                <div className="rounded-xl overflow-hidden border border-violet-100">
                  {visualizationSteps[activeStep].visual}
                </div>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {visualizationSteps[activeStep].desc}
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Right – Story-based approach + stats */}
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
                  },
                  {
                    icon: "🎯",
                    title: "Step-by-Step Building",
                    text: "Build models incrementally — no black boxes, full transparency",
                  },
                  {
                    icon: "🧪",
                    title: "Experiment Freely",
                    text: "Change parameters and instantly see how your model reacts",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all duration-200"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center text-base">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">
                        {item.title}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 26, suffix: "+", label: "ML Modules" },
                  { value: 200, suffix: "+", label: "Lexicon Terms" },
                  { value: 50, suffix: "+", label: "Visualizations" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-3 sm:p-4 rounded-xl bg-violet-50/70 border border-violet-100"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-violet-700">
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
