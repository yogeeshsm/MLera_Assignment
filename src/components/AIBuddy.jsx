"use client";

import { useState } from "react";
import SectionReveal from "./SectionReveal";

const chatMessages = [
  {
    role: "user",
    text: "What is gradient descent? I keep hearing this term but I don't get it.",
  },
  {
    role: "buddy",
    text: "Great question! Think of it like this:",
    details: [
      {
        icon: "📖",
        label: "Simple Definition",
        content:
          "Gradient descent is like walking downhill — your model takes small steps to find the lowest point (least error).",
      },
      {
        icon: "🏔️",
        label: "Analogy",
        content:
          "Imagine you're blindfolded on a hilly terrain. You feel the slope under your feet and take a step downhill. Repeat until you reach the valley. That's gradient descent!",
      },
      {
        icon: "🏗️",
        label: "Real-World Use",
        content:
          "Engineers use gradient descent to train models that predict concrete strength — the model adjusts weights step by step until its predictions match actual measurements.",
      },
    ],
  },
  {
    role: "user",
    text: "Oh that makes sense! Can you show me the Python code?",
  },
  {
    role: "buddy",
    text: "Sure! Here's a simple implementation:",
    code: `# Simple Gradient Descent
learning_rate = 0.01
weights = 0.0

for epoch in range(100):
    prediction = weights * X
    error = prediction - y
    gradient = (2/n) * X.T.dot(error)
    weights -= learning_rate * gradient
    
print(f"Optimized weight: {weights:.4f}")`,
  },
];

const suggestedQuestions = [
  "What is overfitting?",
  "Explain bias vs variance",
  "How do neural networks learn?",
  "What is a loss function?",
];

export default function AIBuddy() {
  const [activeQ, setActiveQ] = useState(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-violet-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-4">
              🤖 AI Buddy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Your Personal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                AI Mentor
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Stuck on a concept? Ask AI Buddy anything. Get plain-language
              explanations, real-world analogies, and Python code — instantly.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid lg:grid-cols-5 gap-6 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Chat window */}
          <SectionReveal delay={100}>
            <div className="lg:col-span-3 rounded-2xl bg-white shadow-xl shadow-violet-100/40 border border-gray-100 overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-indigo-600">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    AI Buddy
                  </div>
                  <div className="text-[10px] text-white/70">
                    Always here to help · Powered by AI
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-white/70">Online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 max-h-[480px] overflow-y-auto">
                {chatMessages.map((msg, i) =>
                  msg.role === "user" ? (
                    <div key={i} className="flex justify-end">
                      <div className="max-w-[85%] sm:max-w-[75%] bg-violet-600 text-white rounded-2xl rounded-br-md px-4 py-2.5 text-sm">
                        {msg.text}
                      </div>
                    </div>
                  ) : (
                    <div key={i} className="flex gap-2.5 sm:gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center mt-1">
                        <span className="text-xs">🤖</span>
                      </div>
                      <div className="flex-1 space-y-2.5">
                        <div className="bg-gray-50 rounded-2xl rounded-bl-md px-4 py-2.5 text-sm text-gray-700">
                          {msg.text}
                        </div>

                        {/* Detail cards */}
                        {msg.details && (
                          <div className="space-y-2">
                            {msg.details.map((d, j) => (
                              <div
                                key={j}
                                className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 rounded-xl px-3.5 py-2.5"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-sm">{d.icon}</span>
                                  <span className="text-[11px] sm:text-xs font-bold text-violet-700">
                                    {d.label}
                                  </span>
                                </div>
                                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                                  {d.content}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Code block */}
                        {msg.code && (
                          <div className="rounded-xl overflow-hidden border border-gray-200">
                            <div className="flex items-center justify-between px-3 py-1.5 bg-gray-800">
                              <span className="text-[10px] text-gray-400 font-mono">
                                Python
                              </span>
                              <span className="text-[10px] text-gray-500">
                                📋 Copy
                              </span>
                            </div>
                            <pre className="p-3 sm:p-4 bg-gray-900 text-[10px] sm:text-xs text-green-400 font-mono overflow-x-auto leading-relaxed">
                              {msg.code}
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Input bar */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm">
                  <input
                    type="text"
                    placeholder="Ask AI Buddy anything about ML..."
                    className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                    readOnly
                  />
                  <button className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center hover:bg-violet-700 transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right sidebar – features + suggested questions */}
          <SectionReveal delay={300}>
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {/* Capabilities */}
              <div className="rounded-2xl bg-white border border-gray-100 shadow-lg shadow-violet-50/50 p-5 sm:p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3 sm:mb-4">
                  What AI Buddy Can Do
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      icon: "💡",
                      title: "Plain-Language Explanations",
                      desc: "Every concept broken down simply",
                    },
                    {
                      icon: "🐍",
                      title: "Python Code Examples",
                      desc: "Working code snippets on demand",
                    },
                    {
                      icon: "🌍",
                      title: "Real-World Analogies",
                      desc: "Relatable examples that click",
                    },
                    {
                      icon: "📊",
                      title: "Step-by-Step Breakdowns",
                      desc: "Complex → simple, every time",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center text-sm">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-800">
                          {item.title}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500">
                          {item.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suggested questions */}
              <div className="rounded-2xl bg-white border border-gray-100 shadow-lg shadow-violet-50/50 p-5 sm:p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">
                  Try Asking...
                </h3>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveQ(i)}
                      className={`text-[11px] sm:text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                        activeQ === i
                          ? "bg-violet-100 border-violet-300 text-violet-700"
                          : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-violet-50 hover:border-violet-200 hover:text-violet-600"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
