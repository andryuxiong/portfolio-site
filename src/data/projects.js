// src/data/projects.js
export default [
    {
      title: "AI Medicare Assistant",
      description:
        "Voice-first assistant that triages symptoms and suggests over-the-counter meds, built with OpenAI & Spring Boot.",
      tech: ["React", "Spring Boot", "OpenAI API", "Tailwind"],
      repo: "https://github.com/andryuxiong/ai-medicare",
      live: "https://ai-medicare.vercel.app",
      image: "assets/ai-medicare.png", // put a placeholder in public/assets later
    },
    {
      title: "SolarWinds Hack Analysis", // test project will change later
      description:
        "Interactive dashboard tracing the 2020 SolarWinds supply-chain attack path, highlighting mitigations.",
      tech: ["Python", "Plotly", "Pandas"],
      repo: "https://github.com/andryuxiong/solarwinds-analysis",
      live: "",
      image: "assets/solarwinds.png",
    },
    // add more objects here anytime 
  ];