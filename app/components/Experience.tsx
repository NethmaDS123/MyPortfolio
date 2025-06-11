"use client";

export default function Experience() {
  const experiences = [
    {
      title: "Founder & Software Engineer",
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
      title: "Software Engineer Intern",
      company: "BYNERY",
      period: "March 2024 - September 2024",
      location: "Remote | Amsterdam | Sri Lanka",
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center tracking-tight">
          My Experience
        </h2>
        <p className="text-gray-200 text-base text-center mb-12">
          Professional journey and achievements
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div>
              <div className="absolute left-0 top-6 w-3 h-3 bg-emerald-500 rounded-full transform -translate-x-1"></div>

              <div className="ml-8">
                <div className="bg-gray-900/80 p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-emerald-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-0 lg:text-right">
                      <p className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full inline-block">
                        {exp.period}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="mr-3 text-emerald-400 mt-1.5">▹</div>
                        <p className="text-gray-200 text-base leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {exp.technologies.length > 0 && (
                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm font-medium border border-gray-700 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        {awards.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-800">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">
              Awards & Recognition
            </h3>

            <div className="max-w-4xl mx-auto">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gray-900/80 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-3">
                    <h4 className="text-xl font-bold text-white mb-2 lg:mb-0">
                      {award.title}
                    </h4>
                    <div className="flex flex-col lg:items-end space-y-1">
                      <span className="text-emerald-400 text-base font-medium">
                        {award.location}
                      </span>
                      <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">
                        {award.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
