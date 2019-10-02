const height=500;
const width=800;
const padding = 50;

// seelct DOM elements by id
const graph = d3.select('#scatterplot')
const plot = graph.selectAll('circle')

const scaleX = d3.scaleLinear()
  .domain(d3.extent(regionData,d=> d.medianAge))
  .range([padding , width-padding])

const scaleY = d3.scaleLinear()
  .domain(d3.extent(regionData,d=> d.urbanPopulationRate))
  .range([padding , height-padding])

const scaleColour = d3.scaleLinear()
  .domain (d3.extent(regionData,d=> d.extremePovertyRate))
  .range (['yellow','green'])



const col = d => scaleColour(d.extremePovertyRate)
const xPos = d => scaleX(d.medianAge)
const yPos = d => scaleY(d.urbanPopulationRate)


  plot.data(regionData)
    .enter()
    .append('svg:circle')
    .attr('r',5)
    .attr('cx',xPos)
    .attr('cy',yPos)

    .style ('fill', col)

    .on ('mouseover', d => showTooltip (d))
    .on ('mouseout', d => removeTooltips ())



// tooltips are for the end of the demo

showTooltip = d => {
  const tooltipText = d.region;
  const tooltip = d3.select('body')
      .append("div")

  console.log (tooltip);
  tooltip
        .classed ('tooltip',true)
        .text (tooltipText)
        .style ("position", 'absolute')
        .style ("left", xPos(d)+0+'px')
        .style ("top", yPos(d)+0+'px')
        // .attr("x", xPos(d)+12)
        // .attr("y", yPos(d)+5)
}

removeTooltips = () => {
  d3.select('body')
      .selectAll(".tooltip")
        .remove();
}



var x_axis = d3.axisBottom()
  .scale(scaleX)
  // .attr('x', padding)

var y_axis = d3.axisLeft()
  .scale(scaleY)
  // .attr('y', padding)

graph.append("svg")
  .call(x_axis)