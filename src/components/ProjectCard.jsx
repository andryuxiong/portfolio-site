export default function ProjectCard({ project }) {
    const { title, description, tech, repo, live, image } = project;
  
    return (
      <article className= " relative group bg-slate-800 rounded-xl overflow-hidden shadow-lg transition hover:-translate-y-1">

        <span 
            className= "pointer-events-none absolute inset-0 rounded-x1 opacity-0 group-hover:opacity-100 transition bg-accent/20 blur2x1" 
            />
        
        <img
          src={image}
          alt={title + " screenshot"}
          className="h-48 w-full object-cover"
        />
  
        <div className="p-5 flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">{title}</h3>
          <p className="text-slate-300 flex-grow">{description}</p>
  
          {/* Tech stack badges */}
          <ul className="flex flex-wrap gap-2 my-4">
            {tech.map((t) => (
              <li
                key={t}
                className="text-xs bg-slate-700 px-2 py-1 rounded border border-slate-600"
              >
                {t}
              </li>
            ))}
          </ul>
  
          {/* Links */}
          <div className="mt-auto flex space-x-4">
            {live && (
              <a
                href={live}
                target="_blank"
                className="text-sm text-purple-300 hover:text-purple-400 underline"
              >
                Live
              </a>
            )}
            <a
              href={repo}
              target="_blank"
              className="text-sm text-purple-300 hover:text-purple-400 underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    );
  }