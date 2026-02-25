import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
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
    </div>
  );
};

export default Home;
