import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


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
  chosenOne: any;

  constructor(private _httpService: HttpService,
              private _router: Router) { }

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

  deleteProj(project){
    let obs = this._httpService.deleteProj(project._id, project)
    obs.subscribe(data => {
      console.log(`Deleting Project w/ID: ${project._id}`, project);
      this.getAllProj();
    })
  }

}
