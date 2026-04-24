import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import experienceUI from "../assets/Test.png";
import ProjectUI from "../assets/ProjectUI.jpg";
import { motion } from "framer-motion";

// --- Reusable ExperienceCard Component ---
const ExperienceCard = ({
  company,
  date,
  location,
  responsibilities,
  collapseId,
  borderColorClass,
}) => (
  <div className={`card mb-3 ${borderColorClass}`} data-aos="fade-up">
    <div className="card-body">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-md-auto mb-2 mb-md-0">
          <h3 className="text-muted mb-0">{company}</h3>
        </div>
        <div className="col-12 col-md-auto text-md-end">
          <a
            className="btn btn-outline-primary mt-2 w-100 w-md-auto"
            data-bs-toggle="collapse"
            href={`#${collapseId}`}
            role="button"
            aria-expanded="false"
            aria-controls={collapseId}
          >
            🔍 More Information
          </a>
        </div>
      </div>
    </div>
    <div className="collapse" id={collapseId}>
      <div className="card card-body">
        {location && <p>Onsite: {location}</p>}
        <p>{date}</p>
        <ul>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// --- Reusable ProjectCard Component ---
// const ProjectCard = ({ title, description, tech, demoUrl }) => (
//   <div className="card mb-3 border-secondary" data-aos="fade-up">
//     <div className="card-body">
//       <h4 className="card-title">{title}</h4>
//       <p className="card-text">{description}</p>
//       <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
//         <p className="mb-2 mb-md-0 text-center ">
//           <strong>Tech Stack:</strong> {tech}
//         </p>
//         {demoUrl && (
//           <a
//             href={demoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-outline-primary"
//           >
//             🔗 Live Demo
//           </a>
//         )}
//       </div>
//     </div>
//   </div>
// );
const ProjectCard = ({
  title,
  description,
  tech,
  patientUrl,
  staffUrl,
  githubUrl,
}) => (
  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
    <div
      className="card mb-4 border-0 shadow-lg"
      data-aos="fade-up"
      style={{
        borderRadius: "16px",
        transition: "all 0.3s ease",
      }}
    >
      <div className="card-body p-4">
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap">
          <h4 className="fw-bold mb-0">
            {title}
            {/* <span className="badge bg-success ms-2">🔥 Featured</span> */}
          </h4>
        </div>

        {/* REALTIME BADGE */}
        {/* <span className="badge bg-info text-dark mb-2">⚡ Real-time</span> */}

        {/* DESCRIPTION */}
        <p className="text-muted">{description}</p>

        {/* TECH TAG */}
        <div className="mb-3">
          {Array.isArray(tech)
            ? tech.map((t, i) => (
                <span
                  key={i}
                  className="badge bg-light text-dark border me-2 mb-1"
                >
                  {t}
                </span>
              ))
            : tech}
        </div>

        {/* BUTTONS */}
        <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
          <div className="d-flex gap-2">
            {patientUrl && (
              <a
                href={patientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                🧾 Live Demo
              </a>
            )}

            {staffUrl && (
              <a
                href={staffUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success"
              >
                👨‍⚕️ Staff
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
// --- Main Component ---
function ExperienceAndProject() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      company: "Accenture.co",
      date: "Western Union Project (April 2023 - March 2023)",
      location: "Onsite at Krungthai Bank (KTB)",
      responsibilities: [
        "Analyzed end-to-end business processes to align technical solutions with operational goals.",
        "Developed sequence diagrams to illustrate system interactions for cross-team communication.",
        "Interpreted high-level architecture diagrams to guide system integration design.",
        "Applied 3-layer architecture principles (presentation, business logic, data access) for scalable system design.",
        "Integrated Redis for caching and in-memory data storage to improve performance.",
        "Gathered and defined technical requirements through collaboration with stakeholders.",
        "Created detailed technical specifications for front-end, BFF layer, core logic, database, Redis, and legacy adaptors.",
      ],
      collapseId: "collapseExperience4",
      borderColorClass: "border-primary",
    },
    {
      company: "INET Managed Services Co., Ltd.",
      date: "Innovation Engineer (RPA) Mar 2022 - Nov 2022",
      location: "Thai Summit Tower",
      responsibilities: [
        "Developed and implemented RPA solutions for Cash Receipt Automation.",
        "Automated Transfer Order processes to improve efficiency.",
        "Created an RPA for Dealer Appointment Record management.",
      ],
      collapseId: "collapseExperience5",
      borderColorClass: "border-info",
    },
    {
      company: "MFEC Public Company Limited",
      date: "Software Developer May 2021 - Oct 2021",
      location: "ViMUT Hospital Project",
      responsibilities: [
        "Developed responsive front-end interfaces.",
        "Integrated front-end with back-end systems via RESTful APIs.",
        "Performed bug resolution and system maintenance.",
        "Collaborated with cross-functional teams to deliver project requirements.",
      ],
      collapseId: "collapseExperience6",
      borderColorClass: "border-primary",
    },
  ];

  const projects = [
    {
      title: "🌐 Country Explorer",
      description:
        "Explore countries with dynamic search, 3D flip cards, and dark mode.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "REST API"],
      patientUrl: "https://country-app-nu-blond.vercel.app/",
    },

    {
      title: "🏥 Real-Time Patient Monitoring System",
      description:
        "A real-time patient registration system where staff can monitor patient input live using WebSocket. Built with modern full-stack architecture and optimized with debouncing for performance.",
      tech: [
        "Next.js",
        "Socket.io",
        "Tailwind CSS",
        "React Hook Form",
        "Node.js",
      ],

      patientUrl: "https://real-time-patient-input-form-and-st.vercel.app/",
      staffUrl: "https://real-time-patient-input-form-and-st.vercel.app/staff",

      githubUrl:
        "https://github.com/PeaVivit/real-time-patient-input-form-and-staff",
    },
  ];

  return (
    <div className="container mt-4">
      {/* ---------------- Experience Section ---------------- */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="row align-items-center mb-4">
          <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
            <img
              src={experienceUI}
              alt="Experience"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-12 col-md-9 text-center text-md-end">
            <h1 className="fw-bold">Work Experience</h1>
          </div>
        </div>

        {/* Dynamic Experience Cards */}
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            date={exp.date}
            location={exp.location}
            responsibilities={exp.responsibilities}
            collapseId={exp.collapseId}
            borderColorClass={exp.borderColorClass}
          />
        ))}
      </motion.div>

      {/* ---------------- Projects Section ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="row align-items-center mb-4 mt-5">
          <div className="col-12 col-md-9 text-center text-md-start">
            <h1 className="fw-bold">Projects</h1>
          </div>
          <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
            <img
              src={ProjectUI}
              alt="Projects"
              className="img-fluid mt-3 rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Dynamic Project Cards */}
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            tech={proj.tech}
            patientUrl={proj.patientUrl}
            staffUrl={proj.staffUrl}
            githubUrl={proj.githubUrl}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ExperienceAndProject;
