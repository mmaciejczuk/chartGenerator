import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ChartAlert } from "../../shared/models/chartAlert.model";
import { Observable } from "rxjs";
import { Chart } from 'chart.js';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable(({providedIn:'root'}) as any)
export class ChartService {

  constructor(private http: HttpClient){}

  getAlertData(alertsUrl: string): Observable<ChartAlert[]> {
    return this.http.get<ChartAlert[]>(alertsUrl);
  }

  addData(chart: Chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
  }

  addDataSet(chart, newDataset){
   chart.data.datasets.push(newDataset);
   chart.update();
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
  }

  generateChart(chart: any[], datasets: any[], color: string){
      chart = new Chart('canvas', {
      type: 'line',
      data: {
          datasets: [
          {
              label: 'label1',
              backgroundColor: color,
              borderColor: color,    
              fill: false,
              borderWidth : 10,
              pointRadius : 0,
              data: [
                  {
                      x: 0,
                      y: 0
                  }, {
                      x: 20,
                      y: 0
                  }
              ]
          },
          ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,            
          legend : {
              display : false,
          },
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom',
                  ticks : {
                      max: 60,
                      beginAtzero :true,
                      stepSize : 1
                  }
              }],
              yAxes : [{
                  scaleLabel : {
                      display : false
                  },
                  ticks : {
                      beginAtZero :false,
            
               stepSize: 1,
                      suggestedMin: -1,
                      suggestedMax: 3                      
                  }
              }]
          }
      },
      animation: {
        duration: 0,
        onComplete: function() {            
          let chart = this.chart;
          let controller = chart.controller;        
          let axis = controller.scales['x-axis-0'];
          let yOffset = chart.height - 3;
          axis.ticks.forEach(function(value, index) {
            let xOffset = axis.getPixelForValue(value);     
            chart.ctx.fillText(value, xOffset, yOffset);
          })
        }
      }      
    });
  }
}
