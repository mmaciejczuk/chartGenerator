import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../core/services/chart.service.';
import { ChartAlert } from '../../shared/models/chartAlert.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  alerts: Array<ChartAlert>;
  chart = [];
  teamsUrl: string = 'http://localhost:3000/alerts';

  constructor(public chartService: ChartService) { }

  ngOnInit() {
    this.fillChart();
  }

  fillChart(): void {
    let x = this.chartService.returnData(this.teamsUrl).subscribe(res => {
        // example to map data from model -> let temp_max = res['list'].map(res => res.main.temp_max)
        // https://www.youtube.com/watch?v=RTzi5DS7On4
        this.alerts = res;
        console.log(this.alerts);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.alerts,
            datasets: [
              {
                data: this.alerts,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: this.alerts,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: this.alerts,
                borderColor: '#3cba9f',
                fill: false
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
