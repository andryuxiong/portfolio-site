// src/components/Section.jsx
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-24 px-4 first:pt-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-purple-300 mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}