"use client";

import { useState } from "react";

export default function Certifications() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const certifications = [
    {
      title: "Master the Coding Interview: Data Structures and Algorithms",
      issuer: "Udemy",
      date: "2024",
      description:
        "Comprehensive course covering data structures and algorithms",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-abb8323f-cd2b-4909-bc23-cdcef96f0322/",
      type: "url",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Full-stack web development bootcamp",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-b366ccf4-950b-4593-9e2b-bb2e2735a44f/",
      type: "url",
    },
    {
      title: "The Complete Flutter Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Mobile app development with Flutter",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-34dcc885-8b45-45d8-b75b-226109c2f325/",
      type: "url",
    },
    {
      title: "Microsoft Student Hackathon Winners",
      issuer: "Microsoft",
      date: "2023",
      description: "First place in the Microsoft Student Hackathon",
      credentialUrl: "./Nethma_K_J_P_W_G_De_Silva_Certificate.pdf",
      type: "pdf",
    },
    {
      title: "Advanced Levels",
      issuer: "Cambridge",
      date: "2021",
      description:
        "A Level qualifications in Mathematics, Physics, and Chemistry",
    },
    {
      title: "Ordinary Levels",
      issuer: "Cambridge",
      date: "2019",
      description: "O Level qualifications with 9 A passes",
    },
  ];

  return (
    <section id="certifications" className="py-16 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center tracking-tight">
          Certifications & Education
        </h2>
        <p className="text-gray-200 text-base text-center mb-12">
          Continuous learning and professional development
        </p>

        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-4 w-full max-w-4xl">
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-black hover:text-gray-700 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
              <iframe
                src={selectedPdf}
                className="w-full h-[80vh]"
                title="Certificate PDF"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900/80 p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-emerald-400 text-sm font-medium">
                    {cert.issuer}
                  </p>
                  <span className="text-gray-400 text-xs bg-gray-800 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                {cert.description && (
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                )}

                {cert.credentialUrl && (
                  <button
                    onClick={() => {
                      if (cert.type === "pdf") {
                        setSelectedPdf(cert.credentialUrl);
                      } else {
                        window.open(cert.credentialUrl, "_blank");
                      }
                    }}
                    className="text-sm text-emerald-400 hover:text-emerald-300 underline mt-auto text-left transition-colors"
                  >
                    View Credentials
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
