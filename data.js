// Task nodes with names and IDs
export const tasks = [
    { id: 1, name: "Project Planning", fx: 50 },  // Fixed x position on the left
    { id: 2, name: "Tech Stack Setup" },
    { id: 3, name: "Design Phase" },
    { id: 4, name: "Frontend & Backend Development" },
    { id: 5, name: "Content Integration" },
    { id: 6, name: "Testing" },
    { id: 7, name: "Launch Preparation" },
    { id: 8, name: "Soft Launch & Fixes" },
    { id: 9, name: "Full Launch", fx: window.innerWidth - 150 }  // Fixed x position on the right
];

// Define links (dependencies) between the tasks
export const links = [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    { source: 7, target: 8 },
    { source: 8, target: 9 }
];
