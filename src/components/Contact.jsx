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
      href: "https://www.linkedin.com/in/andrew-xiong02/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <Section id="contact" title="Get in touch">
      <ul className="space-y-4">
        {contacts.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              aria-label={label}        // screen render reads the correct context, ie. github or linkedin
              href={href}               // pulls the correct url from each object
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