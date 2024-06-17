// U63166005
// Coding Challenge #11

function main(){

    let data = [100, 420, 230, 850, 560, 925]
    let width = 500
    let margin = 1
    let barHeight = 21      //21 pixels to account for 1 pixel margin
    
    let scale = d3.scaleLinear()
                    .domain([d3.min(data),d3.max(data)])    // Includes entirety of data
                    .range([50,500])                        // min of 50, max of 500

    d3.select('body')
        .append('svg')      // Creates svg
        .attr('width', width)
        .attr('height', barHeight*data.length - margin) // 21 pixels per data point, minus 1 margin as only 5 margins are needed

    let group = d3.select('svg')
                    .selectAll('g')
                    .data(data)
                    .enter()
                    .append('g')    // creates groups
                    .attr('transform',function(d,i){
                        return 'translate(0,'+ i*barHeight + ')'    // sets location for group elements
                    })

    group.append('rect')
                    .attr('fill', 'darkgreen')
                    .attr('height', barHeight - margin) // sets height of rectangles
                    .transition()
                    .ease(d3.easeLinear)                // loads bar in from left
                    .duration(1000)
                    .attr('width',function(d){
                        return scale(d)                 // scales width of rectangles
                    })

    group.append('text')
                    .attr('stroke', 'black')        // sets color of text
                    .attr('text-anchor', 'end')     // moves text to the end of bars
                    .attr('y',barHeight/2)
                    .attr('dy','.30em')
                    .text(function(d){
                        return d                    // sets value of text
                    })
                    .transition()
                    .ease(d3.easeLinear)            // Loads bar in from left
                    .duration(1000)
                    .delay(1250)                    // loads in text after bars have reached full width
                    .attr('x',function(d){          // sets location of text
                        return(scale(d))
                    });

    group.selectAll("rect")
    .on("mouseover", function(){                    // sets event listener
        d3.select(this)
            .style("fill","lightgreen")             // changes color
        })
    .on("mouseout", 
        function(){
            d3.select(this)
            .style("fill","darkgreen")
        })
}