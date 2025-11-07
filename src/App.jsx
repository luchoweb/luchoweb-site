import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="landing">
      <Header />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
