export const PORTFOLIO_DATA = {
  name: "Manvendra Kushwaha",
  initials: "MK",
  role: "Software Developer",
  about:
    "A B.Tech student in Electronics and Instrumentation Engineering at NIT Silchar, passionate about Frontend Development, Machine Learning, and Cloud Engineering. Building scalable applications and solving complex algorithmic problems.",
  contact: {
    email: "manvendrakushwahamk625@gmail.com",
    phone: "+91-7379475125",
    linkedin: "https://www.linkedin.com/in/manvendra-kushwaha",
    github: "https://github.com/manvendra47",
    leetcode: "https://leetcode.com/geniusnotnot7",
    gfg: "https://auth.geeksforgeeks.org/user/mansh55q9",
  },
  education: [
    {
      institution: "National Institute of Technology, Silchar",
      location: "Assam, India",
      degree: "B.Tech in Electronics and Instrumentation Engineering",
      score: "CGPA: 8.59",
      date: "2023 – 2027",
    },
    {
      institution: "Saraswati Vidya Mandir, Deoria Khas",
      location: "Uttar Pradesh",
      degree: "Class XII",
      score: "92.6%",
      date: "2021 – 2022",
    },
    {
      institution: "Saraswati Vidya Mandir, Deoria Khas",
      location: "Uttar Pradesh",
      degree: "Class X",
      score: "93.6%",
      date: "2019 – 2020",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript"],
    },
    {
      category: "Fundamentals",
      items: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "Computer Networks",
      ],
    },
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "Responsive Web Design",
      ],
    },
    {
      category: "Backend & APIs",
      items: ["REST APIs", "Express.js", "Node.js (basic)"],
    },
    { category: "Databases", items: ["Firebase", "SQL", "MongoDB (basic)"] },
    {
      category: "Developer Tools",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Google Cloud Platform (GCP)",
      ],
    },
    {
      category: "Coursework",
      items: [
        "Machine Learning Basics",
        "Artificial Neural Networks",
        "Control Systems",
      ],
    },
  ],
  experience: [
    {
      role: "Cloud Domain Member",
      company: "Google Developer Student Club – NIT Silchar",
      date: "2024 – 2025",
      description: [
        "Worked on deploying applications and ML models using Google Cloud services.",
        "Collaborated with a cross-functional team of 4+ members to explore and apply Google Cloud technologies through workshops and hands-on labs.",
      ],
    },
  ],
  projects: [
    // First project
    {
      title: "Real-Time Bus Tracking System",
      date: "Aug 2025",
      subtitle: "SIH 2026 Web Application",
      repo: "manvendra47/SIH-2025",
      link: "https://bus-tracking-system-final.vercel.app/",
      description:
        "Developed a real-time bus tracking system with live GPS updates and route visualization.",
      features: [
        "Used Firebase Realtime Database to handle concurrent location updates with low latency.",
      ],
      techStack: ["JavaScript", "Firebase", "OpenStreetMap"],
    },
    // Second project
    {
      title: "Password Generator Web App",
      date: "May 2026",
      subtitle: "Frontend Development Project",
      repo: "manvendra47/PasswardGen",
      link: "https://passwordgenmk.netlify.app/",
      description:
        "Developed a secure and user-friendly web application to generate strong customizable passwords for improving online account security.",
      features: [
        "Implemented password length control, uppercase/lowercase selection, numeric and symbol inclusion, password strength indicator, and copy-to-clipboard functionality.",
        "Designed a responsive and modern user interface for seamless usage across desktop and mobile devices.",
      ],
      techStack: ["React.js", "Vite", "JavaScript", "CSS", "Netlify"],
    },
    // Third project
    {
      title: "Road Type Classification System",
      date: "Mar 2025",
      subtitle: "SIH 2025 Machine Learning Project",
      repo: "bus-tracking-system",
      description:
        "Designed an end-to-end system to classify GPS trajectories as Highway or Service Road.",
      features: [
        "Built a modular ML pipeline following OOP principles with feature engineering and model training.",
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    },
    // Fourth project
    {
      title: "Real Time Fire Detection Model",
      date: "April 2026",
      subtitle: "Machine Learning Project",
      repo: "manvendra47/Real_time_fire_detection_model",
      description:
        "Developed a real-time fire detection model using computer vision model yolo to enhance safety and emergency response.",
      features: [
        "Implemented real-time fire detection using YOLO object detection model.",
      ],
      techStack: ["Python", "OpenCV", "YOLO"],
    },
    // Fifth project
    {
      title: "Maze Solving Robot",
      date: "Feb 2024",
      subtitle: "Robotics Project",
      repo: "manvendra47/Rat_in_a_maze_project",
      description:
        "Designed and built an autonomous maze-solving robot using ultrasonic sensors and Arduino. Implemented obstacle detection and navigation logic to enable the robot to traverse and escape a maze without manual intervention.",
      features: [
        "Autonomously navigates through a maze using ultrasonic sensor data.",
        "Implements real-time obstacle detection and path decision-making.",
        "Arduino-based control system programmed for efficient movement and navigation.",
      ],
      techStack: ["Arduino", "Arduino IDE", "Ultrasonic Sensors", "Embedded C++", "Robotics"],
    },
  ],
  achievements: [
    "Solved 350+ Data Structures and Algorithms problems across LeetCode, GeeksforGeeks, and Codeforces.",
    "Top 12 finalist out of 60+ teams in an autonomous robotics competition at NIT Silchar.",
  ],
};
