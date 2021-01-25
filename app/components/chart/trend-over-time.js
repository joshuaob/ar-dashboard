import Component from '@glimmer/component';
import Chart from 'chart.js';
import { action } from '@ember/object';

export default class ChartTrendOverTimeComponent extends Component {
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

 get currentKpi() {
   let kpis = {
     "transaction-value-kpi": "Transaction Value Over Time",
     "transaction-volume-kpi": "Transaction Volume",
     "aov-kpi": "aov-kpi",
     "roi-kpi": "roi-kpi",
     "unique-customers-kpi": "unique-customers-kpi",
     "average-purchase-freq-kpi": "average-purchase-freq-kpi"
   }

   return kpis[this.args.selectedKpi];
 }

 // currentOfferLabel(offerId) {
 //   let offers = {
 //     "all-offers": "All Offers",
 //     "expired-offers": "All Expired Offers",
 //     "black-friday-2020": "Black Friday 2020",
 //     "christmas-2020": "Chritmas 2020",
 //     "new-for-winter": "New For Winter",
 //     "winter-warmer": "Winter Warmer",
 //     "january-sale": "January Sale",
 //   }
 //
 //   return offers[offerId];
 // }

 buildChart(e, [trend, selectedOffer]) {
   // debugger
   // alert("...building chart")
   let offers = {
     "all-offers": "All Offers",
     "expired-offers": "All Expired Offers",
     "black-friday-2020": "Black Friday 2020",
     "christmas-2020": "Chritmas 2020",
     "new-for-winter": "New For Winter",
     "winter-warmer": "Winter Warmer",
     "january-sale": "January Sale",
   }

   var _this = this;
   var ctx = document.getElementById("transaction-value-over-time-in-store");
   var options = {

   };
   var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: trend.datasetLabels,
        // datasets: trend.dataset
        datasets: [
            {
              data: trend.dataset,
              label: offers[selectedOffer],
              borderColor: "#3498db",
              fill: false
            }
          ]
      },
      options: options
  });
 }
}
