var arr = [];
var repos = [];
var languages_data = {};
var language_keys = [];
var language_values = [];

function init(){
    var barData = {
        labels: language_keys,
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(247, 70, 74,0.5)",
            strokeColor: "rgba(247, 70, 74,0.8)",
            highlightFill: "rgba(247, 70, 74,0.75)",
            highlightStroke: "rgba(247, 70, 74,1)",
            data: language_values
        }]
    };

    var barC = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barC).Bar(barData, { responsive: true, maintainAspectRatio: false });

    var lineData = {
			  labels: language_keys,
			  datasets: [{
    				label: "My First dataset",
    				fillColor: "rgba(0, 204, 102,0.2)",
    				strokeColor: "rgba(0, 204, 102,1)",
    				pointColor: "rgba(0, 204, 102,1)",
    				pointStrokeColor: "#fff",
    				pointHighlightFill: "#fff",
    				pointHighlightStroke: "rgba(0, 204, 102,1)",
    				data: language_values
		    }]
    };

    var lineC = $("#lineChart").get(0).getContext("2d");
		var lineChart = new Chart(lineC).Line(lineData, { responsive: true, maintainAspectRatio: false });

    var colorss = ['#3366ff','#5cd65c','#d98cb3','#3366ff','#5cd65c','#d98cb3','#3366ff','#5cd65c','#d98cb3'];

    var pieData = [];
    var pieC = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieC).Pie(pieData, { responsive: true, maintainAspectRatio: false });

    for(var i=0; i<language_values.length; i++){
        pieChart.addData({
  					value: language_values[i],
  					color: colorss[i],
  					highlight: colorss[i].highlight,
  					label: language_keys[i]
  			});
    }

    var doughnutData =[];
    var doughnutC = $("#doughnutChart").get(0).getContext("2d");
		var doughnutChart = new Chart(doughnutC).Doughnut(doughnutData, { responsive: true, maintainAspectRatio: false });

    for(var i=0; i<language_values.length; i++){
        doughnutChart.addData({
  					value: language_values[i],
  					color: colorss[i],
  					highlight: colorss[i].highlight,
  					label: language_keys[i]
  			});
    }

    var radarDataSet = [];
    radarDataSet.push({
        label: "My First dataset",
        fillColor: "rgba(0, 204, 102,0.2)",
        strokeColor: "rgba(0, 204, 102,1)",
        pointColor: "rgba(0, 204, 102,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(0, 204, 102,1)",
        data: language_values
    });

    var radarData = {
			  labels: language_keys,
			  datasets: radarDataSet
    };

    var radarC = $("#radarChart").get(0).getContext("2d");
		var radarChart = new Chart(radarC).Radar(radarData, { responsive: true, maintainAspectRatio: false });
}

window.onload = init;

$.getJSON("https://api.github.com/users/anshul17khanna/repos?callback=?", function(data){

    $(data.data).each(function(i,d){
        repos.push(d.name);
        if(!languages_data[d.language])
            languages_data[d.language] = parseInt('1');
        else
            languages_data[d.language] += 1;
    });

    for (var k in languages_data){
        if (languages_data.hasOwnProperty(k)){
            language_keys.push(k);
            language_values.push(languages_data[k]);
        }
    }
});
