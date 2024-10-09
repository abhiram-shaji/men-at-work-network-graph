export const tasks = [
    // Project Planning and Setup
    { id: 1, name: "Project Planning", fx: 50 },
    { id: 10, name: "Review RFP (Tyrell & Abdul)" },
    { id: 11, name: "Set up project management (Abhiram)" },
    { id: 12, name: "Define roles and tasks (Tyrell)" },
    { id: 13, name: "Create timeline (Tousin & Tyrell)" },

    // Technology Setup
    { id: 2, name: "Tech Stack Setup" },
    { id: 20, name: "Choose tech stack (Abhiram & Yogesh)" },
    { id: 21, name: "Set up environment and repository (Yogesh)" },
    { id: 22, name: "Set up CI/CD (Abhiram)" },

    // Design Phase
    { id: 3, name: "Design Phase" },
    { id: 30, name: "Home Page Design (Tyrell)" },
    { id: 31, name: "About Page Design (Tousin)" },
    { id: 32, name: "Presenters Page Design (Tyrell)" },
    { id: 33, name: "Schedule Page Design (Tousin)" },
    { id: 34, name: "Registration Page Design (Tyrell)" },
    { id: 35, name: "Design review (Tyrell & Abdul)" },

    // Development Phase
    { id: 4, name: "Frontend & Backend Development" },
    { id: 40, name: "Frontend (Abhiram & Yogesh)" },
    { id: 41, name: "Backend - User management, CMS (Abhiram)" },
    { id: 42, name: "Payment integration (Yogesh)" },
    { id: 43, name: "SEO, Accessibility, Social Media (Abhiram & Tyrell)" },
    { id: 44, name: "Analytics setup (Yogesh)" },

    // Content Integration
    { id: 5, name: "Content Integration" },
    { id: 50, name: "Collect content (Abdul)" },
    { id: 51, name: "Upload to CMS (Tyrell & Abdul)" },

    // Testing Phase
    { id: 6, name: "Testing" },
    { id: 60, name: "Unit/functional testing (Yogesh & Abdul)" },
    { id: 61, name: "Payment testing (Abdul)" },
    { id: 62, name: "Responsiveness testing (Tousin & Abdul)" },

    // Launch Prep
    { id: 7, name: "Launch Preparation" },
    { id: 70, name: "Optimize website (Yogesh)" },
    { id: 71, name: "Final hosting setup, domain, SSL (Abhiram)" },
    { id: 72, name: "CMS training (Abdul & Tyrell)" },

    // Launch
    { id: 8, name: "Soft Launch & Fixes" },
    { id: 80, name: "Soft launch (Abhiram & Abdul)" },
    { id: 81, name: "Fix soft launch issues (Yogesh & Tyrell)" },
    { id: 9, name: "Full Launch", fx: window.innerWidth - 150 },

    // Post-Launch
    { id: 90, name: "Bug fixes (Yogesh)" },
    { id: 91, name: "Implement feedback (Tyrell & Tousin)" },
    { id: 92, name: "Analytics review (Abdul)" }
];

// Define links (dependencies) between the tasks
export const links = [
    // Linking major phases
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    { source: 7, target: 8 },
    { source: 8, target: 9 },

    // Subtasks links (within Project Planning and Setup)
    { source: 1, target: 10 },
    { source: 1, target: 11 },
    { source: 1, target: 12 },
    { source: 1, target: 13 },

    // Subtasks links (within Technology Setup)
    { source: 2, target: 20 },
    { source: 2, target: 21 },
    { source: 2, target: 22 },

    // Subtasks links (within Design Phase)
    { source: 3, target: 30 },
    { source: 3, target: 31 },
    { source: 3, target: 32 },
    { source: 3, target: 33 },
    { source: 3, target: 34 },
    { source: 3, target: 35 },

    // Subtasks links (within Development Phase)
    { source: 4, target: 40 },
    { source: 4, target: 41 },
    { source: 4, target: 42 },
    { source: 4, target: 43 },
    { source: 4, target: 44 },

    // Subtasks links (within Content Integration)
    { source: 5, target: 50 },
    { source: 5, target: 51 },

    // Subtasks links (within Testing Phase)
    { source: 6, target: 60 },
    { source: 6, target: 61 },
    { source: 6, target: 62 },

    // Subtasks links (within Launch Preparation)
    { source: 7, target: 70 },
    { source: 7, target: 71 },
    { source: 7, target: 72 },

    // Subtasks links (within Launch)
    { source: 8, target: 80 },
    { source: 8, target: 81 },

    // Subtasks links (within Post-Launch)
    { source: 9, target: 90 },
    { source: 9, target: 91 },
    { source: 9, target: 92 }
];
