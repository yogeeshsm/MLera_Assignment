"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SectionReveal from "./SectionReveal";

/* ── Code Snippet Block ───────────────────────────────── */
function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };
  const lines = code.trim().split("\n");
  const tokenize = (line) => {
    return line
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/(#.*)$/g, '<span style="color:#6b7280">$1</span>')
      .replace(/\b(import|from|as|def|return|for|in|if|else|class|True|False|None|and|or|not)\b/g, '<span style="color:#818cf8">$1</span>')
      .replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span style="color:#34d399">$1</span>')
      .replace(/(".*?"|'.*?')/g, '<span style="color:#fbbf24">$1</span>')
      .replace(/\b(\d+\.?\d*)\b/g, '<span style="color:#f87171">$1</span>');
  };
  return (
    <div className="relative rounded-xl overflow-hidden border border-violet-100 bg-[#0f0f1a] text-left">
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a2e] border-b border-white/5">
        <span className="text-[10px] text-violet-400 font-mono">python</span>
        <button onClick={handleCopy} className="text-[10px] text-gray-400 hover:text-violet-300 transition-colors font-mono">
          {copied ? "✓ copied" : "copy"}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-[11px] leading-5 font-mono">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="select-none text-gray-600 w-4 text-right flex-shrink-0">{i + 1}</span>
              <span dangerouslySetInnerHTML={{ __html: tokenize(line) || "&nbsp;" }} />
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

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

/* ── SVG Visualizations ───────────────────────────────── */
const DATA_POINTS = [[45,95],[55,82],[70,75],[85,60],[95,68],[105,50],[120,42],[135,35],[150,28],[165,22],[60,88],[80,70],[100,55],[130,38],[160,25],[50,90],[90,62],[110,48],[140,32],[170,18]];

function ScatterViz({ tooltip, setTooltip }) {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto cursor-crosshair">
      <rect width="200" height="140" fill="#faf5ff" rx="8" />
      <line x1="30" y1="10" x2="30" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="30" y1="120" x2="190" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      <text x="110" y="135" textAnchor="middle" fontSize="7" fill="#9ca3af">Cement (kg/m³)</text>
      <text x="12" y="70" textAnchor="middle" fontSize="6" fill="#9ca3af" transform="rotate(-90 12 70)">Strength (MPa)</text>
      {DATA_POINTS.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={tooltip?.i === i ? 5 : 3}
          fill={tooltip?.i === i ? "#7c3aed" : "#8b5cf6"} opacity="0.8"
          className="transition-all duration-150 cursor-pointer"
          onMouseEnter={() => setTooltip({ i, cx, cy, x: Math.round(cx * 2.5), y: Math.round((120 - cy) * 0.7) })}
          onMouseLeave={() => setTooltip(null)}>
          <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin={`${i * 0.07}s`} fill="freeze" />
        </circle>
      ))}
      {tooltip && (
        <g>
          <rect x={Math.min(tooltip.cx + 4, 140)} y={tooltip.cy - 20} width="54" height="16" rx="3" fill="#7c3aed" opacity="0.95" />
          <text x={Math.min(tooltip.cx + 4, 140) + 27} y={tooltip.cy - 9} textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">
            {tooltip.x} kg → {tooltip.y} MPa
          </text>
        </g>
      )}
    </svg>
  );
}

