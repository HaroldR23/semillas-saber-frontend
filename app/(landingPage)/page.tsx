"use client";

import { useState } from "react";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import SubjectsSection from "./components/SubjectsSection/SubjectsSection";
import AboutUs from "./components/AboutUst";

const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  return (
    <div>
      <Hero />
      <AboutUs />
      <SubjectsSection />
      <HowItWorks />
      <Services />
      <Benefits />
      <Pricing onSelectPlan={(plan) => setSelectedPlan(plan)} />
      <Contact selectedPlan={selectedPlan} onClearPlan={() => setSelectedPlan(null)} />
    </div>
  );
};

export default Home;
