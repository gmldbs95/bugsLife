import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllProj();
  }

  getAllProj(){
    let obs = this._httpService.getAllProj();
    obs.subscribe((data: any) => {
      this.projects = data.results;
      console.log('getting all my projects...', data)
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
