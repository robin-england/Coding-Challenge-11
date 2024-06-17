function main(){

    let data = [100, 420, 230, 850, 560, 925]
    let width = 500
    let margin = 1
    let barHeight = 20
    
    
    d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', barHeight*data.length + (data.length-1)*margin)

}