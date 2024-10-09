//data.js

export const tasks = [
    // Project Planning and Setup (Group 1)
    { id: 1, name: "Project Planning", group: 1, fx: 50 },
    { id: 10, name: "Review RFP (Tyrell & Abdul)", group: 1 },
    { id: 11, name: "Set up project management (Abhiram)", group: 1 },
    { id: 12, name: "Define roles and tasks (Tyrell)", group: 1 },
    { id: 13, name: "Create timeline (Tousin & Tyrell)", group: 1 },

    // Technology Setup (Group 2)
    { id: 2, name: "Tech Stack Setup", group: 2 },
    { id: 20, name: "Choose tech stack (Abhiram & Yogesh)", group: 2 },
    { id: 21, name: "Set up environment and repository (Yogesh)", group: 2 },
    { id: 22, name: "Set up CI/CD (Abhiram)", group: 2 },

    // Design Phase (Group 3)
    { id: 3, name: "Design Phase", group: 3 },
    { id: 30, name: "Home Page Design (Tyrell)", group: 3 },
    { id: 31, name: "About Page Design (Tousin)", group: 3 },
    { id: 32, name: "Presenters Page Design (Tyrell)", group: 3 },
    { id: 33, name: "Schedule Page Design (Tousin)", group: 3 },
    { id: 34, name: "Registration Page Design (Tyrell)", group: 3 },
    { id: 35, name: "Design review (Tyrell & Abdul)", group: 3 },

    // Development Phase (Group 4)
    { id: 4, name: "Frontend & Backend Development", group: 4 },
    { id: 40, name: "Frontend (Abhiram & Yogesh)", group: 4 },
    { id: 41, name: "Backend - User management, CMS (Abhiram)", group: 4 },
    { id: 42, name: "Payment integration (Yogesh)", group: 4 },
    { id: 43, name: "SEO, Accessibility, Social Media (Abhiram & Tyrell)", group: 4 },
    { id: 44, name: "Analytics setup (Yogesh)", group: 4 },

    // Content Integration (Group 5)
    { id: 5, name: "Content Integration", group: 5 },
    { id: 50, name: "Collect content (Abdul)", group: 5 },
    { id: 51, name: "Upload to CMS (Tyrell & Abdul)", group: 5 },

    // Testing Phase (Group 6)
    { id: 6, name: "Testing", group: 6 },
    { id: 60, name: "Unit/functional testing (Yogesh & Abdul)", group: 6 },
    { id: 61, name: "Payment testing (Abdul)", group: 6 },
    { id: 62, name: "Responsiveness testing (Tousin & Abdul)", group: 6 },

    // Launch Prep (Group 7)
    { id: 7, name: "Launch Preparation", group: 7 },
    { id: 70, name: "Optimize website (Yogesh)", group: 7 },
    { id: 71, name: "Final hosting setup, domain, SSL (Abhiram)", group: 7 },
    { id: 72, name: "CMS training (Abdul & Tyrell)", group: 7 },

    // Launch (Group 8)
    { id: 8, name: "Soft Launch & Fixes", group: 8 },
    { id: 80, name: "Soft launch (Abhiram & Abdul)", group: 8 },
    { id: 81, name: "Fix soft launch issues (Yogesh & Tyrell)", group: 8 },
    { id: 9, name: "Full Launch", group: 8, fx: window.innerWidth - 150 },

    // Post-Launch (Group 9)
    { id: 90, name: "Bug fixes (Yogesh)", group: 9 },
    { id: 91, name: "Implement feedback (Tyrell & Tousin)", group: 9 },
    { id: 92, name: "Analytics review (Abdul)", group: 9 }
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
