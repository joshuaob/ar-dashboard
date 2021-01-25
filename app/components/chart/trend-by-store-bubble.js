import Component from '@glimmer/component';

export default class ChartTrendByStoreBubbleComponent extends Component {
  buildChart(e, [trend]) {
    var ctx = document.getElementById("transaction-value-by-store-bubble");
    var options = {
      scales: {
           xAxes: [{
               ticks: {
                   // beginAtZero: true,
                   reversed: true
               }
           }]
       }
    };
    var myLineChart = new Chart(ctx, {
       type: 'bubble',
       data: {
         // labels: "Africa",
         datasets: trend.datasetForBubble
       },
       options: options
   });
  }
}
