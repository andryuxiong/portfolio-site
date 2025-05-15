import Section from "./Section";

const jobs = [
  {
    role: "Personal Care Assistant",
    company: "Private Family",
    duration: "Feb 2023 – Mar 2024",
    bullets: [
      "Cared for children with autism, preparing meals and managing daily routines",
      "Developed patience, empathy, and clear communication under pressure",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {jobs.map((job) => (
        <article key={job.role} className="mb-8">
          <h3 className="text-xl font-semibold">
            {job.role} · {job.company}
          </h3>
          <p className="text-sm text-slate-400 mb-2">{job.duration}</p>
          <ul className="list-disc list-inside space-y-1">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  );
}