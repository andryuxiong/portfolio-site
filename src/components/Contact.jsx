// src/components/Contact.jsx
import Section from "./Section";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  const contacts = [
    {
      label: "andryu@example.com",
      href: "mailto:andryu@example.com",
      icon: <FaEnvelope />,
    },
    {
      label: "GitHub",
      href: "https://github.com/andryuxiong",
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/andryuxiong",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <Section id="contact" title="Get in touch">
      <ul className="space-y-4">
        {contacts.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              aria-label="Send email"
                 href="mailto:andryu@example.com"
              
              target="_blank"
              className="flex items-center space-x-3 text-slate-300 hover:text-purple-400 transition-colors"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-lg underline">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}