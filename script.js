function main(){

    let data = [100, 420, 230, 850, 560, 925]
    let width = 500
    let margin = 1
    let barHeight = 20
    
    let scale = d3.scaleLinear()
                    .domain([d3.min(data),d3.max(data)])    // Includes entirety of data
                    .range([50,500])                        // min of 50, max of 500

    d3.select('body')
        .append('svg')      // Creates svg
        .attr('width', width)
        .attr('height', barHeight*data.length + (data.length-1)*margin) // 20 pixels per data point and 1 pixel margin between each data point

}