function FitViz({ lr }) {
  const slope = 0.4 + (lr / 100) * 0.5;
  const y1 = 108;
  const y2 = 108 - slope * 145;
  const clamp = (v) => Math.max(5, Math.min(125, v));
  const speed = `${(3 - lr * 0.015).toFixed(2)}s`;
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto">
      <rect width="200" height="140" fill="#faf5ff" rx="8" />
      <line x1="30" y1="10" x2="30" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="30" y1="120" x2="190" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      {DATA_POINTS.slice(0, 10).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#8b5cf6" opacity="0.6" />
      ))}
      <line x1="35" y1="40" x2="180" y2="80" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4">
        <animate attributeName="opacity" values="0.4;0.15;0" dur={speed} repeatCount="indefinite" />
      </line>
      <line x1="35" y1="60" x2="180" y2="50" stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="4">
        <animate attributeName="opacity" values="0;0.4;0.15" dur={speed} repeatCount="indefinite" />
      </line>
      <line x1="35" y1={clamp(y1)} x2="180" y2={clamp(y2)} stroke="#7c3aed" strokeWidth="2.5">
        <animate attributeName="opacity" values="0;0;1" dur={speed} repeatCount="indefinite" />
      </line>
      <text x="145" y="12" fontSize="7" fill="#7c3aed" fontWeight="bold">
        <animate attributeName="opacity" values="0;0;1" dur={speed} repeatCount="indefinite" />
        Best Fit ✓
      </text>
      <rect x="35" y="108" width="72" height="12" rx="3" fill="#ede9fe" />
      <text x="71" y="117" textAnchor="middle" fontSize="6.5" fill="#7c3aed" fontWeight="bold">
        lr = {(lr / 1000).toFixed(3)}
      </text>
    </svg>
  );
}

function LossViz() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-auto">
      <rect width="200" height="140" fill="#faf5ff" rx="8" />
      <line x1="30" y1="10" x2="30" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="30" y1="120" x2="190" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      <text x="110" y="135" textAnchor="middle" fontSize="7" fill="#9ca3af">Epochs</text>
      <text x="12" y="70" textAnchor="middle" fontSize="6" fill="#9ca3af" transform="rotate(-90 12 70)">Cost / Loss</text>
      <path d="M35,22 C50,24 60,35 80,55 C100,75 120,95 140,105 C155,110 170,113 185,115 L185,120 L35,120 Z" fill="#ede9fe" opacity="0.4" />
      <path d="M35,22 C50,24 60,35 80,55 C100,75 120,95 140,105 C155,110 170,113 185,115" stroke="#7c3aed" strokeWidth="2.5" fill="none">
        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="2.5s" repeatCount="indefinite" />
      </path>
      <circle r="4" fill="#7c3aed">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M35,22 C50,24 60,35 80,55 C100,75 120,95 140,105 C155,110 170,113 185,115" />
      </circle>
      {[0,1,2,3,4].map((n) => (
        <line key={n} x1={35 + n * 37.5} y1="118" x2={35 + n * 37.5} y2="122" stroke="#d1d5db" strokeWidth="1" />
      ))}
      <text x="150" y="100" fontSize="7" fill="#16a34a" fontWeight="bold">↓ Loss minimized</text>
    </svg>
  );
}

/* ── Step definitions ─────────────────────────────────── */
const visualizationSteps = [
  {
    id: "scatter",
    label: "1. See the Data",
    icon: "🔵",
    desc: "Hover any point to see its cement & strength values. Understanding the raw pattern comes before any math.",
    code: `import pandas as pd
import matplotlib.pyplot as plt

# Load real-world concrete dataset
df = pd.read_csv("concrete_data.csv")

# Inspect the data
print(df.head())
# cement  strength
#  540.0    79.99
#  332.5    61.89
#  ...

# Visualise the raw data
plt.scatter(df["cement"], df["strength"],
            color="#8b5cf6", alpha=0.7)
plt.xlabel("Cement (kg/m³)")
plt.ylabel("Compressive Strength (MPa)")
plt.title("Can cement predict strength?")
plt.show()`,
  },
  {
    id: "fit",
    label: "2. Watch the Model Learn",
    icon: "📉",
    desc: "Drag the learning-rate slider to see how gradient descent converges — too slow, too fast, or just right.",
    code: `import numpy as np

# Gradient descent from scratch
X = df["cement"].values
y = df["strength"].values
X = (X - X.mean()) / X.std()  # normalise

w, b = 0.0, 0.0
lr = 0.01   # <-- try changing this!

for epoch in range(500):
    y_pred = w * X + b
    loss   = ((y_pred - y) ** 2).mean()
    dw = (2 * (y_pred - y) * X).mean()
    db = (2 * (y_pred - y)).mean()
    w -= lr * dw
    b -= lr * db
    if epoch % 100 == 0:
        print(f"Epoch {epoch} | Loss: {loss:.2f}")`,
  },
  {
    id: "loss",
    label: "3. Track the Cost Drop",
    icon: "✅",
    desc: "Visualize how the model's error (cost) decreases each epoch — making optimization tangible and intuitive.",
    code: `# Track & plot the loss curve
losses = []
w, b = 0.0, 0.0

for epoch in range(500):
    y_pred = w * X + b
    loss   = ((y_pred - y) ** 2).mean()
    losses.append(loss)
    dw = (2 * (y_pred - y) * X).mean()
    db = (2 * (y_pred - y)).mean()
    w -= lr * dw
    b -= lr * db

# Plot convergence
plt.plot(losses, color="#7c3aed", linewidth=2)
plt.fill_between(range(500), losses,
                 alpha=0.1, color="#7c3aed")
plt.xlabel("Epochs")
plt.ylabel("MSE Loss")
plt.title("Gradient Descent Convergence")
plt.show()`,
  },
];

