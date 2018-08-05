import { Component, OnInit, Input } from '@angular/core';
import { ChartService } from '../../core/services/chart.service.';
import { ChartAlert } from '../../shared/models/chartAlert.model';
import { Chart } from 'chart.js';
import { interval, Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { Api } from '../../shared/models/api.model';
import { colors } from '../../shared/enums/colors';
import { urls } from '../../shared/enums/urls';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  alerts: Array<ChartAlert>;
  apis: Array<Api>;
  chart = []
  labels = [];
  values = [];
  private timer;
  @Input() datasets: any[] = [{ data: [] }];

  constructor(public chartService: ChartService, public apiService: ApiService ) { }

  ngOnInit() {
    this.getAlerts();
  }

  ngAfterViewInit(){
    if(this.chart.length == 0){
      this.chartService.generateChart(this.chart, null, colors.greenRGB);
    }
    else{
      // update chart
    }
  }

  myEvent(event) {
    this.datasets = [
      {
        label: 'label1',
        backgroundColor: colors.redRGB,
        borderColor: colors.redRGB,    
        fill: false,
        borderWidth : 10,
        pointRadius : 0,
        data: [
            {
              x: 0, y: 40,
            }
        ]
    },      
    ];
    //console.log("DATASETS" + this.datasets);

    // this.chartService.addDataSet(this.chart, newDataset);
    //var json = '{"data":[{"x":10, "y":10}]}';
    //var data = JSON.parse(json);
    // data: Object {data: Array[2]}
    // console.log(data);
    // this.chartService.addDataSet(this.chart, this.datasets);
    // console.log(data);
  }

  getAlerts(): void {
      this.chartService.getAlertData(urls.alertsUrl).subscribe(res => {
        this.alerts = res;
        console.log(this.alerts);
    });
  }
}
  
