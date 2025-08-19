const courses = [
    {
      title: "Full Stack Web Development",
      description: "Master frontend and backend technologies to build modern web applications.",
      highlight: true,
      available: true,
      modules: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript & ES6+",
        "React.js Framework",
        "Node.js & Express",
        "Database Design with MongoDB",
        "RESTful API Development",
        "Authentication & Security",
        "Deployment & DevOps"
      ]
    },
    {
      title: "Frontend Specialization",
      description: "Deep dive into modern frontend development with React and state management.",
      highlight: false,
      available: true,
      modules: [
        "Advanced CSS & Sass",
        "JavaScript Design Patterns",
        "React Hooks & Context API",
        "Redux & State Management",
        "TypeScript Fundamentals",
        "Testing with Jest",
        "Performance Optimization",
        "Web Accessibility"
      ]
    },
    {
      title: "Backend with Node.js",
      description: "Learn to build scalable server-side applications with Node.js ecosystem.",
      highlight: false,
      available: true,
      modules: [
        "Node.js Fundamentals",
        "Express Framework",
        "Authentication (JWT, OAuth)",
        "Database Integration",
        "GraphQL APIs",
        "WebSockets & Real-time",
        "Microservices Architecture",
        "Docker & Kubernetes"
      ]
    },
    {
      title: "Advanced Web Security",
      description: "Security best practices for modern web applications.",
      highlight: false,
      available: false,
      modules: [
        "OWASP Top 10",
        "Authentication Strategies",
        "Data Protection",
        "Secure Coding Practices",
        "Penetration Testing",
        "Security Headers",
        "CORS & CSRF Protection",
        "Compliance Standards"
      ]
    }
  ];

  // Function to handle PDF download (you'll need to implement this)
  function downloadCourseStructure(course) {
    // In a real implementation, you would:
    // 1. Generate a PDF with the course details
    // 2. Trigger download
    console.log(`Downloading syllabus for ${course.title}`);
    // Example using a PDF library:
    // generatePDF(course.title, course.modules, course.description);
    
    alert(`PDF download for ${course.title} would be implemented here`);
  }