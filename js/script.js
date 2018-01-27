// tbs script starts here
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// tabs script ends here
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



/* accordion */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



/* google charts code */

 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart2);
      google.charts.setOnLoadCallback(drawChart3);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Attandance',     16],
          ['missed',      4]
        ]);

        var options = {
           legend: {position: 'none'},
            pieHole: 0.4,
            backgroundColor: 'transparent',
            slices: {
            
          }
        };
          var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        
      }
          
    function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Completed',     1],
          ['missed',      0],
            ['Late',      1]
        ]);

        var options = {
           legend: {position: 'none'},
            pieHole: 0.4,
            backgroundColor: 'transparent',
            slices: {
            
          }
        };
        
        
        
          
          var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
        chart.draw(data, options);
        
      }
      
    function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Completed Assignments',     9],
          ['Missed',      1],
          ['Late',      2]
        ]);

        var options = {
           legend: {position: 'none'},
            pieHole: 0.4,
            backgroundColor: 'transparent',
            slices: {
            
          }
        };
        
        
        
          
          var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
        chart.draw(data, options);
        
      }

/* googe chart ends here */



