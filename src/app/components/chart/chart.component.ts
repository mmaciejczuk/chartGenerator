import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../core/services/chart.service.';
import { ChartAlert } from '../../shared/models/chartAlert.model';
import { Chart } from 'chart.js';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  alerts: Array<ChartAlert>;
  chart = [];
  labels = [];
  values = [];
  private timer;
  alertsUrl: string = 'http://localhost:3000/alerts';

  constructor(public chartService: ChartService) { }

  ngOnInit() {

    this.fillChart();

    // https://www.youtube.com/watch?v=De-zusP8QVM 
    const source = interval(1000);
    //output: 0,1,2,3,4,5....
    // const subscribe = source.subscribe(val => console.log(val));
    // this.timer = Observable.interval(10000);
    // this.timer.subscribe((t) => this.onTimeOut()); 
    // https://www.youtube.com/watch?v=De-zusP8QVM   

  }


  adddata(): void{
    // this.chart.data.datasets[0].data[5] = 1;
    // this.chart.data.labels[5] = "New value";
    // this.chart.update();
    alert("ok");
}

  fillChart(): void {
      this.chartService.returnData(this.alertsUrl).subscribe(res => {
        // example to map data from model -> let temp_max = res['list'].map(res => res.main.temp_max)
        // https://www.youtube.com/watch?v=RTzi5DS7On4
        this.alerts = res;
        console.log(this.alerts);

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ["dd", "rr", "yy", "gg", "vv"],
            datasets: [
              {
                data: [0, 0, 1, 2, 2, 2],
                borderColor: '#3cba9f',
                backgroundColor: '#3cba9f',
                //fill: false
              },
              {
                data: [1, 2, 1, 1, 1, 0],
                borderColor: '#0066ff',
                backgroundColor: '#0066ff',
                //fill: false
              },
              {
                data: [1, 0, 0, 2, 0, 0],
                borderColor: '#6600ff',
                backgroundColor: '#6600ff',
                //fill: false
              },                            
            ]
          },
          options:{
            legend: {
              display: false
            },
            scales: {
              xAaxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
    });
  }
}
  
