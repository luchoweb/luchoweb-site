import Header from "./components/Header";
import Hero from "./sections/Hero";
import Shift from "./sections/Shift";
import Value from "./sections/Value";
import Process from "./sections/Process";
import Production from "./sections/Production";
import Books from "./sections/Books";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Shift />
        <Value />
        <Process />
        <Production />
        <Books />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
