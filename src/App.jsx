import { useState } from "react";
import SkillBar from "./components/SkillBar";
import ProjectCard from "./components/ProjectCard";
import { focusAreas, projects } from "./data/data";
import AhmedAdel from "./assets/ahmed.jpg";


export default function App() {
  const [activeFocusId, setActiveFocusId] = useState(focusAreas[2].id); 
  const activeFocus = focusAreas.find((f) => f.id === activeFocusId);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <header className="relative bg-black text-white">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 md:py-24">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              Ahmed Adel
            </h1>
            <p className="text-gray-300 mb-6">Web Developer &amp; Designer</p>
            <a href="#contact"  className="border border-white text-xs tracking-widest uppercase px-5 py-3 w-fit hover:bg-white hover:text-black transition-colors">
              Contact Me
            </a>
          </div>
          <div className="h-64 md:h-auto">
            <img
              src={AhmedAdel}
              alt="Portrait"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </header>

      {/* About */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-16 max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl">About me</h2>
        <div className="md:col-span-2">
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
           Full-Stack Developer with hands-on experience building scalable web applications, e-commerce
platforms, and admin dashboards using React, Angular, Next.js, Node.js, and Express.js. Proficient in
RESTful API development, JWT/Cookie-based authentication, and OAuth 2.0 security. Experienced in
cloud service integration and crafting high-performance user interfaces with advanced GSAP animations.
Additional background in Unity game development. Passionate about delivering robust, secure, and
visually engaging digital products.
          </p>
          <a href="https://drive.google.com/file/d/1PXF2JlDhUokIvbOzLV44hRlTB8N7U3dB/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="border border-gray-800 text-xs tracking-widest uppercase px-5 py-3 hover:bg-gray-800 hover:text-white transition-colors">
            Download Resume
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-900 text-white px-8 py-16">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl mb-4">Skills</h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
       • Front-End: HTML5, CSS3, JavaScript (ES6+),
React.js, Next.js, Redux, Responsive Design, GSAP
• Back-End: Node.js, Express.js, RESTful APIs
• Databases: MongoDB, MySQL
• Tools & Others: Git/GitHub,

Soft Skills
• Problem-Solving & Debugging
• Teamwork & Collaboration
• Adaptability & Continuous Learning
• Time Management & Meeting Deadlines
• Communication & Clear Documentation
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="uppercase text-sm tracking-widest mb-4 pb-2 border-b border-gray-700 w-fit">
              My Focus
            </h3>
            <ul className="space-y-2 text-sm">
              {focusAreas.map((focus) => (
                <li key={focus.id}>
                  <button
                    onClick={() => setActiveFocusId(focus.id)}
                    className={`text-left transition-colors ${
                      focus.id === activeFocusId
                        ? "text-white font-medium"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {focus.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {activeFocus.skills.map((skill) => (
              <SkillBar key={`${activeFocus.id}-${skill.name}`} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl mb-8">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard  key={project.title} title={project.title} index={index}  Link={project.Link}/>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-8 py-8" id="contact">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-2">
              Get in touch
            </h4>
            <a href="mailto:ahmedadeldiv@gmail.com" className="text-xs text-gray-400 block">ahmedadeldiv@gmail.com</a>
            <a  href="tel:+201090324648" className="text-xs text-gray-400">109-032-4648</a>
          </div>
          <a href="https://drive.google.com/file/d/1PXF2JlDhUokIvbOzLV44hRlTB8N7U3dB/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="border border-white text-xs tracking-widest uppercase px-5 py-3 hover:bg-white hover:text-black transition-colors">
            Contact Me
          </a>
          <div className="flex gap-4 items-center text-sm">
            <a href="https://www.linkedin.com/in/ahmed-adel-said/">in</a>
            <a href="https://www.linkedin.com/in/ahmed-adel-said/">f</a>
            <a href="https://www.linkedin.com/in/ahmed-adel-said/">t</a>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-500 mt-6">
          Copyright © 2026 KR
        </p>
      </footer>
    </div>
  );
}
