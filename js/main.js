var arr = [];
var repos = [];
var languages_data = {};
var language_keys = [];
var language_values = [];
var github_colors = { "null": "#F7464A", "Mercury": "#ff2b2b", "TypeScript": "#2b7489", "PureBasic": "#5a6986", "Objective-C++": "#6866fb", "Self": "#0579aa", "NewLisp": "#87AED7", "Jupyter Notebook": "#DA5B0B", "Rebol": "#358a5b", "Frege": "#00cafe", "Dart": "#00B4AB", "AspectJ": "#a957b0", "Shell": "#89e051", "Web Ontology Language": "#9cc9dd", "AppleScript": "#101F1F", "Eiffel": "#946d57", "Nix": "#7e7eff", "RAML": "#77d9fb", "Nginx": "#9469E9", "MTML": "#b7e1f4", "Elixir": "#6e4a7e", "SAS": "#B34936", "Agda": "#315665", "wisp": "#7582D1", "D": "#ba595e", "Sass": "#CF649A", "Kotlin": "#F18E33", "Opal": "#f7ede0", "Crystal": "#776791", "Perl6": "#0000fb", "Batchfile": "#C1F12E", "Bison": "#6A463F", "Oz": "#fab738", "Mirah": "#c7a938", "Objective-J": "#ff0c5a", "Gosu": "#82937f", "FreeMarker": "#0050b2", "Less": "#A1D9A1", "Ruby": "#701516", "Component Pascal": "#B0CE4E", "Arc": "#aa2afe", "Brainfuck": "#2F2530", "Nit": "#009917", "APL": "#5A8164", "Hack": "#878787", "Go": "#375eab", "World of Warcraft Addon Data": "#e0b330", "Visual Basic": "#945db7", "PHP": "#4F5D95", "Cirru": "#ccccff", "SQF": "#3F3F3F", "Glyph": "#e4cc98", "Java": "#b07219", "MAXScript": "#00a6a6", "Scala": "#DC322F", "ColdFusion CFC": "#ed2cd6", "Makefile": "#427819", "ColdFusion": "#ed2cd6", "Perl": "#0298c3", "Lua": "#000080", "Vue": "#2c3e50", "Verilog": "#b2b7f8", "Factor": "#636746", "Haxe": "#df7900", "Pure Data": "#91de79", "Forth": "#341708", "Red": "#ee0000", "Hy": "#7790B2", "Volt": "#1F1F1F", "LSL": "#3d9970", "eC": "#913960", "Terra": "#00004c", "CoffeeScript": "#244776", "HTML": "#e44b23", "Lex": "#DBCA00", "API Blueprint": "#2ACCA8", "Swift": "#ffac45", "SCSS": "#CF649A", "C": "#555555", "AutoHotkey": "#6594b9", "Isabelle": "#FEFE00", "RDoc": "#8E84BF", "Metal": "#8f14e9", "Clarion": "#db901e", "GraphQL": "#E535AB", "JSONiq": "#40d47e", "Boo": "#d4bec1", "AutoIt": "#1C3552", "Clojure": "#db5855", "Rust": "#dea584", "Prolog": "#74283c", "SourcePawn": "#5c7611", "AMPL": "#E6EFBB", "FORTRAN": "#4d41b1", "ANTLR": "#9DC3FF", "NumPy": "#9C8AF9", "reStructuredText": "#B3BCBC", "Harbour": "#0e60e3", "Yacc": "#4B6C4B", "Tcl": "#e4cc98", "BlitzMax": "#cd6400", "PigLatin": "#fcd7de", "xBase": "#403a40", "LLVM": "#185619", "Lasso": "#999999", "ECL": "#8a1267", "VHDL": "#adb2cb", "Elm": "#60B5CC", "Propeller Spin": "#7fa2a7", "X10": "#4B6BEF", "IDL": "#a3522f", "ATS": "#1ac620", "Ada": "#02f88c", "Nu": "#c9df40", "LFE": "#004200", "SuperCollider": "#46390b", "Oxygene": "#cdd0e3", "ASP": "#6a40fd", "Assembly": "#6E4C13", "Gnuplot": "#f0a9f0", "JFlex": "#DBCA00", "NetLinx": "#0aa0ff", "C#": "#178600", "Turing": "#45f715", "Vala": "#fbe5cd", "Processing": "#0096D8", "Arduino": "#bd79d1", "FLUX": "#88ccff", "NetLogo": "#ff6375", "Cucumber": "#5B2063", "CSS": "#563d7c", "Emacs Lisp": "#c065db", "Stan": "#b2011d", "SaltStack": "#646464", "EJS": "#a91e50", "QML": "#44a51c", "Pike": "#005390", "LOLCODE": "#cc9900", "ooc": "#b0b77e", "XSLT": "#EB8CEB", "Handlebars": "#01a9d6", "J": "#9EEDFF", "Mask": "#f97732", "EmberScript": "#FFF4F3", "TeX": "#3D6117", "Nemerle": "#3d3c6e", "Cuda": "#3A4E3A", "KRL": "#28431f", "Ren'Py": "#ff7f7f", "Unified Parallel C": "#4e3617", "Golo": "#88562A", "Fancy": "#7b9db4", "OCaml": "#3be133", "Shen": "#120F14", "Pascal": "#E3F171", "F#": "#b845fc", "Puppet": "#302B6D", "ActionScript": "#882B0F", "Ragel in Ruby Host": "#9d5200", "Fantom": "#dbded5", "Zephir": "#118f9e", "Click": "#E4E6F3", "Smalltalk": "#596706", "DM": "#447265", "Ioke": "#078193", "PogoScript": "#d80074", "LiveScript": "#499886", "JavaScript": "#f1e05a", "VimL": "#199f4b", "PureScript": "#1D222D", "ABAP": "#E8274B", "Matlab": "#bb92ac", "Slash": "#007eff", "R": "#198CE7", "Erlang": "#B83998", "Pan": "#cc0000", "LookML": "#652B81", "Eagle": "#814C05", "Scheme": "#1e4aec", "Squirrel": "#800000", "Python": "#3572A5", "Max": "#c4a79c", "Common Lisp": "#3fb68b", "Latte": "#A8FF97", "XQuery": "#5232e7", "Omgrofl": "#cabbff", "XC": "#99DA07", "Nimrod": "#37775b", "SystemVerilog": "#DAE1C2", "Chapel": "#8dc63f", "Groovy": "#e69f56", "Dylan": "#6c616e", "E": "#ccce35", "Parrot": "#f3ca0a", "Grammatical Framework": "#79aa7a", "Game Maker Language": "#8fb200", "Papyrus": "#6600cc", "C++": "#f34b7d", "NetLinx+ERB": "#747faa", "Clean": "#3F85AF", "Alloy": "#64C800", "AGS Script": "#B9D9FF", "PLSQL": "#dad8d8", "PAWN": "#dbb284", "UnrealScript": "#a54c4d", "Standard ML": "#dc566d", "Slim": "#ff8f77", "Objective-C": "#438eff", "Julia": "#a270ba", "Haskell": "#29b544", "NCL": "#28431f", "Io": "#a9188d", "Rouge": "#cc0088", "Racket": "#22228f", "Haml": "#ECE2A9", "Dogescript": "#cca760", "nesC": "#94B0C7", "Markdown": "#083FA1" }
var language_colors = [];

