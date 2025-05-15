import Experience from "./components/Experience.jsx";
export default function App() {
  return (
    <>
      {/* Hero */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Andrew Xiong</h1>
        <p className="text-lg mb-8">Computer Science student &amp; aspiring Software Engineer</p>
        <h1 className="text-4xl text-emerald-500">Hello Tailwind</h1>
        <a
          href="/Andrew_Xiong_Resume.pdf"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
        >
          Download Résumé (PDF)
        </a>
      </main>

      {/* Experience */}
      <Experience />
    </>
  );
}