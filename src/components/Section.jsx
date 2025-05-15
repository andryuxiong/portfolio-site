export default function Section({ id, title, children }) {
    return (
      <section id={id} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          {children}
        </div>
      </section>
    );
  }