import Experience from "./components/Experience.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar /> {/* NEW */}

        {/* Decorative gradient blob */}
  <div
    className="absolute -top-16 -z-10 h-[500px] w-[500px] 
               bg-accent opacity-30 rounded-full blur-3xl
               left-1/2 -translate-x-1/2"
  />

      
  {/* HERO */}
  <main className="pt-40 pb-24 flex flex-col items-center text-center font-sora">
    <h1 className="text-6xl md:text-7xl font-semibold tracking-wide mb-6">
      Andrew Xiong
    </h1>
    <p className="text-lg md:text-xl max-w-xl text-slate-600 mb-8">
      Computer Science student &amp; aspiring Security Engineer
    </p>
    <div className="flex gap-4">
      <a href="/Andrew_Xiong_Resume.pdf" className="btn-primary">
        View Résumé
      </a>
      <a href="#projects" className="btn-primary bg-white text-accent hover:bg-accent/20">
        See Projects
      </a>
    </div>
  </main>
  
      {/* Experience */}
      <Experience />

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */} 
      <Contact />
    </>
  );
}