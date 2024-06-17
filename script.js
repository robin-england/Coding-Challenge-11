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
                .append('g')    // Creates groups
                .attr('transform',function(d,i){
                    return 'translate(0,'+ i*barHeight + ')'    // sets location for group elements
                })

group.append('rect')
                .attr('fill', 'darkgreen')
                .attr('width',function(d){
                    return scale(d)                 // scales width of rectangles
                })
                .attr('height', barHeight - margin) // sets height of rectangles
}