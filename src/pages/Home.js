import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faChartBar,
  faPenToSquare,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import codingVibe from "../assets/codeing.gif";
import MySkill from "../assets/MySkill.jpg";
import ku from "../assets/Ku.jpg";
import html from "../assets/html-5.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import vue from "../assets/vue.png";
import react from "../assets/react.svg";
import sql from "../assets/sql.svg";
import jira from "../assets/jira.svg";
import atlassian from "../assets/atlassian.svg";
import postman from "../assets/postman.svg";
import DBeaver from "../assets/DBeaver.png";
import UiPath from "../assets/uipath.svg";
import MongoDB from "../assets/mongodb.svg";
import swagger from "../assets/swagger.svg";

const SkillIcon = ({ src, alt, title }) => (
  <img
    src={src}
    alt={alt}
    title={title}
    className="img-fluid"
    style={{
      maxHeight: "50px",
      transition: "transform 0.1s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  />
);

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Define skill icons data to avoid repetition
  const toolIcons = [
    { src: html, alt: "html", title: "HTML" },
    { src: css, alt: "css", title: "CSS" },
    { src: js, alt: "js", title: "JavaScript" },
    { src: vue, alt: "vue", title: "Vue.js" },
    { src: react, alt: "react", title: "React" },
    { src: sql, alt: "sql", title: "SQL" },
    { src: postman, alt: "postman", title: "Postman" },
    { src: swagger, alt: "swagger", title: "swagger" },
    { src: MongoDB, alt: "MongoDB", title: "MongoDB" },
    { src: DBeaver, alt: "DBeaver", title: "DBeaver" },
    { src: UiPath, alt: "UiPath", title: "UiPath" },
    { src: jira, alt: "jira", title: "Jira" },
    { src: atlassian, alt: "atlassian", title: "Atlassian" },
  ];

  return (
    <div className="container mt-5" style={{ fontSize: "1.5rem" }}>
      <div className="text-center mb-5" data-aos="fade-up">
        <img
          src={codingVibe}
          alt="Welcome"
          className="img-fluid mb-3 rounded"
          style={{
            maxHeight: "clamp(200px, 30vw, 350px)", // ปรับตามขนาดจอ
            width: "auto",
          }}
        />

        <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>
          <TypeAnimation
            sequence={["Vivit Leelahalamlert", 3000, ""]}
            wrapper="span"
            speed={10}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>

        <div className="container px-3 px-md-5 mt-4">
          <p className="text-muted fs-5 mb-1">
            Called me <strong>Pea</strong>
          </p>
          <p className="text-muted fs-6" style={{ lineHeight: 1.8 }}>
            I graduated from{" "}
            <strong>Kasetsart University (Bangkhen Campus)</strong> with a
            degree in Computer Science. I’ve discovered a strong passion for
            <strong> software development</strong> and am determined to pursue a
            career as a developer.
            <br className="d-none d-md-block" />
            I'm currently sharpening my skills in frontend technologies, backend
            logic, and modern development tools. I genuinely enjoy building
            things that solve real-world problems, and I’m highly motivated to
            grow into a<strong> full-time developer role</strong> where I can
            contribute, learn, and make an impact.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div
        className="container-fluid py-5 d-flex justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="card-body"
          data-aos="fade-up"
          style={{ maxWidth: "1200px", width: "100%" }}
        >
          <div className="card border-0 shadow mb-4 p-4">
            <div className="card-body">
              {/* Header & Subtitle */}
              <div className="text-center mb-4">
                <h2
                  className="fw-bold"
                  style={{ color: "#2e5284", fontSize: "2.5rem" }}
                >
                  <FontAwesomeIcon
                    icon={faBook}
                    className="me-2"
                    style={{ color: "#2e5284" }}
                  />
                  Education
                </h2>
                <p className="text-muted fs-5 mb-0">
                  Kasetsart University, Bangkhen Campus
                </p>
                <p className="text-muted fs-5 mb-2">
                  B.Tech. in Computer Science (2017–2021)
                </p>
              </div>

              {/* Image and Text */}
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-3 mb-md-0">
                  <img
                    src={ku}
                    alt="Kasetsart University"
                    className="img-fluid"
                    style={{ maxHeight: "180px", objectFit: "contain" }}
                  />
                </div>

                <div className="col-md-8">
                  <ul className="list-unstyled text-muted fs-5">
                    <li className="mb-3 d-flex">
                      <FontAwesomeIcon
                        icon={faCode}
                        className="me-3"
                        style={{ color: "#2e5284" }}
                      />
                      Core Subjects like :
                      <span className="ms-1 fw-semibold text-primary">
                        Data Structures, Algorithms, DBMS, OS, Java
                      </span>
                    </li>
                    <li className="mb-3 d-flex">
                      <FontAwesomeIcon
                        icon={faCode}
                        className="me-3"
                        style={{ color: "#2e5284" }}
                      />
                      Programming Languages :
                      <span className="ms-1 fw-semibold text-primary">
                        Python, C, C++, Java
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link
                  to="https://www.ku.ac.th/th"
                  className="btn btn-outline-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Kasetsart University"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow mb-4 p-4">
            <div className="card-body">
              <h5
                className="card-title fw-bold text-center mb-4"
                style={{ fontSize: "2.5rem" }}
              >
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="me-2"
                  style={{ color: "#2e5284" }}
                />
                My Skill
              </h5>

              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="text-center text-md-start mb-3 mb-md-0">
                  <img
                    src={MySkill}
                    alt="MySkill"
                    className="img-fluid"
                    style={{ maxHeight: "200px" }}
                  />
                </div>

                <div className="text-muted">
                  <p>
                    <strong>Beginner</strong>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ color: "#2e5284" }}
                      size="lg"
                      className="text me-2"
                    />
                    <span className="text-primary">Programming</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ color: "#2e5284" }}
                      size="lg"
                      className="text me-2"
                    />
                    <span className="text-primary">
                      Design and implementation API
                    </span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ color: "#2e5284" }}
                      size="lg"
                      className="text me-2"
                    />
                    <span className="text-primary">RESTful APIs</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ color: "#2e5284" }}
                      size="lg"
                      className="text me-2"
                    />
                    <span className="text-primary">Sequence Diagram</span>
                  </p>
                </div>

                <div className="text-muted">
                  <p>
                    <strong>working on it</strong>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ color: "#2e5284" }}
                      size="lg"
                      className="text me-2"
                    />
                    <span className="text-success">SQL</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ color: "#2e5284" }}
                      size="lg"
                      className="text me-2"
                    />
                    <span className="text-success">Test Cycle</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ color: "#2e5284" }}
                      size="lg"
                      className="text me-2"
                    />
                    <span className="text-success">API Testing</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCode}
                      style={{ color: "#2e5284" }}
                      size="lg"
                      className="text me-2"
                    />
                    <span className="text-success">Manual Testing</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Tools */}
          <div className="card border-0 shadow mb-4">
            <div className="card-body text-center">
              <h5
                className="card-title fw-bold text-center mb-4"
                style={{ fontSize: "2.5rem" }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="me-2"
                  style={{ color: "#2e5284" }}
                />
                Tools
              </h5>
              <p className="card-text text-muted d-flex flex-wrap justify-content-center gap-4">
                {toolIcons.map((icon, index) => (
                  <SkillIcon
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.title}
                  />
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
