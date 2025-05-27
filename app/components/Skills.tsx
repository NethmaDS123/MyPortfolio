export default function Skills() {
  const skillGroups = [
    {
      name: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "Dart"],
    },
    {
      name: "Frontend",
      skills: ["React", "NextJS", "Tailwind CSS", "jQuery"],
    },
    {
      name: "Backend",
      skills: ["Node", "Express", "SpringBoot", "FastAPI", "Flask"],
    },
    {
      name: "Mobile",
      skills: ["Flutter", "React Native", "Swift", "Kotlin"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "PostgreSQL", "SQLite", "Firebase"],
    },
    {
      name: "Cloud & Storage",
      skills: ["AWS", "GCP", "AWS S3", "MongoDB Atlas"],
    },
    {
      name: "DevOps",
      skills: ["Git", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      name: "AI & ML",
      skills: ["TensorFlow", "LLMs", "Machine Learning", "Neural Networks"],
    },
    {
      name: "Architecture",
      skills: ["Microservices", "REST APIs", "OOP"],
    },
    {
      name: "Other",
      skills: ["Cybersecurity", "Unit Testing", "Documentation"],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center tracking-tight">
          My Skills
        </h2>
        <p className="text-gray-200 text-sm text-center mb-12">
          Technologies and tools I work with
        </p>

        <div className="space-y-12">
          {/* Skills list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
            {skillGroups.map((group, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2">
                  {group.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-900 text-gray-200 hover:text-white hover:bg-gray-800 transition-colors rounded-lg text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill bars for key technologies */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <h3 className="text-xl font-bold mb-8 text-center text-white">
              Key Expertise
            </h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { name: "Frontend Development", level: 85 },
                { name: "Backend Development", level: 90 },
                { name: "Mobile Development", level: 85 },
                { name: "DevOps & Cloud", level: 75 },
                { name: "Machine Learning", level: 75 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-900 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
