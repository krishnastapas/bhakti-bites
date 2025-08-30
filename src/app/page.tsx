import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ProductGrid from "../components/ProductGrid";
import ValuesSection from "../components/ValuesSection";
import StorySection from "../components/StorySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <ProductGrid />
      <ValuesSection />
      <StorySection />
      <Footer />
    </main>
  );
}
