"use client";

interface ProjectWithSingleRepo {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

interface ProjectWithMultipleRepos {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  image: string;
  liveLink: string;
  githubLinks: {
    frontend: string;
    backend: string;
  };
}

type Project = ProjectWithSingleRepo | ProjectWithMultipleRepos;

export default function Projects() {
  const featuredProjects: Project[] = [
    {
      title: "ELEVATE",
      subtitle: "Founder & CTO",
      period: "October 2024 - Present",
      location: "London, UK",
      description: [
        "AI-powered career development platform designed to help Computer Science/Software engineering professionals improve their job prospects through personalized guidance and AI-driven features.",
        "Built comprehensive features including resume optimization, interview preparation, projects evaluation, learning pathways, skill benchmarking, gap analysis, and role transitioning guidance.",
        "Developed a scalable microservices architecture using Next.js & TypeScript frontend, FastAPI & MongoDB backend, integrated with AI APIs and CrewAI for modular AI agents.",
        "Secured funding through the Ignite fund, validating the platform's potential to enhance job application success rates through ATS optimization and personalized career recommendations.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "FastAPI",
        "MongoDB",
        "LLM",
        "Python",
      ],
      image: "/elevatepic.png",
      liveLink: "https://elevate-cyan-pi.vercel.app/landing",
      githubLink: "https://github.com/NethmaDS123/Elevate",
    },
    {
      title: "WILDLIFE CONNECT",
      subtitle: "Frontend | Backend",
      period: "October 2023 - April 2024",
      location: "Colombo, SL",
      description: [
        "Led a team of 5 towards the development of a wildlife conservation and social media app for Sri Lanka using Flutter, NodeJS, ExpressJS and MongoDB with features like species identification, recent animal sightings, and wildlife crime reporting.",
        "Achieved 90% accuracy in wildlife species identification using a TensorFlow model, containerized with Docker, managed with Kubernetes, and deployed using Google Cloud Run for scalable and cost-efficient inference.",
        "Engaged 25+ beta users and deployed the app for test users via Google Play Store with an automated CI/CD pipeline.",
      ],
      tech: [
        "Flutter",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "TensorFlow",
        "Docker",
        "Kubernetes",
        "GCP",
      ],
      image: "/placeholder.jpg",
      liveLink: "https://www.youtube.com/watch?v=6gYeV1SxqvA",
      githubLinks: {
        frontend: "https://github.com/NethmaDS123/WildLifeConnect",
        backend: "https://github.com/NethmaDS123/WildLifeConnectBackend",
      },
    },
    {
      title: "PING PALS",
      subtitle: "Co-Founder",
      period: "August 2024 - Present",
      location: "Remote",
      description: [
        "Co-Founded a mobile application which simplifies event creation and coordination for users using Flutter.",
        "Ensured secure and efficient data processing by developing a backend system using Spring Boot, OAuth to handle authentication with user sessions, profiles, friend lists, and event scheduling.",
      ],
      tech: ["Flutter", "Spring Boot", "OAuth", "Java"],
      image: "/placeholder.jpg",
      liveLink: "#",
      githubLink: "https://github.com/DimanthaG/PingPals",
    },
    {
      title: "TRAVELTALES",
      subtitle: "Full-Stack Tourism Blog Platform",
      period: "2024",
      location: "London, UK",
      description: [
        "Built a full-stack travel blog application following the MVC pattern, enabling secure user authentication, post creation, comments, likes/dislikes, and personalized user feeds.",
        "Designed a polyglot microservice architecture integrating a Node.js (Express) main app with a Flask-based internal API that securely fetches country metadata (flags, capitals, currencies) from RestCountries.",
        "Developed the microservice with secure API key management, usage tracking, and input validation; persisted data using SQLite with SQLAlchemy (3NF schema).",
        "Implemented JWT-based auth with bcrypt hashing, Axios-based internal API communication, and RESTful endpoint design.",
        "Deployed multi-service system using Docker Compose to orchestrate isolated containers for backend and microservice layers.",
      ],
      tech: [
        "Node.js",
        "Express",
        "Flask",
        "SQLite",
        "Docker",
        "JWT",
        "Polyglot Architecture",
        "MVC",
      ],
      image: "/placeholder.jpg",
      liveLink:
        "https://drive.google.com/file/d/16EZAPgmzLJ_XWH7yYDpBfFSRGuNJXZsO/view?usp=sharing",
      githubLink: "#",
    },
  ];

  const otherProjects = [
    {
      title: "TOURIST UTILITY APP",
      subtitle: "iOS Developer",
      period: "October 2024 - December 2024",
      location: "London, UK",
      description: [
        "Developed a SwiftUI-based Tourist Utility App that displays real-time weather, air quality, and top 5 local attractions using OpenWeatherMap API and MapKit.",
        "Implemented dynamic location tracking, saved-place management via Swift Data, and offline data handling with a user-centric UI adhering to Apple's design guidelines.",
      ],
      tech: ["Swift", "SwiftUI", "MapKit", "OpenWeatherMap API", "Swift Data"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "ML STUDENT PERFORMANCE PREDICTOR",
      subtitle: "Developer",
      period: "October 2024 - December 2024",
      location: "London, UK",
      description: [
        "Built a neural network using TensorFlow/Keras to predict student grades from demographic and academic data with R² and MAPE evaluation metrics on Google Colab with 80% accuracy.",
        "Engineered a full ML pipeline including data preprocessing, feature expansion, model regularization, and performance visualization using Python and Scikit-learn.",
      ],
      tech: ["TensorFlow", "Keras", "Python", "Scikit-learn", "Google Colab"],
      githubLink: "https://github.com/NethmaDS123/Tourist-Utility-App-Swift",
      liveLink:
        "https://drive.google.com/file/d/1SZwHt5bCXyaD-kStMbT_m_oJAK1sxw5Y/view?usp=drive_link",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm text-center mb-12">
          A showcase of my technical abilities and problem-solving skills
        </p>

        {/* Featured Projects */}
        <div className="space-y-16 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black p-[1px] rounded-lg"
            >
              <div className="bg-black rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <h3 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors mb-2 md:mb-0">
                    {project.title}
                  </h3>
                  <div className="text-gray-400 hover:text-gray-300 transition-colors text-base">
                    {project.subtitle}
                  </div>
                </div>
                <div className="text-gray-500 mb-6 text-sm">
                  {project.location} | {project.period}
                </div>

                <div className="space-y-3 mb-6">
                  {project.description.map((item, i) => (
                    <div
                      key={i}
                      className="flex group hover:bg-gray-900/50 p-2 rounded-lg transition-all duration-300"
                    >
                      <div className="mr-3 text-gray-400 group-hover:text-gray-300">
                        ▹
                      </div>
                      <p className="text-gray-300 group-hover:text-white text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  {"githubLinks" in project ? (
                    <>
                      <a
                        href={project.githubLinks.frontend}
                        className="flex items-center text-gray-300 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2">Frontend Code</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.githubLinks.backend}
                        className="flex items-center text-gray-300 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2">Backend Code</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.githubLink}
                        className="flex items-center text-gray-300 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mr-2">Code</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </>
                  )}
                  <a
                    href={project.liveLink}
                    className="flex items-center text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">Live Demo</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center">
            Other Noteworthy Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black p-[1px] rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
              >
                <div className="bg-black rounded-lg p-4 h-full">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h4>
                    <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                      {project.subtitle}
                    </div>
                  </div>
                  <div className="text-gray-500 mb-3 text-xs">
                    {project.location} | {project.period}
                  </div>

                  <div className="space-y-2 mb-4">
                    {project.description.map((item, i) => (
                      <p
                        key={i}
                        className="text-gray-300 group-hover:text-white transition-colors text-sm"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a
                      href={project.githubLink}
                      className="flex items-center text-gray-300 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">Code</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.liveLink}
                      className="flex items-center text-gray-300 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">Live Demo</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-300 hover:text-white text-sm"
          >
            <span className="mr-2">View More Projects on GitHub</span>
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
