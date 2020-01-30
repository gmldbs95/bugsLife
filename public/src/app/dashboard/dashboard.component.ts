import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // public barChartOption = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  // public barChartLabel = [1, 2, 3, 4];

  // public barChartType = 'bar';

  // public barChartLegend = true;

  // public barChartData = [
  //   {data: [10, 20, 15, 5], label: 'Part A'},
  //   {data: [16, 25, 1, 20], label: 'Part B'}
  // ];

  projects = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllProj();
  }

  getAllProj(){
    let obs = this._httpService.getAllProj();
    obs.subscribe((data: any) => {
      this.projects = data.results;
      console.log('getting all projects...', data)
    })
  }


}
