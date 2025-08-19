import React from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';
import CoursePolicy from './coursepolicy';

function Courses() {
    const courses = [
        {
            title: "Full Stack Development",
            description: "Master full-stack development with modern technologies",
            available: true,
            highlight: false,
            syllabus: [
                "HTML5 & CSS3 Fundamentals",
                "JavaScript & ES6+ Features",
                "React.js & Node.js",
                "Database Design & Implementation",
                "RESTful API Development",
                "Authentication & Security",
                "Deployment Strategies"
            ],
            pdfPath: "./FSD_Catalouge.pdf" // Add path to the existing PDF
        },
        {
            title: "Machine Learning",
            description: "Learn to build intelligent systems and algorithms",
            available: false,
            highlight: true,
            syllabus: [
                "Python for Data Science",
                "Supervised & Unsupervised Learning",
                "Neural Networks & Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Model Deployment"
            ]
        },
        {
            title: "Artificial Intelligence",
            description: "Dive deep into AI concepts and applications",
            available: false,
            highlight: true,
            syllabus: [
                "Foundations of AI",
                "Search Algorithms",
                "Knowledge Representation",
                "Machine Learning in AI",
                "Expert Systems",
                "Ethics in AI"
            ]
        },
        {
            title: "Data Science",
            description: "Transform data into insights with powerful analytics",
            available: false,
            highlight: true,
            syllabus: [
                "Data Wrangling & Cleaning",
                "Exploratory Data Analysis",
                "Statistical Modeling",
                "Data Visualization",
                "Big Data Technologies",
                "Storytelling with Data"
            ]
        }
    ];

    const downloadCoursePDF = (course) => {
        // If it's the Full Stack Development course and has a PDF path
        if (course.title === "Full Stack Development" && course.pdfPath) {
            // Create a temporary anchor element to trigger the download
            const link = document.createElement('a');
            link.href = course.pdfPath;
            link.download = 'FSD_Catalogue.pdf'; // You can change the downloaded filename here
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // For other courses, generate the PDF as before
            const doc = new jsPDF();
            
            // Add course title
            doc.setFontSize(20);
            doc.setTextColor(40, 53, 147); // Dark blue
            doc.text(course.title, 105, 20, { align: 'center' });
            
            // Add course description
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0); // Black
            doc.text(course.description, 105, 30, { align: 'center' });
            
            // Add status
            if (course.available) {
                doc.setTextColor(46, 125, 50); // Green
            } else {
                doc.setTextColor(211, 47, 47); // Red
            }
            
            doc.text(
                `Status: ${course.available ? 'Available Now' : 'Coming Soon'}`, 
                105, 
                40, 
                { align: 'center' }
            );
            
            // Add syllabus heading
            doc.setFontSize(16);
            doc.setTextColor(40, 53, 147); // Dark blue
            doc.text("Course Syllabus:", 20, 60);
            
            // Add syllabus items
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0); // Black
            let yPosition = 70;
            
            course.syllabus.forEach((item, index) => {
                doc.text(`• ${item}`, 20, yPosition);
                yPosition += 10;
                
                // Add new page if needed
                if (yPosition > 270) {
                    doc.addPage();
                    yPosition = 20;
                }
            });
            
            // Save the PDF
            doc.save(`${course.title.replace(/\s+/g, '_')}_Syllabus.pdf`);
        }
    };

    return (
        <section>
            <CoursePolicy/>
        </section>
    );
}

export default Courses;