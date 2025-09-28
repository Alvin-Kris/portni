import EducationalBackground from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectCard from "./components/Projects";
import ContactSection from "./components/Contact";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-primary">
      <NavBar />
      <main className="flex-grow bg-gray-900">
        <Hero />
        <EducationalBackground />
        <ProjectCard />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