/* ── Quiz data ────────────────────────────────────────── */
const QUIZ = [
  {
    q: "In gradient descent, what does a HIGH learning rate risk?",
    options: ["Slower convergence", "Overshooting the minimum", "Better accuracy", "Lower loss"],
    answer: 1,
    explanation: "Too high a learning rate causes the optimizer to overshoot and never settle at the minimum.",
  },
  {
    q: "What does a scatter plot help us identify before training?",
    options: ["Model accuracy", "Data patterns & correlations", "Epoch count", "Weight values"],
    answer: 1,
    explanation: "Scatter plots reveal relationships between features before any training begins.",
  },
  {
    q: "When the loss curve flattens, it means the model is…",
    options: ["Broken", "Overfitting", "Converging", "Underfitting"],
    answer: 2,
    explanation: "A flattening loss curve means gradients are near zero — the model has converged.",
  },
];

const AUTO_STEP_DURATION = 4500;

export default function InteractiveLearning() {
  const [activeStep, setActiveStep] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [visited, setVisited] = useState(new Set([0]));
  const [lr, setLr] = useState(50);
  const [tooltip, setTooltip] = useState(null);
  const [quizIdx] = useState(() => Math.floor(Math.random() * QUIZ.length));
  const [quizAnswer, setQuizAnswer] = useState(null);
  const progressRef = useRef(null);
  const stepRef = useRef(0);

  const goToStep = useCallback((i) => {
    if (i === stepRef.current) return;
    setTransitioning(true);
    setShowCode(false);
    setTimeout(() => {
      setActiveStep(i);
      stepRef.current = i;
      setVisited((v) => new Set([...v, i]));
      setTransitioning(false);
      setProgress(0);
      setTooltip(null);
    }, 220);
  }, []);

  /* Auto-cycle + progress bar */
  useEffect(() => {
    if (isPaused) return;
    const startTime = performance.now();
    const tick = () => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min((elapsed / AUTO_STEP_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) { progressRef.current = requestAnimationFrame(tick); }
      else { goToStep((stepRef.current + 1) % visualizationSteps.length); }
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [activeStep, isPaused, goToStep]);

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") { setIsPaused(false); goToStep((stepRef.current + 1) % visualizationSteps.length); }
      if (e.key === "ArrowLeft")  { setIsPaused(false); goToStep((stepRef.current - 1 + visualizationSteps.length) % visualizationSteps.length); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goToStep]);

  const handleStepClick = (i) => { setIsPaused(false); goToStep(i); };
  const allVisited = visited.size === visualizationSteps.length;
  const quiz = QUIZ[quizIdx];

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-violet-50/30 to-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Floating background blobs */}
      {[
        { cls: "w-72 h-72 bg-violet-200/30 -top-20 -left-20", d: "0s" },
        { cls: "w-96 h-96 bg-indigo-200/20 top-1/2 -right-32", d: "2s" },
        { cls: "w-56 h-56 bg-purple-200/25 bottom-0 left-1/4", d: "4s" },
      ].map(({ cls, d }, i) => (
        <div key={i} className={`absolute rounded-full blur-3xl pointer-events-none ${cls}`}
          style={{ animation: "float 6s ease-in-out infinite", animationDelay: d }} />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              Don&apos;t just read about ML — see it happen. Build models, watch them train, and understand every step visually.
            </p>
            <p className="mt-1.5 text-[11px] text-gray-400 font-mono tracking-wide">
              ← → arrow keys to navigate steps
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">

          {/* ── Left: Visualization Panel ── */}
          <SectionReveal delay={100}>
            <div className="relative rounded-2xl bg-white shadow-xl shadow-violet-100/40 border border-gray-100 overflow-hidden group">
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-[10px] text-gray-400 font-mono">MLera — Live Visualization</span>
                <span className="ml-auto flex items-center gap-1.5 text-[9px] text-gray-400 font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? "bg-yellow-400" : "bg-green-400 animate-pulse"}`} />
                  {isPaused ? "paused" : "live"}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-0.5 bg-gray-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500" style={{ width: `${progress}%`, transition: "none" }} />
              </div>

              <div className="p-4 sm:p-6">
                {/* Step tabs */}
                <div className="flex gap-1.5 sm:gap-2 mb-3">
                  {visualizationSteps.map((step, i) => (
                    <button key={step.id} onClick={() => handleStepClick(i)}
                      className={`relative text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-full font-semibold transition-all duration-300 ${
                        activeStep === i
                          ? "bg-violet-600 text-white shadow-md scale-105"
                          : "bg-gray-100 text-gray-500 hover:bg-violet-50 hover:text-violet-600 hover:scale-105"
                      }`}>
                      {activeStep === i && (
                        <span className="absolute inset-0 rounded-full ring-2 ring-violet-400 ring-offset-1 animate-ping opacity-30 pointer-events-none" />
                      )}
                      {step.label}
                      {visited.has(i) && activeStep !== i && (
                        <span className="ml-1 text-green-500 text-[9px]">✓</span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Visual / Code toggle */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-gray-400 font-mono">{visualizationSteps[activeStep].icon} step {activeStep + 1} of {visualizationSteps.length}</span>
                  <button onClick={() => setShowCode((v) => !v)}
                    className={`flex items-center gap-1.5 text-[10px] px-3 py-1.5 rounded-full font-semibold transition-all duration-200 ${
                      showCode ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-violet-50 hover:text-violet-600"
                    }`}>
                    {showCode ? "📊 Show Visual" : "{ } View Code"}
                  </button>
                </div>

                {/* Visualization OR Code */}
                <div className={`rounded-xl overflow-hidden border border-violet-100 transition-all duration-300 ${transitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                  {showCode
                    ? <CodeBlock code={visualizationSteps[activeStep].code} />
                    : activeStep === 0 ? <ScatterViz tooltip={tooltip} setTooltip={setTooltip} />
                    : activeStep === 1 ? <FitViz lr={lr} />
                    : <LossViz />
                  }
                </div>

                {/* Learning rate slider — step 2 only */}
                {!showCode && activeStep === 1 && (
                  <div className="mt-3 px-1">
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[10px] font-semibold text-gray-500 font-mono">
                        Learning Rate: <span className="text-violet-600">{(lr / 1000).toFixed(3)}</span>
                      </label>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${
                        lr < 30 ? "bg-blue-50 text-blue-500" : lr < 70 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
                      }`}>
                        {lr < 30 ? "⏳ too slow" : lr < 70 ? "✓ just right" : "⚡ too fast!"}
                      </span>
                    </div>
                    <input type="range" min="5" max="95" value={lr} onChange={(e) => setLr(Number(e.target.value))}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-violet-600" />
                    <div className="flex justify-between text-[9px] text-gray-400 mt-0.5 font-mono">
                      <span>0.005</span><span>0.095</span>
                    </div>
                  </div>
                )}

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-3">
                  {visualizationSteps.map((_, i) => (
                    <button key={i} onClick={() => handleStepClick(i)}
                      className={`rounded-full transition-all duration-300 ${activeStep === i ? "w-5 h-2 bg-violet-600" : "w-2 h-2 bg-gray-300 hover:bg-violet-300"}`} />
                  ))}
                </div>

                {/* Step description */}
                <p className={`mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed transition-all duration-300 ${transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
                  {visualizationSteps[activeStep].desc}
                </p>

                {/* All-visited badge */}
                {allVisited && (
                  <div className="mt-3 flex items-center gap-2 p-2.5 rounded-xl bg-green-50 border border-green-200 animate-fade-in">
                    <span className="text-lg">🎉</span>
                    <div>
                      <div className="text-xs font-bold text-green-700">Explorer unlocked!</div>
                      <div className="text-[10px] text-green-600">You&apos;ve viewed all 3 steps. Ready to learn for real?</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SectionReveal>

          {/* ── Right Side ── */}
          <SectionReveal delay={250}>
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Story-Driven, Not Formula-Driven
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Every module starts with a <strong>real-world scenario</strong>. Imagine an engineer predicting concrete strength — you learn <em>why</em> linear regression matters before touching a single equation.
                </p>
              </div>

              {/* Feature cards */}
              <div className="space-y-3">
                {[
                  { icon: "📈", title: "Live Visualizations", text: "Watch best-fit lines evolve and cost curves drop in real-time", gradient: "from-violet-50 to-purple-50", border: "hover:border-violet-300" },
                  { icon: "🎯", title: "Step-by-Step Building", text: "Build models incrementally — no black boxes, full transparency", gradient: "from-indigo-50 to-blue-50", border: "hover:border-indigo-300" },
                  { icon: "🧪", title: "Experiment Freely", text: "Drag the learning-rate slider and instantly see your model react", gradient: "from-purple-50 to-pink-50", border: "hover:border-purple-300" },
                  { icon: "{ }", title: "See the Code", text: "Every visual has a real Python snippet — toggle it any time", gradient: "from-gray-50 to-slate-50", border: "hover:border-gray-300" },
                ].map((item, i) => (
                  <div key={i} className={`group/card flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white border border-gray-100 ${item.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}>
                    <span className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-sm font-bold text-gray-600 group-hover/card:scale-110 transition-transform duration-300 shadow-sm`}>
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-800 group-hover/card:text-violet-700 transition-colors duration-200">{item.title}</div>
                      <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{item.text}</div>
                    </div>
                    <span className="text-gray-200 group-hover/card:text-violet-400 group-hover/card:translate-x-0.5 transition-all duration-300 text-lg leading-none mt-0.5">→</span>
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
                  <div key={i} className="group/stat relative text-center p-3 sm:p-4 rounded-xl bg-violet-50/70 border border-violet-100 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default">
                    <div className="absolute inset-0 -translate-x-full group-hover/stat:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none" />
                    <div className="text-base mb-0.5">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl font-extrabold text-violet-700 group-hover/stat:text-violet-900 transition-colors duration-200">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* ── Quick Check Quiz ── */}
              <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/60 to-indigo-50/40 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">🧩</span>
                  <span className="text-xs font-bold text-violet-700 uppercase tracking-wider">Quick Check</span>
                  {quizAnswer !== null && (
                    <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${quizAnswer === quiz.answer ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"}`}>
                      {quizAnswer === quiz.answer ? "✓ Correct!" : "✗ Not quite"}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-3 leading-snug">{quiz.q}</p>
                <div className="grid grid-cols-2 gap-2">
                  {quiz.options.map((opt, i) => (
                    <button key={i} onClick={() => setQuizAnswer(i)} disabled={quizAnswer !== null}
                      className={`text-[11px] text-left px-3 py-2 rounded-xl border font-medium transition-all duration-200 ${
                        quizAnswer === null
                          ? "bg-white border-gray-200 text-gray-600 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 hover:-translate-y-0.5"
                          : quizAnswer === i && i === quiz.answer ? "bg-green-50 border-green-300 text-green-700"
                          : quizAnswer === i && i !== quiz.answer ? "bg-red-50 border-red-300 text-red-600"
                          : i === quiz.answer ? "bg-green-50 border-green-200 text-green-600"
                          : "bg-gray-50 border-gray-100 text-gray-400"
                      }`}>
                      <span className="font-bold mr-1 text-gray-400">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </button>
                  ))}
                </div>
                {quizAnswer !== null && (
                  <p className="mt-2.5 text-[11px] text-gray-500 leading-relaxed bg-white/80 rounded-lg px-3 py-2 border border-gray-100 animate-fade-in">
                    💡 {quiz.explanation}
                  </p>
                )}
              </div>

            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
