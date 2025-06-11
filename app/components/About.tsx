"use client";

import { useState } from "react";

export default function About() {
  const [pdfLoaded, setPdfLoaded] = useState(false);

  return (
    <section id="about" className="py-16 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center tracking-tight">
          About Me
        </h2>
        <p className="text-gray-200 text-base text-center mb-12">
          A little bit about myself and what I&apos;m up to
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Resume */}
          <div className="lg:w-1/3">
            <div className="bg-gray-900/80 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-center text-white">
                My Resume
              </h3>
              <div className="aspect-[3/4] bg-gray-800 rounded-lg flex items-center justify-center mb-6 overflow-hidden relative shadow-lg">
                {/* Direct PDF embed */}
                <iframe
                  src="/NethmaDeSilvaResume.pdf#view=FitH"
                  className="w-full h-full"
                  onLoad={() => setPdfLoaded(true)}
                  style={{
                    backgroundColor: "#1f2937",
                    opacity: pdfLoaded ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                ></iframe>

                {/* Loading state/fallback */}
                {!pdfLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <svg
                      className="animate-spin h-8 w-8 mb-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="text-sm">Loading PDF...</span>
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <a
                  href="/NethmaDeSilvaResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-emerald-600 text-white hover:bg-emerald-500 px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
                >
                  Download Resume
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - About content */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-base text-gray-200 leading-relaxed">
                  I&apos;m a Software Engineer with nearly{" "}
                  <span className="text-emerald-400 font-medium">
                    4 years of experience
                  </span>{" "}
                  across web, mobile, and backend, machine learning, DevOps, and
                  cybersecurity. I&apos;m graduating with a{" "}
                  <span className="text-emerald-400 font-medium">
                    BSc in Computer Science
                  </span>{" "}
                  from the University of Westminster in July 2025.
                </p>
                <p className="text-base text-gray-200 leading-relaxed">
                  Throughout my journey, I&apos;ve worked on diverse projects
                  ranging from{" "}
                  <span className="text-emerald-400 font-medium">
                    AI-driven SaaS platforms
                  </span>{" "}
                  and data-driven mobile apps to cloud deployments and
                  security-focused solutions. I thrive on solving complex
                  problems, building robust systems, and continuously learning
                  new technologies to stay at the leading edge of the field.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">
                  What I&apos;m Up To Right Now
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 text-emerald-400 mt-1.5">▹</div>
                    <p className="text-gray-200 text-base leading-relaxed">
                      Building Elevate, an AI-driven SaaS career development
                      platform for software engineers
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-emerald-400 mt-1.5">▹</div>
                    <p className="text-gray-200 text-base leading-relaxed">
                      Developing Pingpals, a real-time event management and
                      organisation social app with my team
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-emerald-400 mt-1.5">▹</div>
                    <p className="text-gray-200 text-base leading-relaxed">
                      Practicing daily LeetCode and mastering system design to
                      prepare for software engineering roles
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-emerald-400 mt-1.5">▹</div>
                    <p className="text-gray-200 text-base leading-relaxed">
                      Exploring the latest developments in LLMs and their
                      applications in productivity tools
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-emerald-400 mt-1.5">▹</div>
                    <p className="text-gray-200 text-base leading-relaxed">
                      Graduating with a First Class Honours in Computer Science
                      in July
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-emerald-400 mt-1.5">▹</div>
                    <p className="text-gray-200 text-base leading-relaxed">
                      Looking for full-time software engineering opportunities
                      starting July 2025
                    </p>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">
                  When I&apos;m Not Coding
                </h3>
                <p className="text-base text-gray-200 leading-relaxed">
                  Outside of coding, I love watching anime, UFC, and boxing.
                  I&apos;m passionate about working out and reading, and I also
                  work as a part-time chef. I&apos;m also still exploring
                  everything London and the UK has to offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
