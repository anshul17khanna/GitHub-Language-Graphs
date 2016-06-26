var arr = [];
var repos = [];
var languages_data = {};
var language_keys = [];
var language_values = [];

function init(){
    var barData = {
        labels: language_keys,
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: "rgba(220,220,220,0.5)",
            data: language_values
        }]
    };

    var barC = document.getElementById("barChart").getContext("2d");
    window.BarChart = new Chart(barC, {
        type: 'bar',
        data: barData,
        options: {
            elements: {
                rectangle: {
                    borderWidth: 2,
                    borderColor: 'rgb(0, 255, 0)',
                    borderSkipped: 'bottom'
                }
            },
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            },
            maintainAspectRatio: false
        }
    });

    var lineData = {
        type: 'line',
        data: {
            labels: language_keys,
            datasets: [{
                label: "My First dataset",
                data: language_values,
                fill: false,
                borderDash: [5, 5],
            }, {
                hidden: true,
                label: 'hidden dataset',
                data: language_values
            }, {
                label: "My Second dataset",
                data: language_values,
            }]
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'label'
            },
            hover: {
                mode: 'dataset'
            },
            scales: {
                xAxes: [{
                    display: true
                }]
            },
            maintainAspectRatio: false
        }
    };

    var lineC = document.getElementById("lineChart").getContext("2d");
    window.LineChart = new Chart(lineC, lineData);

    var pieData = {
        type: 'pie',
        data: {
            datasets: [{
                data: language_values,
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ]
            }, {
                data: language_values,
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
            }, {
                data: language_values,
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
            }],
            labels: language_keys
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    };

    var pieC = document.getElementById("pieChart").getContext("2d");
    window.PieChart = new Chart(pieC, pieData);

    var doughnutData = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: language_values,
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
                label: 'Dataset 1'
            }, {
                hidden: true,
                data: language_values,
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
                label: 'Dataset 2'
            }, {
                data: language_values,
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                ],
                label: 'Dataset 3'
            }],
            labels: language_keys
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            maintainAspectRatio: false
        }
    };

    var doughnutC = document.getElementById("doughnutChart").getContext("2d");
    window.DoughnutChart = new Chart(doughnutC, doughnutData);

    var randomScalingFactor = function(){
        return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    };
    var randomColorFactor = function(){
        return Math.round(Math.random() * 255);
    };
    var randomColor = function(){
        return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
    };
    var radiusData = [];
    for(var k =0; k<language_keys.length; k++){
        radiusData.push({
            x: randomScalingFactor(),
            y: randomScalingFactor(),
            r: language_values[k],
        });
    }
    var bubbleData = {
        animation: {
            duration: 10000
        },
        datasets: [{
            label: "My First dataset",
            backgroundColor: randomColor(),
            data: radiusData
        }, {
            label: "My Second dataset",
            backgroundColor: randomColor(),
            data: radiusData
        }]
    };

    var bubbleC = document.getElementById("bubbleChart").getContext("2d");
    window.BubbleChart = new Chart(bubbleC, {
        type: 'bubble',
        data: bubbleData,
        options: {
            responsive: true,
            title:{
                display:true,
                text:'Chart.js Bubble Chart'
            },
            maintainAspectRatio: false
        }
    });

    var radarData = {
        type: 'radar',
        data: {
            labels: language_keys,
            datasets: [{
                label: 'Hidden dataset',
                data: language_values
            }, {
                label: "My Second dataset",
                backgroundColor: "rgba(151,187,205,0.2)",
                pointBackgroundColor: "rgba(151,187,205,1)",
                hoverPointBackgroundColor: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: language_values
            }]
        },
        options: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Radar Chart'
            },
            scale: {
              reverse: false,
              gridLines: {
                color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
              },
              ticks: {
                beginAtZero: true
              }
            },
            maintainAspectRatio: false
        }
    };

    window.RadarChart = new Chart(document.getElementById("radarChart"), radarData);
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
