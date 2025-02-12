import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const programmingLanguages = [
    "Python",
    "JavaScript",
    "C++",
    "SQL",
    "HTML5",
    "CSS3"
];

const backendTechnologies = [
    "Flask",
    "Django",
    "FastAPI",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS"
];

const dataScienceML = [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "OpenCV",
    "Hugging Face",
    "LLMs"
];

function Skills() {
    return (
        <div className="container" id="skills">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x"/>
                        <h3>Software Development & Full Stack Engineering</h3>
                        <p>
                            Proficient in building full-stack applications using modern frameworks like Flask and Django. 
                            Experienced in developing REST APIs, integrating databases, and implementing scalable architectures.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {programmingLanguages.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x"/>
                        <h3>Backend Development & Cloud Computing</h3>
                        <p>
                            Skilled in backend engineering with experience in Flask, Django, and FastAPI. 
                            Hands-on expertise in designing and optimizing APIs, database management, and deploying applications using Docker and AWS.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {backendTechnologies.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <h3>Data Science, Machine Learning & AI</h3>
                        <p>
                            Strong foundation in machine learning and data science, with experience in training deep learning models for computer vision and AI applications. 
                            Worked on predictive analytics, data visualization, and real-world ML deployments.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {dataScienceML.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
