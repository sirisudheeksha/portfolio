import React from "react";
import "../assets/styles/Education.scss";

const Education = () => {
  return (
    <section className="education-section" id="Education">
      <h1>Education</h1>
      <div className="education-container">
        <div className="education-item">
          <h3>University at Buffalo, State University of New York</h3>
          <p>Master’s in Computer Science (Jan 2024 – May 2025)</p>
          <p><strong>GPA:</strong> 3.48/4.0</p>
        </div>
        <div className="education-item">
          <h3>SRM Institute of Science and Technology, Chennai, India</h3>
          <p>Bachelor of Technology in Computer Science (2019 – 2023)</p>
          <p><strong>GPA:</strong> 9.23/10</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
