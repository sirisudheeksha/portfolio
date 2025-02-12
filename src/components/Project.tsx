import React from "react";
import pdfExtractor from '../assets/images/text-summarisation.png';
import trafficPrediction from '../assets/images/traffic-prediction.png';
import medicalImage from '../assets/images/medical-image.png';
import chatbot from '../assets/images/chatbot.png';
import wineQuality from '../assets/images/wine-quality.png';
import parkinsonDetection from '../assets/images/parkinson-detection.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://github.com/your-profile/pdf-text-extractor" target="_blank" rel="noreferrer">
                    <img src={pdfExtractor} className="zoom" alt="PDF Extractor" width="100%"/>
                </a>
                <h2>AI-Powered Text Summarization Tool</h2>
                <p>DDeveloped a full-stack web application that utilizes deep learning models to generate AI-powered summaries of lengthy documents. Built a React.js frontend for seamless user interaction and integrated Flask-based REST APIs for backend processing.Deployed using Docker, PostgreSQL, and AWS/GCP for high availability and scalability.</p>
                <p><strong>Technologies:</strong> Python, Flask, FastAPI, React.js, PostgreSQL, Docker, TensorFlow, Hugging Face Transformers, REST API, AWS/GCP</p>
            </div>

            <div className="project">
                <a href="https://github.com/your-profile/traffic-prediction" target="_blank" rel="noreferrer">
                    <img src={trafficPrediction} className="zoom" alt="Traffic Prediction" width="100%"/>
                </a>
                <h2>Traffic Flow Prediction Web Application</h2>
                <p>Developed a web application utilizing machine learning to predict traffic conditions based on historical data. Built an interactive UI for dataset uploads, automated preprocessing, and real-time predictions.</p>
                <p><strong>Technologies:</strong> Python, Flask, Machine Learning, Random Forest, Pandas, NumPy, Scikit-learn, HTML/CSS, Pickle</p>
            </div>

            <div className="project">
                <a href="https://github.com/your-profile/medical-image-classification" target="_blank" rel="noreferrer">
                    <img src={medicalImage} className="zoom" alt="Medical Image Classification" width="100%"/>
                </a>
                <h2>Medical Image Classification System</h2>
                <p>Developed a deep learning-based image classification system for medical diagnosis. Optimized model performance with ensemble learning and advanced data augmentation techniques.</p>
                <p><strong>Technologies:</strong> Python, TensorFlow, Keras, CNNs, OpenCV, Scikit-learn, HTML, CSS, JavaScript, AWS/GCP</p>
            </div>

            <div className="project">
                <a href="https://github.com/your-profile/chatbot" target="_blank" rel="noreferrer">
                    <img src={chatbot} className="zoom" alt="Chatbot" width="100%"/>
                </a>
                <h2>AI Chatbot Using NLTK & Keras</h2>
                <p>Designed and developed an intelligent chatbot using NLP techniques. Implemented recurrent neural networks (LSTM) for message classification and response generation.</p>
                <p><strong>Technologies:</strong> Python, NLTK, Keras, TensorFlow, Flask, JavaScript, HTML/CSS</p>
            </div>

            <div className="project">
                <a href="https://github.com/your-profile/wine-quality-analysis" target="_blank" rel="noreferrer">
                    <img src={wineQuality} className="zoom" alt="Wine Quality Analysis" width="100%"/>
                </a>
                <h2>Wine Quality Analysis</h2>
                <p>Analyzed and predicted wine quality based on chemical properties using machine learning models. Evaluated different algorithms to improve classification accuracy.</p>
                <p><strong>Technologies:</strong> Python, Pandas, NumPy, Scikit-learn, Random Forest, Logistic Regression, SVM</p>
            </div>

            <div className="project">
                <a href="https://github.com/your-profile/parkinson-detection" target="_blank" rel="noreferrer">
                    <img src={parkinsonDetection} className="zoom" alt="Parkinson's Detection" width="100%"/>
                </a>
                <h2>Parkinson's Disease Detection Using XGBoost</h2>
                <p>Developed a machine learning model to detect Parkinson’s disease from voice data. Achieved high accuracy through feature selection and model tuning.</p>
                <p><strong>Technologies:</strong> Python, XGBoost, Scikit-learn, Pandas, NumPy</p>
            </div>

        </div>
    </div>
    );
}

export default Project;
