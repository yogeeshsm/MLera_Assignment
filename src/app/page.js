import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Features from "@/components/Features";
import StoryLearning from "@/components/StoryLearning";
import InteractiveLearning from "@/components/InteractiveLearning";
import AIBuddy from "@/components/AIBuddy";
import HowItWorks from "@/components/HowItWorks";
import WhyDifferent from "@/components/WhyDifferent";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <About />
        <Features />
        <StoryLearning />
        <InteractiveLearning />
        <AIBuddy />
        <HowItWorks />
        <WhyDifferent />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
