"use client";

import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import SubjectsSection from "./components/SubjectsSection/SubjectsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <SubjectsSection />
      <HowItWorks />
      <Services />
      <Benefits />
      <Pricing onSelectPlan={(plan) => console.log(`Selected plan: ${plan}`)} />
    </div>
  );
};

export default Home;
