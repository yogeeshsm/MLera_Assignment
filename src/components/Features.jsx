import SectionReveal from "./SectionReveal";
import Badge from "./ui/Badge";
import SectionHeader, { Highlight } from "./ui/SectionHeader";
import Button from "./ui/Button";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: "Structured Learning Paths",
    description:
      "Follow a clear, guided roadmap from basics to advanced topics. Every module builds on the last — no guesswork, no gaps.",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Interactive Learning Experience",
    description:
      "Engage with interactive lessons, quizzes, and hands-on exercises. Active learning that keeps you engaged and solidifies understanding.",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Built-in ML Lexicon",
    description:
      "Instantly look up any ML term without leaving the platform. Our integrated lexicon explains jargon in simple, beginner-friendly language.",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Beginner to Advanced Roadmap",
    description:
      "Progress seamlessly from fundamental concepts to advanced ML techniques. A clear trajectory that grows with your knowledge and skills.",
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeader
            badge="Features"
            badgeVariant="violet"
            title={<>Everything You Need to <Highlight>Learn ML</Highlight></>}
            subtitle="MLera combines structured content, interactivity, and clarity into a single platform built for real learning."
            align="center"
          />
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <div className="group relative flex flex-col p-5 sm:p-7 rounded-2xl bg-white ring-1 ring-gray-100 hover:ring-violet-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300 ease-out h-full">
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shrink-0`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Bottom arrow hint */}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore
                  <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Hover gradient bottom bar */}
                <div className={`absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA row */}
        <SectionReveal delay={400}>
          <div className="mt-12 sm:mt-16 flex justify-center">
            <Button href="#how-it-works" variant="outline" size="md">
              See How It Works
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
