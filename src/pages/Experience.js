import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import experienceUI from "../assets/Test.png";
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
            className="btn btn-primary w-100 w-md-auto"
            data-bs-toggle="collapse"
            href={`#${collapseId}`}
            role="button"
            aria-expanded="false"
            aria-controls={collapseId}
          >
            More Information
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
// --- End of Reusable ExperienceCard Component ---

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Centralized data for all experience entries
  const experiences = [
    {
      company: "SCB TechX.co",
      date: "QA Engineer (Manual) April 2025 - present",
      location: "SCB Tower (Payment domain team)",
      responsibilities: [
        "Conducted API testing using Postman for microservices.",
        "Tracked and managed defects in JIRA for bug resolution and status updates.",
        "Utilized Kibana, MongoDB, and DBeaver for data monitoring, log analysis, and database validation.",
      ],
      collapseId: "collapseExperience1",
      borderColorClass: "border-primary",
    },
    {
      company: "Thailand Stock Exchange",
      date: "Manual Tester April 2024 - March 2025",
      location: "TDX/DRx Team (Thailand Digital Exchange)",
      responsibilities: [
        "Performed manual and API testing using Swagger for various functionalities.",
        "Managed bug reporting and tracking through JIRA.",
        "Accessed SSH, configured firewalls, and validated data using Docker.",
        "Validated user roles and permissions within Keycloak and on the E-Service platform.",
      ],
      collapseId: "collapseExperience2",
      borderColorClass: "border-warning",
    },
    {
      company: "Berli Jucker Public Company Limited (BJC)",
      date: "Manual Tester June 2023 - January 2024",
      location: "BJC Tower",
      responsibilities: [
        "Conducted testing for TAPlan, SCO Self-scan, and FFTI systems.",
        "Validated system flows and ensured compliance with regulatory standards.",
      ],
      collapseId: "collapseExperience3",
      borderColorClass: "border-success",
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
      collapseId: "collapseExperience4",
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
      collapseId: "collapseExperience5",
      borderColorClass: "border-primary", // You can use different colors if desired
    },
  ];

  return (
    <div className="container mt-4">
      <motion.div
        initial={{ opacity: 0, x: 100 }} // เริ่มโปร่งใสและอยู่ทางขวา
        whileInView={{ opacity: 1, x: 0 }} // เมื่อ scroll มาเห็น ให้แสดงแบบ slide-in
        viewport={{ once: true, amount: 0.3 }} // once = แสดงครั้งเดียว, amount = 30% ของ element ต้องโผล่ถึงจะเริ่ม
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
            key={index} // Consider a more unique key if order can change
            company={exp.company}
            date={exp.date}
            location={exp.location}
            responsibilities={exp.responsibilities}
            collapseId={exp.collapseId}
            borderColorClass={exp.borderColorClass}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Experience;
