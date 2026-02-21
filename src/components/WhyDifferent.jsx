import Image from "next/image";
import SectionReveal from "./SectionReveal";

const traditional = [
  { text: "Random, unstructured videos", icon: "✕" },
  { text: "Passive, lecture-based learning", icon: "✕" },
  { text: "No clarity on terminology", icon: "✕" },
  { text: "No clear progression path", icon: "✕" },
];

const mlera = [
  { text: "Structured, curated roadmap", icon: "✓" },
  { text: "Interactive, hands-on learning", icon: "✓" },
  { text: "Built-in ML lexicon for clarity", icon: "✓" },
  { text: "Beginner-to-advanced progression", icon: "✓" },
];

export default function WhyDifferent() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-4">
              Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Why MLera is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Different
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              See how MLera compares to traditional ML learning platforms.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Traditional */}
          <SectionReveal delay={100}>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Traditional Platforms</h3>
              </div>
              <ul className="space-y-4">
                {traditional.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold">
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base text-gray-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* MLera */}
          <SectionReveal delay={250}>
            <div className="rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-5 sm:p-6 md:p-8 relative overflow-hidden h-full">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-violet-200/30 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-4 sm:mb-6 relative">
                <Image
                  src="/logo-light.png"
                  alt="MLera"
                  width={100}
                  height={36}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
              <ul className="space-y-4 relative">
                {mlera.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">
                      {item.icon}
                    </span>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
