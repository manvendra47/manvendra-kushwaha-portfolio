import { NavBar, Footer } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <NavBar />
      
      <main className="flex flex-col mx-auto bg-white border-x border-slate-200 min-h-screen max-w-7xl">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
      </main>
      
      <Footer />
    </div>
  );
}
