import Controller from '@ember/controller';
import Chart from 'chart.js';
import { CountUp } from 'countup.js';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service airtimeRewardsAPI;

  constructor() {
   super(...arguments);
   // this.buildTrendOverTime();
 }

 queryParams = [
   'offerId',
   'kpiId',
   'presetDateRange',
   'comparisonAStartDate',
   'comparisonAEndDate',
   'comparisonBStartDate',
   'comparisonBEndDate'
 ];

 @tracked kpiId = "transaction-value";
 @tracked offerId = "all-offers";
 @tracked presetDateRange = "last-7-days";
 @tracked comparisonAStartDate = "01-01-2021";
 @tracked comparisonAEndDate = "07-01-2021";
 @tracked comparisonBEndDate = "07-01-2021";
 @tracked comparisonBStartDate = "01-01-2021";
 @tracked model;

 get currentQueryParams() {
   return {
     'offerId': this.offerId,
     'kpiId': this.kpiId,
     'presetDateRange': this.presetDateRange,
     'comparisonAStartDate': this.comparisonAStartDate,
     'comparisonAEndDate': this.comparisonAEndDate,
     'comparisonBStartDate': this.comparisonBStartDate,
     'comparisonBEndDate': this.comparisonBEndDate
   }
 }

 @action
 updateOfferParams(e) {
   e.preventDefault();
   console.log("updating offer params");
   this.offerId = e.target.dataset.offerId;
   console.log(this.currentQueryParams)
 }

 @action
 updateComparisonAStartDateParams(e) {
   e.preventDefault();
   let endDate = document.getElementById("comparison-a-end-date");

   if (endDate.value !== "") {
     console.log("clearing comparison A end date");
     endDate.value = "";
   }
   console.log(this.currentQueryParams)
 }

 @action
 updateComparisonAEndDateParams(e) {
   e.preventDefault();
   console.log("updating comparison A date range params");

   let startDate = document.getElementById("comparison-a-start-date").value;

   if (startDate !== "") {
     this.comparisonAStartDate = startDate;
     this.comparisonAEndDate = e.target.value
   }
   console.log(this.currentQueryParams)
 }

 @action
 updateComparisonBStartDateParams(e) {
   e.preventDefault();

   let endDate = document.getElementById("comparison-b-end-date");

   if (endDate.value !== "") {
     console.log("clearing comparison B end date");
     endDate.value = "";
   }
 }

 @action
 updateComparisonBEndDateParams(e) {
   e.preventDefault();
   console.log("updating comparison B date range params");

   let startDate = document.getElementById("comparison-b-start-date").value;

   if (startDate !== "") {
     this.comparisonBStartDate = startDate;
     this.comparisonBEndDate = e.target.value
   }
 }

 @action
 updatePresetDateParams(e) {
   e.preventDefault();
   console.log("updating preset date range params");
   this.presetDateRange = e.target.value;
   console.log(this.currentQueryParams)
 }

 @action
 updateKpiParams(e) {
   e.preventDefault();
   this.kpiId = e.target.dataset.kpiId;
   console.log(this.currentQueryParams)
 }

 // make Request
 // refresh page
 // update chart
 get filteredKpis() {
   console.log("getting filtered kpis");
    let offerId = this.offerId;
    let kpiId = this.kpiId;
    let presetDateRange = this.presetDateRange;
    let comparisonAStartDate = this.comparisonAStartDate;
    let comparisonAEndDate = this.comparisonAEndDate;
    let comparisonBStartDate = this.comparisonBStartDate;
    let comparisonBEndDate = this.comparisonBEndDate;
    let trends = this.model;

    // if (category) {
    //   return articles.filterBy('category', category);
    // } else {
    //   return articles;
    // }

    return this.airtimeRewardsAPI.kpis;
  }

 // make Request
 // refresh page
 // update chart
 get filteredTrends() {
   console.log("getting filtered trends");
    // let category = this.category;
    let offerId = this.offerId;
    let kpiId = this.kpiId;
    let presetDateRange = this.presetDateRange;
    let comparisonAStartDate = this.comparisonAStartDate;
    let comparisonAEndDate = this.comparisonAEndDate;
    let comparisonBStartDate = this.comparisonBStartDate;
    let comparisonBEndDate = this.comparisonBEndDate;
    let trends = this.model;

    // if (category) {
    //   return articles.filterBy('category', category);
    // } else {
    //   return articles;
    // }

    return this.airtimeRewardsAPI.trends;
  }

 buildTrendOverTime() {
    console.log('building ...')
    // let data = [{
    //   x:  1,
    //   y: 2
    // }];
    let data = {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      }, {
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  };
    let options = {};

    // Ember.run.schedule("afterRender",this,function() {
    //   alert("hello")
    // });
    // var myLineChart = new Chart(document.getElementById("trend-over-time-line-chart"), {
    //   type: 'line',
    //   data: data,
    //   options: options
    // });
  }
}