function init(){
    var barData = {
        labels: language_keys,
        datasets: [{
            label: 'Repos ',
            backgroundColor: language_colors,
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
                    borderWidth: 5
                }
            },
            responsive: true,
            legend: {
                position: 'top',
                display: false
            },
            title: {
                fontSize: 30,
                display: true,
                text: 'Bar Chart'
            },
            maintainAspectRatio: false
        }
    });

    var lineData = {
        type: 'line',
        data: {
            labels: language_keys,
            datasets: [{
                label: "Repos ",
                data: language_values,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 10,
                pointBackgroundColor: language_colors,
                borderDash: [5, 5],
            }]
        },
        options: {
            responsive: true,
            title:{
                fontSize: 30,
                display:true,
                text:'Line Chart'
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
            legend: {
                position: 'top',
                display: false
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
                backgroundColor: language_colors
            }, {
                data: language_values,
                backgroundColor: language_colors
            }, {
                data: language_values,
                backgroundColor: language_colors
            }],
            labels: language_keys
        },
        options: {
            responsive: true,
            animation: {
                animateRotate: false,
                animateScale: true
            },
            title:{
                fontSize: 30,
                display:true,
                text:'Pie Chart'
            },
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
                backgroundColor: language_colors,
                label: 'Dataset 1'
            }, {
                hidden: true,
                data: language_values,
                backgroundColor: language_colors,
                label: 'Dataset 2'
            }, {
                data: language_values,
                backgroundColor: language_colors,
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
                fontSize: 30,
                display: true,
                text: 'Doughnut Chart'
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
            x: randomScalingFactor()/20,
            y: randomScalingFactor()/20,
            r: language_values[k],
        });
    }
    var bubbleData = {
        animation: {
            duration: 10000
        },
        datasets: [{
            backgroundColor: language_colors,
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
                fontSize: 30,
                display:true,
                text:'Bubble Chart'
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
                data: language_values,
                pointRadius: 3,
                pointHoverRadius: 5,
                pointBackgroundColor: language_colors,
            }]
        },
        options: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                fontSize: 30,
                display: true,
                text: 'Radar Chart'
            },
            scale: {
              reverse: false,
              gridLines: {
                color: language_colors
              },
              ticks: {
                beginAtZero: true
              }
            },
            maintainAspectRatio: false
        }
    };

    window.RadarChart = new Chart(document.getElementById("radarChart"), radarData);

    var polarData = {
        data: {
            datasets: [{
                data: language_values,
                backgroundColor: language_colors,
                label: 'My dataset'
            }],
            labels: language_keys
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                fontSize: 30,
                display: true,
                text: 'Polar Area Chart'
            },
            scale: {
              ticks: {
                beginAtZero: true
              },
              reverse: false
            },
            animation: {
                animateRotate: false,
                animateScale: true
            },
            maintainAspectRatio: false
        }
    };

    var polarC = document.getElementById("polarChart");
    window.PolarArea = Chart.PolarArea(polarC, polarData);
}

window.onload = init;

$.getJSON("https://api.github.com/users/ManrajGrover/repos?callback=?", function(data){

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

    for(var k in language_keys){
        language_colors.push(github_colors[language_keys[k]]);
    }
});
