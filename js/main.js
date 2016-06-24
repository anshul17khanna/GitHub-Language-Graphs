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
