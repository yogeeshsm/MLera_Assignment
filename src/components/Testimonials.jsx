import SectionReveal from "./SectionReveal";

const testimonials = [
  {
    name: "Ananya S.",
    role: "CS Undergrad, IIIT Dharwad",
    avatar: "AS",
    text: "I tried learning ML from YouTube for months and got nowhere. MLera's story-based approach made everything click. The concrete strength example for linear regression? *Chef's kiss* — I'll never forget how regression works now.",
    highlight: "story-based approach made everything click",
    color: "violet",
  },
  {
    name: "Rahul M.",
    role: "ECE Student, 3rd Year",
    avatar: "RM",
    text: "The AI Buddy is incredible. I asked it to explain backpropagation and it gave me an analogy about a factory assembly line. Then it showed me the Python code. I went from confused to confident in 10 minutes.",
    highlight: "confused to confident in 10 minutes",
    color: "blue",
  },
  {
    name: "Priya K.",
    role: "Self-taught ML Enthusiast",
    avatar: "PK",
    text: "What I love most is the ML Lexicon. Every time I see a scary term like 'stochastic' or 'regularization', I get a simple definition, an analogy, AND an example. No more imposter syndrome!",
    highlight: "No more imposter syndrome",
    color: "emerald",
  },
  {
    name: "Vikram T.",
    role: "Data Science Intern",
    avatar: "VT",
    text: "The interactive visualizations are game-changing. Watching the best-fit line adjust in real-time while the cost function drops — that's when gradient descent truly made sense to me.",
    highlight: "that's when gradient descent truly made sense",
    color: "orange",
  },
  {
    name: "Sneha D.",
    role: "CS Grad Student",
    avatar: "SD",
    text: "MLera doesn't just teach you ML — it builds your confidence. The structured paths, achievement system, and quizzes that adapt to your level make learning feel like progress, not pressure.",
    highlight: "learning feel like progress, not pressure",
    color: "pink",
  },
  {
    name: "Arjun B.",
    role: "Physics Background, ML Beginner",
    avatar: "AB",
    text: "Coming from a non-CS background, I was intimidated. But MLera assumes nothing — every term is explained, every step is guided. I built my first ML model in week 2. That was unthinkable before.",
    highlight: "I built my first ML model in week 2",
    color: "violet",
  },
];

const colorMap = {
  violet: { bg: "bg-violet-100", text: "text-violet-700", accent: "bg-violet-500" },
  blue: { bg: "bg-blue-100", text: "text-blue-700", accent: "bg-blue-500" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-700", accent: "bg-emerald-500" },
  orange: { bg: "bg-orange-100", text: "text-orange-700", accent: "bg-orange-500" },
  pink: { bg: "bg-pink-100", text: "text-pink-700", accent: "bg-pink-500" },
};

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-violet-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-4">
              💬 What Learners Say
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Loved by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                ML Learners
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Hear from students who went from confused to confident with
              MLera.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((t, i) => {
            const colors = colorMap[t.color] || colorMap.violet;
            return (
              <SectionReveal key={i} delay={i * 80}>
                <div className="group relative rounded-2xl bg-white border border-gray-100 p-5 sm:p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 h-full flex flex-col">
                  {/* Quote icon */}
                  <svg
                    className="w-8 h-8 text-violet-100 mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>

                  {/* Quote text */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className={`w-9 h-9 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center text-xs font-bold`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
