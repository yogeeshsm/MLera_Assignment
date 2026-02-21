import SectionReveal from "./SectionReveal";

const stories = [
  {
    emoji: "🏗️",
    scenario: "The Concrete Engineer",
    concept: "Linear Regression",
    hook: "An engineer needs to predict concrete strength before pouring. Instead of guessing, she uses historical data to build a prediction model.",
    whatYouLearn: [
      "How data becomes predictions",
      "What a best-fit line really means",
      "Why minimizing error matters",
    ],
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    emoji: "🩺",
    scenario: "The Medical Detector",
    concept: "Classification",
    hook: "A doctor wants to automatically classify tumors as benign or malignant based on cell measurements. Logistic regression to the rescue.",
    whatYouLearn: [
      "Binary classification explained simply",
      "How probability drives decisions",
      "The sigmoid function — intuition first",
    ],
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    emoji: "🏠",
    scenario: "The House Price Guru",
    concept: "Multiple Regression",
    hook: "A real estate analyst wants to consider bedrooms, location, AND age to predict house prices — not just one factor. Time for multiple features.",
    whatYouLearn: [
      "Handling multiple input features",
      "Feature importance and selection",
      "From simple to multivariate models",
    ],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

export default function StoryLearning() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-4">
              📖 Story-Based Learning
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Learn ML Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Real Stories
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Every concept starts with a real-world scenario. First you see{" "}
              <strong>why</strong> it matters, then you learn{" "}
              <strong>how</strong> it works.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {stories.map((story, i) => (
            <SectionReveal key={i} delay={i * 120}>
              <div
                className={`group relative rounded-2xl bg-white border ${story.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col`}
              >
                {/* Top gradient accent */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${story.gradient}`}
                />

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-xl shadow-sm">
                      {story.emoji}
                    </span>
                    <div>
                      <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Scenario
                      </div>
                      <div className="text-base sm:text-lg font-bold text-gray-900">
                        {story.scenario}
                      </div>
                    </div>
                  </div>

                  {/* Concept badge */}
                  <span
                    className={`inline-flex self-start items-center px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${story.bg} text-${story.color}-700 mb-3`}
                  >
                    Teaches: {story.concept}
                  </span>

                  {/* Hook */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {story.hook}
                  </p>

                  {/* What you'll learn */}
                  <div className="border-t border-gray-100 pt-3 sm:pt-4">
                    <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      What you&apos;ll learn
                    </div>
                    <ul className="space-y-1.5">
                      {story.whatYouLearn.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-600"
                        >
                          <svg
                            className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-${story.color}-500`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom callout */}
        <SectionReveal delay={400}>
          <div className="mt-10 sm:mt-14 text-center">
            <p className="text-sm sm:text-base text-gray-500">
              📚 Every module follows this pattern:{" "}
              <span className="font-semibold text-gray-700">
                Story → Intuition → Math → Code → Practice
              </span>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
