import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Publications</h1>
        <VerticalTimeline>

          {/* Software Engineer - Aryahi Agri Tech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jun 2022 – Dec 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Aryahi Agri Tech, India</h4>
            <p>
              Developed a smart agricultural management platform integrating IoT devices for real-time monitoring.
              Designed backend services using Python & Django, and built React.js dashboards for data visualization.
              Improved system efficiency by 35% and reduced resource wastage by 20% through predictive analytics.
            </p>
          </VerticalTimelineElement>

          {/* Intern - Highradius */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 – Apr 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Highradius, India</h4>
            <p>
              Worked on an AI-powered FinTech solution, integrating machine learning models for financial data analysis.
              Built data preprocessing pipelines to clean and structure large financial datasets, improving model accuracy.
              Developed a full-stack web-based product using Python, Flask, and SQL for interactive financial insights.
            </p>
          </VerticalTimelineElement>

          {/* Publications Section */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 – May 2023"
            iconStyle={{ background: "#ff9800", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">Publications</h3>

            <h4 className="vertical-timeline-element-subtitle">Weather Prediction Using Artificial Intelligence</h4>
            <p>
              Published in the <i>International Journal of All Research Education & Scientific Methods</i>.
            </p>

            <h4 className="vertical-timeline-element-subtitle">Medical Image Classification Using Deep CNNs</h4>
            <p>
              Presented at the <i>11th International Conference on Contemporary Engineering and Technology</i>.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
