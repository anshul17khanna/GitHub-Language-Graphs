function init(){
    var repos = [];
    $.getJSON("https://api.github.com/users/anshul17khanna/repos?callback=?", function(data){
        $(data.data).each(function(i,d){
            if(d.language===null)
                repos.push("null");
            else
                repos.push(d.language);
        });
        alert(repos);
    });

    requirejs(["js/Chart.js"], function(Chart) {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
                datasets: [{
                    label: '# of Votes',
                    data: [200,145,53,9,164],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    });
}

window.onload = init;
