import { AboutSection } from "./components/AboutSection";
import { AdvertisorSection } from "./components/AdvertisorSection";
import { AdviceSection } from "./components/AdviceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Nav } from "./components/Nav";
import { ReviewSection } from "./components/ReviewSection";

const App = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <AdvertisorSection />
      <ReviewSection />
      <AdviceSection />
      <Footer />
    </>
  );
};

export default App;
