export default function Certifications() {
  const certifications = [
    {
      name: "Master the Coding Interview: Data Structures and Algorithms",
      issuer: "Udemy",
      date: "2024",
      description: "Udemy",
    },
    {
      name: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Udemy",
    },
    {
      name: "The Complete Flutter Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Udemy",
    },
    {
      name: "Advanced Levels",
      issuer: "Cambridge",
      date: "2021",
      description: "Cambridge",
    },
    {
      name: "Ordinary Levels",
      issuer: "Cambridge",
      date: "2019",
      description: "Cambridge",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Certifications & Education
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Continuous learning and professional development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black p-[1px] rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
            >
              <div className="bg-black rounded-lg p-6 h-full flex flex-col">
                <h3 className="text-lg font-bold mb-4 text-white group-hover:text-gray-300 transition-colors">
                  {cert.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {cert.issuer}
                  </p>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-gray-600 to-gray-500"></div>
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors">
                    {cert.date}
                  </p>
                </div>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors mt-auto">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
