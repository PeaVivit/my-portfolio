import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vivit from "../assets/Vivit.png";
import CV from "../myCV/Vivit-Leelahalamlert-Resume.pdf";
import linkedin from "../assets/linkedin.svg";

import { FaPhone, FaUser } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Contact() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow container text-start p-4"
        data-aos="fade-down"
      >
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center row">
          <div className="text-center text-md-start col mb-4 mb-md-0 ms-2 ">
            <img
              src={vivit}
              alt="Vivit"
              className="img-fluid "
              style={{ maxHeight: "400px" }}
            />
          </div>

          <div className="d-flex flex-column align-items-center align-items-md-start col">
            <p style={{ fontSize: "2.5rem" }}>
              <strong>Vivit Leelahalamlert</strong>
            </p>
            <p className="text-center text-md-start">
              I'm available on LinkedIn, you can message me, I'll reply within
              24 hours. However, I'm trying to be a developer :) If you're
              interested, please contact me.
            </p>

            <div className="text-muted w-100">
              <div className="d-flex align-items-center mb-3">
                <FaUser style={{ fontSize: "50px", color: "#7e7fdb" }} />
                <p className="mb-0 ms-4" style={{ fontSize: "2.0rem" }}>
                  Vivit Leelahalamlert
                </p>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaPhone
                  className="me-3"
                  style={{ fontSize: "50px", color: "#7e7fdb" }}
                />
                <p className="mb-0 ms-2" style={{ fontSize: "2.0rem" }}>
                  0830073861
                </p>
              </div>

              <div className="d-flex align-items-center mb-3">
                <BsHouseDoor
                  className="me-3"
                  style={{ fontSize: "50px", color: "#7e7fdb" }}
                  aria-label="House Icon"
                />
                <p className="mb-0 ms-2" style={{ fontSize: "2.0rem" }}>
                  Bangkok, Thailand
                </p>
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center">
              <button
                className="btn btn-primary mt-3"
                onClick={() => setShowModal(true)}
              >
                Preview CV
              </button>
            </div>
          </div>
        </div>

        <div className="container text-center mt-4">
          <p>Contact via LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/vivit-leelahalamlert-937744210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            title="Linkedin"
          >
            <img
              src={linkedin}
              alt="LinkedIn Profile"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </a>
        </div>
      </div>

      {/* PDF Modal */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1050,
          }}
        >
          <div
            className="modal-dialog modal-xl"
            role="document"
            style={{ maxWidth: "90%", margin: "auto", marginTop: "5vh" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">CV Preview</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body" style={{ height: "70vh" }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                  <Viewer fileUrl={CV} />
                </Worker>
              </div>
              <div className="modal-footer">
                <a
                  href={CV}
                  download="Vivit_Leelahalamlert_CV.pdf"
                  className="btn btn-success"
                >
                  Download CV
                </a>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
