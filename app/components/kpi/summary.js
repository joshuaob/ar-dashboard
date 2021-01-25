import Component from '@glimmer/component';
import { CountUp } from 'countup.js';

export default class KpiSummaryComponent extends Component {
  countUp(e, kpi) {
    let currentKpi = kpi[0];
    let options = {};

    if (currentKpi.name == "Transaction Value" || currentKpi.name == "AOV") {
      options["prefix"] = "£";
      options["decimalPlaces"] = 2;
    }

    if (currentKpi.name == "ROI") {
      options["suffix"] = "%";
      options["decimalPlaces"] = 2;
    }

    const countUp = new CountUp(e.id, e.innerText, options);

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }
}
