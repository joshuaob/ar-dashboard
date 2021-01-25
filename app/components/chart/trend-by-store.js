import Component from '@glimmer/component';
import Chart from 'chart.js';

export default class ChartTrendByStoreComponent extends Component {
  get currentOffer() {
    let offers = {
      "all-offers": "All Offers",
      "expired-offers": "All Expired Offers",
      "black-friday-2020": "Black Friday 2020",
      "christmas-2020": "Chritmas 2020",
      "new-for-winter": "New For Winter",
      "winter-warmer": "Winter Warmer",
      "january-sale": "January Sale",
    }

    return offers[this.args.selectedOffer];
  }

  buildChart(e, [trend, selectedOffer]) {
    let offers = {
      "all-offers": "All Offers",
      "expired-offers": "All Expired Offers",
      "black-friday-2020": "Black Friday 2020",
      "christmas-2020": "Chritmas 2020",
      "new-for-winter": "New For Winter",
      "winter-warmer": "Winter Warmer",
      "january-sale": "January Sale",
    }
    var ctx = document.getElementById("transaction-value-by-store");
    var options = {

    };
    var myLineChart = new Chart(ctx, {
       type: 'bar',
       data: {
         labels: trend.datasetLabels,
         datasets: [
           {
             data: trend.dataset,
             label: offers[selectedOffer],
             backgroundColor: ["#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD", "#8E44AD"],
           }
         ]
       },
       options: options
   });
  }
}
