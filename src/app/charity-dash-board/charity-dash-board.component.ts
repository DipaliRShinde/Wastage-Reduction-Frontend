import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from '../../assets/js/canvasjs.min';
@Component({
  selector: 'app-charity-dash-board',
  templateUrl: './charity-dash-board.component.html',
  styleUrls: ['./charity-dash-board.component.css']
})
export class CharityDashBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //++++++++++++++++++++++ Pi Chart For Detailed Log Reports

    // let chart = new CanvasJS.Chart("chartContainer", {
    //   theme: "light2",
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Veg Vs Non-Ver Served"
    //   },
    //   data: [{
    //     type: "pie",
    //     showInLegend: true,
    //     toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
    //     indexLabel: "{name} - #percent%",
    //     dataPoints: [
    //       { y: 78, name: "Veg" },
    //       { y: 23, name: "Non-Veg" }
    //     ]
    //   }]
    // });

    // chart.render();
    // //++++++++++++++++++++++ End Of Pi Chart For Detailed Log Reports

    // //++++++++++++++++++++++ Bar Graph For Log Reports Details
    // let chart1 = new CanvasJS.Chart("chartContainer1", {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Monhtly Report"
    //   },
    //   data: [{
    //     type: "column",
    //     dataPoints: [
    //       { y: 71, label: "20/06/2019" },
    //       { y: 100, label: "21/06/2019" },
    //       { y: 50, label: "22/06/2019" },
    //       { y: 60, label: "23/06/2019" },
    //       { y: 80, label: "24/06/2019" },
    //       { y: 20, label: "25/06/2019" },
    //       { y: 30, label: "26/06/2019" },
    //       { y: 40, label: "27/06/2019" },
    //       { y: 71, label: "20/06/2019" },
    //       { y: 100, label: "21/06/2019" },
    //       { y: 50, label: "22/06/2019" },
    //       { y: 60, label: "23/06/2019" },
    //       { y: 80, label: "24/06/2019" },
    //       { y: 20, label: "25/06/2019" },
    //       { y: 30, label: "26/06/2019" },
    //       { y: 40, label: "27/06/2019" }
    //     ]
    //   }]
    // });

    // chart1.render();
    //++++++++++++++++++++++ End Of Bar Graph Log Report Details

  }

}
