import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  newProj: any;
  projects = [];

  constructor(private _httpService: HttpService,
              private _router: Router) { }

  ngOnInit() {
    this.getAllProj();
    
    this.newProj = {
      name: '',
      desc:''
    }
  }




  seeAllProj(){
    this._router.navigate([`/get-project/${this.newProj._id}`]);
  }

  addNewProj(){
    let obs = this._httpService.createProj(this.newProj);
    obs.subscribe(data => {
      console.log('Adding NEW PROJECT!!!', this.newProj);
      this.newProj = {
        name: '',
        desc:''
      };
      this.seeAllProj();
    })
  }

  getAllProj(){
    let obs = this._httpService.getAllProj();
    obs.subscribe((data: any) => {
      this.projects = data.results;
      console.log('getting all projects...', data)
    })
  }


}
