<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>GitHub Language Graphs</title>
        <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8">
        <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" media="screen" charset="utf-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/Chart.bundle.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    </head>

    <body>
        <div id="header">
            <h1 align="center">GitHub Language Graphs</h1>
            <div align="center">
                <form id="userForm">
                    <input id="input" type="text" placeholder="@username" autofocus="autofocus">
                </form>
            </div>

            <div id="loaderDiv" align="center">
                <div  class="loader"></div>
            </div>
            <div id="noUser" align="center">
                <h2>User does not exist!</h2>
            </div>
        </div>

	      <div id="PageWrapper" class="container">
            <div>
					      <canvas id="barChart"  height="400px"></canvas>
                <div class="hr">&nbsp;</div>
				    </div>
            <div>
					      <canvas id="lineChart"  height="400px"></canvas>
                <div class="hr">&nbsp;</div>
				    </div>
            <div>
					      <canvas id="polarChart"  height="400px"></canvas>
                <div class="hr">&nbsp;</div>
				    </div>
            <div class="row">
                <div class="col-md-6">
    					      <canvas id="pieChart"  height="400px"></canvas>
    				    </div>
                <div class="col-md-6">
    					      <canvas id="doughnutChart"  height="400px"></canvas>
    				    </div>
            </div>
            <div class="hr">&nbsp;</div>
            <div>
					      <canvas id="radarChart"  height="400px"></canvas>
                <div class="hr">&nbsp;</div>
				    </div>
            <div class="row" id="star">
                <div class="col-md-12" align="center">
                    <a href="https://github.com/anshul17khanna/Language-Graph/" class="btn btn-success">
                        <i class="fa fa-github"></i>
                        Star me on GitHub
                    </a>
                </div>
            </div>
	      </div>
        <a href="https://github.com/anshul17khanna/Language-Graph/" class="github-corner"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#64CEAA; color:#fff; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
    </body>
</html>
