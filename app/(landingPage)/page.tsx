import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SubjectsSection from "./components/SubjectsSection/SubjectsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <SubjectsSection />
      <HowItWorks />
    </div>
  );
};

export default Home;
