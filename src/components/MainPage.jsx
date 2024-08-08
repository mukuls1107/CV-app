import React, { useState } from "react";
import "../styles/MainPage.css";
import "../styles/ResumeStyle.css";
import "../styles/Footer.css";
import html2pdf from "html2pdf.js";
import Footer from "./Footer.jsx";
import Feedback from "./Feedback.jsx";

function MainPage() {
  // const [showMainPage, showFeedbackPage] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    education: [{ institution: "", degree: "", graduationYear: "" }],
    projects: [
      {
        name: "",
        startDate: "",
        endDate: "",
        techStack: "",
        description: "",
      },
    ],
    workExperience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  });

  const handleFeedback = () => {
    showFeedbackPage(true);
  };

  const generateResume = () => {
    const resumeHTML = `
    <div class="resume">
      <h1>${formData.fullName}</h1>
      <p>${formData.email} | ${formData.phone}</p>

      <h2>Professional Summary</h2>
      <p>${formData.summary}</p>

      <h2>Education</h2>
      ${formData.education
        .map(
          (edu) => `
          <div class="education-item">
            <p><strong>${edu.degree}</strong>, ${edu.institution} (${edu.graduationYear})</p>
          </div>
        `
        )
        .join("")}

      <h2>Projects</h2>
      ${formData.projects
        .map(
          (project) => `
          <div class="project-item">
            <p><strong>${project.name}</strong> (${project.startDate} - ${project.endDate})</p>
            <p>${project.description}</p>
            <p>Technology Used: <strong>${project.techStack}</strong></p>
          </div>
        `
        )
        .join("")}

      <h2>Work Experience</h2>
      ${formData.workExperience
        .map(
          (exp) => `
          <div class="work-item">
            <p><strong>${exp.position}</strong>, ${exp.company} (${exp.startDate} - ${exp.endDate})</p>
            <p>${exp.description}</p>
          </div>
        `
        )
        .join("")}
    </div>
  `;

    const opt = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "pdf", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(resumeHTML).save();
  };

  const handleChange = (e, index, section) => {
    if (section) {
      const updatedData = [...formData[section]];
      updatedData[index][e.target.name] = e.target.value;
      setFormData({ ...formData, [section]: updatedData });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addSection = (section) => {
    setFormData({
      ...formData,
      [section]: [
        ...formData[section],
        section === "education"
          ? { institution: "", degree: "", graduationYear: "" }
          : {
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              description: "",
            },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResume();
  };

  return (
    <div className="resume-form-container">
      <div className="floating-elements">
        <span className="float-item">{"{}"}</span>
        <span className="float-item">{"[]"}</span>
        <span className="float-item">{"()"}</span>
        <span className="float-item">{"</>"}</span>
      </div>
      <form className="resume-form" onSubmit={handleSubmit}>
        <h2>Create Your Resume</h2>

        <section>
          <h3>Personal Details</h3>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Professional Summary"
          ></textarea>
        </section>

        <section>
          <h3>Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                name="institution"
                value={edu.institution}
                onChange={(e) => handleChange(e, index, "education")}
                placeholder="Institution"
              />
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, index, "education")}
                placeholder="Degree"
              />
              <input
                type="text"
                name="graduationYear"
                value={edu.graduationYear}
                onChange={(e) => handleChange(e, index, "education")}
                placeholder="Graduation Year"
              />
            </div>
          ))}
          <button type="button" onClick={() => addSection("education")}>
            Add Education
          </button>
        </section>

        <section>
          <h3>Projects</h3>
          {formData.projects.map((exp, index) => (
            <div key={index}>
              <input
                type="text"
                name="name"
                value={exp.name}
                onChange={(e) => handleChange(e, index, "projects")}
                placeholder="Name"
              />
              <input
                type="text"
                name="startDate"
                value={exp.startDate}
                onChange={(e) => handleChange(e, index, "projects")}
                placeholder="Start Date"
              />
              <input
                type="text"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => handleChange(e, index, "projects")}
                placeholder="End Date"
              />

              <input
                type="text"
                name="techStack"
                value={exp.techStack}
                onChange={(e) => handleChange(e, index, "projects")}
                placeholder="Technology Used"
              />
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleChange(e, index, "projects")}
                placeholder="Describe Your Project"
              ></textarea>
            </div>
          ))}
          <button type="button" onClick={() => addSection("projects")}>
            Add Another Project
          </button>
        </section>

        <section>
          <h3>Work Experience</h3>
          {formData.workExperience.map((exp, index) => (
            <div key={index}>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(e, index, "workExperience")}
                placeholder="Company"
              />
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleChange(e, index, "workExperience")}
                placeholder="Position"
              />
              <input
                type="text"
                name="startDate"
                value={exp.startDate}
                onChange={(e) => handleChange(e, index, "workExperience")}
                placeholder="Start Date"
              />
              <input
                type="text"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => handleChange(e, index, "workExperience")}
                placeholder="End Date"
              />
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleChange(e, index, "workExperience")}
                placeholder="Job Description"
              ></textarea>
            </div>
          ))}
          <button type="button" onClick={() => addSection("workExperience")}>
            Add Work Experience
          </button>
        </section>

        <button
          type="submit"
          className="submit-btn"
          onSubmit={handleSubmit}
          onClick={handleFeedback}
        >
          Generate Resume
        </button>
      </form>
      <Footer />
      {showFeedbackPage && <Feedback />}
    </div>
  );
}

export default MainPage;
