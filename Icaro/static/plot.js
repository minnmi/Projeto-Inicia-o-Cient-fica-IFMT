Plotly.d3.csv("file", function(data) {
    Plotly.newPlot('chart1', [{ x: [], y: [] }], { title: 'Sensor 1' });
    Plotly.newPlot('chart2', [{ x: [], y: [] }], { title: 'Sensor 2' });
    Plotly.newPlot('chart3', [{ x: [], y: [] }], { title: 'Sensor 3' });
    Plotly.newPlot('chart4', [{ x: [], y: [] }], { title: 'Sensor 4' });
});

var date, value;

function getXData() {
	Plotly.d3.csv("file", function(data) { date = data[data.length-1]['date'] });
	return date;
}

function getYData() {
	Plotly.d3.csv("file", function(data) { value = data[data.length-1]['value'] });
	return value;
}

var count = 0;
var timestamp = Date.now();

setInterval(function(){
	Plotly.extendTraces('chart1',{ x:[[getXData()]], y:[[getYData()]]}, [0]);
	Plotly.extendTraces('chart2',{ x:[[getXData()]], y:[[getYData()]]}, [0]);
	Plotly.extendTraces('chart3',{ x:[[getXData()]], y:[[getYData()]]}, [0]);
	Plotly.extendTraces('chart4',{ x:[[getXData()]], y:[[getYData()]]}, [0]);

	if(Date.now() - 20000 > timestamp) {
        Plotly.relayout('chart1',{ 'xaxis.range': [Date.now() - 20000, Date.now()]});
		Plotly.relayout('chart2',{ 'xaxis.range': [Date.now() - 20000, Date.now()]});
		Plotly.relayout('chart3',{ 'xaxis.range': [Date.now() - 20000, Date.now()]});
		Plotly.relayout('chart4',{ 'xaxis.range': [Date.now() - 20000, Date.now()]});
    }
},10);
