// Task nodes with names and IDs
const tasks = [
    { id: 1, name: "Project Planning", fx: 50 },  // Fixed x position on the left
    { id: 2, name: "Tech Stack Setup" },
    { id: 3, name: "Design Phase" },
    { id: 4, name: "Frontend & Backend Development" },
    { id: 5, name: "Content Integration" },
    { id: 6, name: "Testing" },
    { id: 7, name: "Launch Preparation" },
    { id: 8, name: "Soft Launch & Fixes" },
    { id: 9, name: "Full Launch", fx: window.innerWidth - 50 }  // Fixed x position on the right
];

// Define links (dependencies) between the tasks
const links = [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    { source: 7, target: 8 },
    { source: 8, target: 9 }
];

// Set up the SVG canvas dimensions and add zoom/pan support
const svg = d3.select("svg")
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight)
    .call(d3.zoom().on("zoom", function (event) {
        svgGroup.attr("transform", event.transform);
    }));

const svgGroup = svg.append("g"); // Group for pan and zoom

const width = window.innerWidth;
const height = window.innerHeight;

// Create a simulation to layout the nodes and links
const simulation = d3.forceSimulation(tasks)
    .force("link", d3.forceLink(links).id(d => d.id).distance(150))
    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(50))  // Prevent overlap
    .on("tick", ticked);

// Draw links
const link = svgGroup.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("class", "link");

// Draw nodes with drag behavior
const node = svgGroup.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(tasks)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 20)
    .call(d3.drag() // Dragging behavior
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
    .on("mouseover", handleMouseOver) // Highlight on mouseover
    .on("mouseout", handleMouseOut);  // Reset on mouseout

// Add labels to nodes
const text = svgGroup.append("g")
    .selectAll("text")
    .data(tasks)
    .enter()
    .append("text")
    .attr("dx", 12)
    .attr("dy", ".35em")
    .text(d => d.name);

// Update node and link positions during simulation
function ticked() {
    link
        .attr("x1", d => Math.max(20, Math.min(width - 20, d.source.x)))
        .attr("y1", d => Math.max(20, Math.min(height - 20, d.source.y)))
        .attr("x2", d => Math.max(20, Math.min(width - 20, d.target.x)))
        .attr("y2", d => Math.max(20, Math.min(height - 20, d.target.y)));

    node
        .attr("cx", d => Math.max(20, Math.min(width - 20, d.x)))
        .attr("cy", d => Math.max(20, Math.min(height - 20, d.y)));

    text
        .attr("x", d => Math.max(20, Math.min(width - 20, d.x + 25)))
        .attr("y", d => Math.max(20, Math.min(height - 20, d.y)));
}

// Drag behavior functions
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    
    // Snap the first and last nodes back to their designated x positions
    if (d.id === 1) {  // Project Planning node
        d.fx = 50;  // Snap back to fixed x on the left
    } else if (d.id === 9) {  // Full Launch node
        d.fx = width - 50;  // Snap back to fixed x on the right
    } else {
        d.fx = null;  // Allow other nodes to stay where they are
    }
    d.fy = null;  // Vertical movement can remain free
}

// Highlight node and links on mouseover
function handleMouseOver(event, d) {
    link
        .style("stroke", l => (l.source === d || l.target === d) ? "#ff0000" : "#999")
        .style("stroke-width", l => (l.source === d || l.target === d) ? 3 : 1.5);
    node
        .attr("r", n => (n === d) ? 30 : 20);
}

// Reset the highlighting on mouseout
function handleMouseOut() {
    link
        .style("stroke", "#999")
        .style("stroke-width", 1.5);
    node
        .attr("r", 20);
}

// Resize SVG and elements on window resize
window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    svg.attr("width", newWidth).attr("height", newHeight);
    simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2)).restart();

    // Update the fixed x positions for Project Planning and Full Launch nodes
    tasks.find(d => d.id === 1).fx = 50;
    tasks.find(d => d.id === 9).fx = newWidth - 50;
});
