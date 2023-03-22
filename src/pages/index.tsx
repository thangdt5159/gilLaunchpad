import About from "../components/About";
import Cta from "../components/Cta";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import UpcomingProject from "../components/UpcomingProject";

export default function Home() {
  return (
    <main className="relative text-bs font-500 bg-bg text-lightGray leading-[1.8] md:mt-[85px]">
      <Navbar />
      <Header />
      <UpcomingProject />
      <Projects />
      <Feature />
      <About />
      <Section6 />
      <Section7 />
      <Cta />
      <Footer />
    </main>
  );
}
