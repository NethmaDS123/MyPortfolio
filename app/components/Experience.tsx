"use client";

export default function Experience() {
  const experiences = [
    {
      title: "Founder & CTO",
      company: "Elevate",
      period: "October 2024 - Present",
      location: "London, UK",
      description: [
        "Built and launched Elevate, an AI-driven SaaS career development platform for software engineers through AI driven features reducing users' career-preparation time by 50% using Next.js, TypeScript, TailwindCSS frontend.",
        "Orchestrated a scalable and secure backend leveraging latest LLMs, FastAPI (Python) and MongoDB, integrated with robust CI/CD pipelines, ensuring rapid development cycles and seamless deployments.",
        "Secured competitive funding from the Ignite Fund of £500, validating Elevate innovation and potential to significantly impact student and professional communities.",
        "Reduced per-interaction LLM cost by 93 % (from $0.15 to $0.01) by re-architecting Elevate's AI agents, replacing CrewAI with lightweight, structured-prompt agents without degrading the output.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "FastAPI",
        "MongoDB",
        "LLM",
        "Python",
      ],
    },
    {
      title: "Software Engineer",
      company: "BYNERY",
      period: "March 2024 - September 2024",
      location: "Remote | Amsterdam",
      description: [
        "Engineered scalable, responsive web platforms for diverse international clients using Next.js, TypeScript, and Tailwind CSS, collaborating remotely across multiple time zones using Agile/Scrum methods to ensure continuous delivery and rapid iteration.",
        "Developed a sophisticated, interactive geospatial mapping tool integrating environmental datasets, supporting seamless data visualization and analytics for over a 1,000 active user platform, utilizing Flask, JavaScript, and PostgreSQL.",
        "Optimized and revitalized 50+ years of a client's legacy data by implementing comprehensive data cleaning and preprocessing pipelines with Python (Pandas), resulting in 100% dataset usability and integration into robust PostgreSQL database systems.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Flask",
        "PostgreSQL",
        "Python",
        "Pandas",
        "JavaScript",
      ],
    },
    {
      title: "Bachelor of Science (Honours)",
      company: "University of Westminster",
      period: "September 2022 - July 2025",
      location: "London, UK",
      description: ["Major in Computer Science", "First Class Honours"],
      technologies: [],
    },
  ];

  const awards = [
    {
      title: "Microsoft 3rd Place Hackathon Winner",
      date: "December 2024",
      location: "London, UK",
      description:
        "Led a team of 5 to secure 3rd place at a Microsoft-hosted Hackathon by developing an AI-powered study platform tailored for neurodiverse students, focusing on personalized learning support and accessibility.",
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center tracking-tight">
          My Experience
        </h2>
        <p className="text-gray-200 text-sm text-center mb-12">
          Professional journey and achievements
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot and line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-800/50 via-emerald-600/50 to-emerald-800/50"></div>
              )}
              <div className="absolute left-6 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 transform -translate-x-1/2 z-10 ring-4 ring-black"></div>

              <div className="flex flex-col md:flex-row gap-6 ml-12">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-emerald-400 font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-200 mb-1">{exp.period}</p>
                  <p className="text-sm text-gray-300">{exp.location}</p>
                </div>
                <div className="md:w-2/3">
                  <div className="space-y-3">
                    {exp.description.map((item, i) => (
                      <div
                        key={i}
                        className="flex group hover:bg-gray-900/50 p-2 rounded-lg transition-all duration-300"
                      >
                        <div className="mr-3 text-emerald-400 mt-1">▹</div>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-200 rounded-lg text-xs font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        {awards.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-8 text-center text-white">
              Awards & Recognition
            </h3>
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gray-900/80 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
                  <h4 className="text-lg font-bold text-white mb-2 md:mb-0">
                    {award.title}
                  </h4>
                  <div className="text-emerald-400 text-sm font-medium">
                    {award.location} - {award.date}
                  </div>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
