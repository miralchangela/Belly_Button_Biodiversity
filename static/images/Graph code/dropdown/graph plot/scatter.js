var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "scatter",
    mode: "lines+markers" // here we can use 'lines' , 'markers' or 'lines+markers'
   };
   var data = [trace];
   var layout = {
    title: "'Scatter' Plot",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea4", data, layout); 