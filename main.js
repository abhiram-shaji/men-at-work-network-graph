//mainjs

import { tasks, links } from './data.js';

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
    .force("link", d3.forceLink(links)
        .id(d => d.id)
        .distance(300) // Increase distance to allow longer links
        .strength(0)) // Reduce strength to make the links stretchable
    .force("charge", null)  // Remove the charge force that causes repelling
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", null)  // Remove horizontal repelling force
    .force("y", null)  // Remove vertical repelling force
    .on("tick", ticked);


// Draw links
const link = svgGroup.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("class", "link");

// Draw rectangles with text
const node = svgGroup.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(tasks)
    .enter().append("g")
    .call(d3.drag() // Dragging behavior
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
    .on("mouseover", handleMouseOver) // Highlight on mouseover
    .on("mouseout", handleMouseOut);  // Reset on mouseout

// Append rectangles
const colorScale = d3.scaleOrdinal(d3.schemeCategory10);  // Use D3's color scheme

node.append("rect")
    .attr("width", d => d.name.length * 10 + 20)
    .attr("height", 40)
    .attr("x", d => -(d.name.length * 5 + 10))
    .attr("y", -20)
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("fill", d => colorScale(d.group))  // Assign color based on the group
    .attr("stroke", d => d3.rgb(colorScale(d.group)).darker())  // Darker stroke of the same color
    .attr("stroke-width", 2);


// Append text inside the rectangles
node.append("text")
    .attr("dx", 0)
    .attr("dy", ".35em")
    .style("text-anchor", "middle")
    .text(d => d.name);

// Update node and link positions during simulation
function ticked() {
    link
        .attr("x1", d => Math.max(20, Math.min(width - 20, d.source.x)))
        .attr("y1", d => Math.max(20, Math.min(height - 20, d.source.y)))
        .attr("x2", d => Math.max(20, Math.min(width - 20, d.target.x)))
        .attr("y2", d => Math.max(20, Math.min(height - 20, d.target.y)));

    node
        .attr("transform", d => `translate(${Math.max(20, Math.min(width - 20, d.x))}, ${Math.max(20, Math.min(height - 20, d.y))})`);
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
    d.fx = null;  // Allow nodes to stay where they are moved
    d.fy = null;
}

// Highlight node and links on mouseover
function handleMouseOver(event, d) {
    link
        .style("stroke", l => (l.source === d || l.target === d) ? "#ff0000" : "#999")
        .style("stroke-width", l => (l.source === d || l.target === d) ? 3 : 1.5);
    node.select("rect")
        .attr("stroke", n => (n === d) ? "#ff0000" : "steelblue")
        .attr("stroke-width", n => (n === d) ? 3 : 2);
}

// Reset the highlighting on mouseout
function handleMouseOut() {
    link
        .style("stroke", "#999")
        .style("stroke-width", 1.5);
    node.select("rect")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2);
}

// Resize SVG and elements on window resize
window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    svg.attr("width", newWidth).attr("height", newHeight);
    simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2)).restart();
});
