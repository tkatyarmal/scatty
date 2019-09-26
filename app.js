const height=500;
const width=800;
const padding = 50;
































// tooltips are for the end of the demo

showTooltip = () => {
  const d = { data: `anything` }
  const tooltipText = ``;
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
