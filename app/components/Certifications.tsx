"use client";

export default function Certifications() {
  const certifications = [
    {
      title: "Master the Coding Interview: Data Structures and Algorithms",
      issuer: "Udemy",
      date: "2024",
      description: "Udemy",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Udemy",
    },
    {
      title: "The Complete Flutter Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Udemy",
    },
    {
      title: "Advanced Levels",
      issuer: "Cambridge",
      date: "2021",
      description: "Cambridge",
    },
    {
      title: "Ordinary Levels",
      issuer: "Cambridge",
      date: "2019",
      description: "Cambridge",
    },
  ];

  return (
    <section id="certifications" className="py-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center tracking-tight">
          Certifications & Education
        </h2>
        <p className="text-gray-200 text-sm text-center mb-12">
          Continuous learning and professional development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black p-[1px] rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
            >
              <div className="bg-black rounded-lg p-4 h-full">
                <div className="flex flex-col mb-3">
                  <h3 className="text-base font-bold text-white group-hover:text-gray-300 transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-emerald-400 text-xs font-medium">
                      {cert.issuer}
                    </p>
                    <span className="text-gray-400 text-xs">{cert.date}</span>
                  </div>
                </div>

                {cert.description && cert.description !== cert.issuer && (
                  <p className="text-gray-400 text-xs">{cert.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
