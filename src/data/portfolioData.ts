import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Mohammad Aamir",
  title: "Full Stack Java Developer",
  location: "Mumbai, Maharashtra, India",

  roles: [
    "Full Stack Java Developer",
    "Java Backend Developer",
    "Spring Boot Developer",
    "React Developer",
    "AI Application Developer",
  ],

  heroHeading: "HI, I'M AAMIR",
  heroSubtitle: "FULL STACK JAVA DEVELOPER",

  introText:
    "A Full Stack Java Developer focused on scalable backend systems, responsive web interfaces and AI-powered applications.",

  aboutText: `I am a Full Stack Java Developer and B.Sc. Information Technology student focused on building scalable backend applications, responsive web interfaces and AI-powered solutions.

I work with Core Java, JDBC, Hibernate, Spring Framework, Spring Boot, MySQL, REST APIs and React. I also build AI-integrated applications using Spring AI, Groq API and voice-processing technologies.

I enjoy understanding how applications work internally and creating projects with clean architecture, reusable code, database integration and user-friendly interfaces.`,

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Aamirkhan-04",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-aamir-550a0b332/",
      icon: "linkedin",
    },
  ],

  skills: [
    {
      index: "01",
      category: "BACKEND",
      icon: "java",
      title: "Java Development",
      description:
        "Core Java, Java 8, Object-Oriented Programming, Collections, Multithreading, Exception Handling and Data Structures.",
      tags: [
        "Core Java",
        "Java 8",
        "OOP",
        "Collections",
        "Multithreading",
      ],
      level: 90,
    },
    {
      index: "02",
      category: "BACKEND",
      icon: "spring",
      title: "Spring Ecosystem",
      description:
        "Spring Framework, Spring Boot, Spring Security, Spring Data JPA, REST APIs and MVC architecture.",
      tags: [
        "Spring Framework",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "REST APIs",
        "MVC",
      ],
      level: 90,
    },
    {
      index: "03",
      category: "DATABASE",
      icon: "database",
      title: "Database & Persistence",
      description:
        "MySQL, JDBC, Hibernate, JPA, database transactions and relational database design.",
      tags: ["MySQL", "JDBC", "Hibernate", "JPA"],
      level: 85,
    },
    {
      index: "04",
      category: "FRONTEND",
      icon: "frontend",
      title: "Frontend Development",
      description:
        "React, JavaScript, TypeScript, HTML, CSS and Tailwind CSS.",
      tags: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
      level: 75,
    },
    {
      index: "05",
      category: "TOOLS",
      icon: "tools",
      title: "Development Tools",
      description:
        "Git, GitHub, Maven, VS Code, STS and Eclipse.",
      tags: ["Git", "GitHub", "Maven", "VS Code", "STS", "Eclipse"],
      level: 80,
    },
  ],

  projects: [
    {
      id: "voice-assistant",
      index: "01",
      title: "College Voice Assistant Chatbot",
      category: "AI / FULL STACK",
      description:
        "An AI-powered college assistant that supports voice and text interaction. It uses Java, Spring Boot and Spring AI with Groq API for intelligent responses and Deepgram API for speech processing. The frontend is built with React for a responsive user experience.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring AI",
        "Groq API",
        "Deepgram API",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      github:
        "https://github.com/Aamirkhan-04/College-Assistant-Voice-Chatbot",
      images: {
        large: "/images/projects/chatbot-1.jpg",
        small1: "/images/projects/chatbot-2.jpg",
        small2: "/images/projects/chatbot-3.jpg",
      },
    },

    {
      id: "student-management",
      index: "02",
      title: "Student Management System",
      category: "JAVA / DATABASE",
      description:
        "A Java and MySQL application for managing student records with database-backed CRUD operations using JDBC and a clean layered design.",
      technologies: ["Core Java", "JDBC", "MySQL", "OOP"],
      github:
        "https://github.com/Aamirkhan-04/student_management_system",
      images: {
        large: "/images/projects/students-1.jpg",
        small1: "/images/projects/students-2.jpg",
        small2: "/images/projects/students-3.jpg",
      },
    },

    {
      id: "note-taker",
      index: "03",
      title: "Note Taker Application",
      category: "JAVA WEB",
      description:
        "A note management web application that allows users to create, view, update and delete notes using Servlet, JSP, Hibernate and MySQL. It follows MVC architecture for clean separation of concerns.",
      technologies: [
        "Java",
        "Servlet",
        "JSP",
        "Hibernate",
        "MySQL",
        "MVC",
      ],
      github:
        "https://github.com/Aamirkhan-04/Note-Taker",
      images: {
        large: "/images/projects/notes-1.jpg",
        small1: "/images/projects/notes-2.jpg",
        small2: "/images/projects/notes-3.jpg",
      },
    },

    {
      id: "customer-support-crm",
      index: "04",
      title: "Customer Support CRM",
      category: "JAVA / SPRING BOOT",
      description:
        "A full-stack customer support CRM for managing support tickets, customers and support notes. The backend is built with Java, Spring Boot, Spring Security, JWT, Spring Data JPA, Hibernate and MySQL, with a React frontend for authentication, ticket management, status updates, search and filtering.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "Spring Data JPA",
        "Hibernate",
        "MySQL",
        "REST API",
        "React",
      ],
      github:
        "https://github.com/Aamirkhan-04/customer-support-crm",
      images: {
        large: "/images/projects/crm-1.jpg",
        small1: "/images/projects/crm-2.jpg",
        small2: "/images/projects/crm-3.jpg",
      },
    },
  ],

  journey: [
    {
      kind: "Education",
      title: "Bachelor of Science — Information Technology",
      subtitle: "University of Mumbai",
      place: "Shri GPM Degree College of Science and Commerce",
      period: "June 2025 — Present",
    },
    {
      kind: "Learning Experience",
      title: "Self-Directed Backend Development Training",
      subtitle: "Independent study & coursework",
      period: "July 2025 — Present",
      description:
        "Learning Java, Spring Boot, Hibernate and MySQL while building backend, full-stack and AI-integrated projects independently and through coursework.",
    },
  ],

  marquee: [
    "JAVA",
    "SPRING BOOT",
    "REST APIs",
    "REACT",
    "MYSQL",
    "AI CHATBOT",
    "HIBERNATE",
    "BACKEND ARCHITECTURE",
    "TYPESCRIPT",
    "JDBC",
    "SPRING AI",
    "CLEAN CODE",
  ],

  resumePath: "/resume/Mohammad_Aamir_Resume.pdf",

  contact: {
    serviceId: import.meta.env["VITE_EMAILJS_SERVICE_ID"] ?? "",
    templateId: import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] ?? "",
    publicKey: import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] ?? "",
  },
};