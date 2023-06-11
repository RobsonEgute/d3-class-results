const results = [
    {name: 'richard', score: 60},
    {name: 'bob', score: 50},
    {name: 'cynthia', score: 30},
    {name: 'boris', score: 18},
    {name: 'rick', score: 80},
    {name: 'alicia', score: 40},
    {name: 'leo', score: 50},
    {name: 'patrick', score: 95},
    {name: 'ornella', score: 45},
    {name: 'james', score: 85}
]
let width, height, padding, xAxis, yAxis, genAxis;

width = 600;
height = 500;
padding = 30;
const svg = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('class', 'svg-container')

const xScale = d3.scaleBand()
                    .domain(d3.range(results.length))
                    .range([padding, width - padding])
                    .padding(0.1)
const yScale = d3.scaleLinear()
                    .domain([0, 100])
                    .range([height - padding, padding])

const heightScale = d3.scaleLinear()
                    .domain([0, 100])
                    .range([0, height - (padding * 2)])


    xAxis = d3.axisBottom(xScale).tickFormat((d, i) => results[i].name);
    yAxis = d3.axisLeft(yScale);
    svg.append('g')
        .call(xAxis)
        .attr("transform", "translate(0," + (height - padding) + ")")

    svg.append('g')
        .call(yAxis)
        .attr("transform", "translate(" + padding + ",0)")

    svg.selectAll('rect')
        .data(results.sort((a, b) => d3.descending(a.score, b.score)))
        .enter()
        .append('rect')
        .attr('width', xScale.bandwidth())
        .attr('height', (d, i) => heightScale(d.score))
        .attr('x', (d, i) => xScale(i))
        .attr('y', (d, i) => (height - padding) - heightScale(d.score) )
        .on('mouseover', function() {
            let val = d3.select(this);

        })

        // New Bar Chart of example data

const popData = [
    {population: 2452, date: '2/03/2010'},
    {population: 3783, date: '2/03/2015'},
    {population: 4690, date: '2/03/2010'},
    {population: 9000, date: '2/03/2010'},
    {population: 65000, date: '2/03/2010'}
]

let x, y, hAxis

let targetNode = document.querySelector('.ex2');

let secSvg = d3.select('div.ex2')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .style('background-color', 'brown')
                .attr('class', 'sec-svg')

