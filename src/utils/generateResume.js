export default function generateResume() {
    const resumeHTML = `
  <div class="resume">
    <h1>${formData.fullName}</h1>
    <p style="text-align: center;">
      ${formData.email} | ${formData.phone} | ${formData.linkedin} | ${formData.github}
    </p>

    <h2 class="section-title">Education</h2>
    ${formData.education
            .map(
                (edu) => `
        <div class="education-item">
          <h3>${edu.institution}</h3>
          <p class="sub-info">${edu.degree}, ${edu.graduationYear}</p>
        </div>
      `
            )
            .join("")}

    <h2 class="section-title">Experience</h2>
    ${formData.workExperience
            .map(
                (exp) => `
        <div class="work-item">
          <h3>${exp.position}</h3>
          <p class="sub-info">${exp.company} (${exp.startDate} - ${exp.endDate})</p>
          <ul>
            ${exp.description
                        .map((desc) => `<li>${desc}</li>`)
                        .join("")}
          </ul>
        </div>
      `
            )
            .join("")}

    <h2 class="section-title">Projects</h2>
    ${formData.projects
            .map(
                (project) => `
        <div class="project-item">
          <h3>${project.name} (${project.startDate} - ${project.endDate})</h3>
          <p>${project.description}</p>
          <p><strong>Technology Used:</strong> ${project.techStack}</p>
        </div>
      `
            )
            .join("")}
  </div>
`