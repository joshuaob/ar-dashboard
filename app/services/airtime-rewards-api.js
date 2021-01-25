import Service from '@ember/service';

export default class AirtimeRewardsApiService extends Service {
  get locations () {
      return [
        'Manchester',
        'Bolton',
        'Huddersfield',
        'Wigan',
        'Eccles',
        'Stockport',
        'Leigh',
        'Rochdale',
        'Hyde',
        'Shaw',
        'Middleton',
        'Salford',
        'Chorley'
      ]
  }

  get mapLocations () {
      return [
        {
          label: ['Manchester'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.2426,
            y: 53.4808,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Bolton'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.4282,
            y: 53.5769,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Huddersfield'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -1.7850,
            y: 53.6458,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Wigan'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.6325,
            y: 53.5451,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Eccles'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.3406,
            y: 53.4824,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Stockport'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.1575,
            y: 53.4106,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Leigh'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.5187,
            y: 53.4961,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Rochdale'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.1561,
            y: 53.6097,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Hyde'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.0828,
            y: 53.4530,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Shaw'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.0954,
            y: 53.5831,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Middleton'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.2019,
            y: 53.5459,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Salford'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.2901,
            y: 53.4875,
            r: Math.floor(Math.random() * 40)
          }]
        },
        {
          label: ['Chorley'],
          backgroundColor: "rgba(22,160,133,0.2)",
          borderColor: "rgba(22,160,133,1)",
          data: [{
            x: -2.6326,
            y: 53.6535,
            r: Math.floor(Math.random() * 40)
          }]
        },
      ]
  }

  // GET /offers/:offer-id/kpis
  get kpis() {
    return {
      data: [
        {
          id: "transaction-value-kpi",
          name: "Transaction Value",
          label: "Transaction Value",
          value: Math.floor(Math.random() * 700000),
          direction: "up",
          percentageChange: `${parseFloat(Math.random()).toFixed(2)} %`,
          startDate: "01-0ct",
          endDate: "07-Oct"
        },
        {
          id: "transaction-volume-kpi",
          name: "Transaction Volume",
          label: "Transaction Volume",
          value: Math.floor(Math.random() * 7000),
          direction: "down",
          percentageChange: `${parseFloat(Math.random()).toFixed(2)} %`,
          startDate: "01-0ct",
          endDate: "07-Oct"
        },
        {
          id: "aov-kpi",
          name: "AOV",
          label: "AOV",
          value: Math.random() * 100,
          direction: "down",
          percentageChange: `${parseFloat(Math.random()).toFixed(2)} %`,
          startDate: "01-0ct",
          endDate: "07-Oct"
        },
        {
          id: "roi-kpi",
          name: "ROI",
          label: "ROI",
          value: Math.random() * 100,
          direction: "up",
          percentageChange: `${parseFloat(Math.random()).toFixed(2)} %`,
          startDate: "01-0ct",
          endDate: "07-Oct"
        },
        {
          id: "unique-customers-kpi",
          name: "Unique Customers",
          label: "Unique Customers",
          value: Math.floor(Math.random() * 150),
          direction: "up",
          percentageChange: `${parseFloat(Math.random()).toFixed(2)} %`,
          startDate: "01-0ct",
          endDate: "07-Oct"
        },
        {
          id: "average-purchase-freq-kpi",
          name: "Average Purchase Freq.",
          label: "Average Purchase Freq.",
          value: Math.floor(Math.random() * 75),
          direction: "up",
          percentageChange: `${parseFloat(Math.random()).toFixed(2)} %`,
          startDate: "01-0ct",
          endDate: "07-Oct"
        }
      ]
    }
  }

  // GET /offers/:offer-id/trends
  // queryParams
  get trends() {
    return {
      startDate: "01-0ct",
      endDate: "07-Oct",
      data: [
        {
          id: "transaction-value-over-time-in-store",
          name: "transaction value over time in store",
          chartLabel: "Transaction Value Over Time",
          kindOfTransaction: "in-store", // ["in-store", "online"]
          offerLabel: "All Live Offers",
          kpiLabel: "Transaction Value",
          value: "£10,000,000",
          direction: "up",
          percentageChange: "0.01%",
          startDate: "01-0ct",
          endDate: "07-Oct",
          datasetLabels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          dataset: Array.from({length: 12}, () => Math.floor(Math.random() * 40))
        },

        {
          id: "transaction-value-by-store",
          name: "transaction value by store",
          chartLabel: "Transaction Value By Store",
          kindOfTransaction: "in-store", // ["map", "chart"]
          offerLabel: "All Live Offers",
          kpiLabel: "Transaction Value",
          value: "£10,000,000",
          direction: "up",
          percentageChange: `${parseFloat(Math.random()).toFixed(2)} %`,
          startDate: "01-0ct",
          endDate: "07-Oct",
          datasetLabels: this.locations, // dataset labels
          datasetForBubble: this.mapLocations,
          dataset: Array.from({length: 13}, () => Math.floor(Math.random() * 40))
        },

        {
          id: "transaction-value-by-sales-channel",
          name: "transaction value by sales channel",
          chartLabel: "Transaction Value By Sales Channel",
          kindOfTransaction: "in-store", // ["in-store", "online"]
          offerLabel: "All Live Offers",
          kpiLabel: "Transaction Value",
          value: "£10,000,000",
          direction: "up",
          percentageChange: "0.01%",
          dataset: [
            {
              data: Array.from({length: 12}, () => Math.floor(Math.random() * 40)),
              label: "All Offers"
            }
          ]
        }
      ]
    }
  }
}
