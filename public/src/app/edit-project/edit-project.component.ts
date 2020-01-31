import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  thisProj = [];
  thisProjID: any;

constructor(private _httpService: HttpService,
            private _router: Router,
            private _route: ActivatedRoute) { }

  ngOnInit() {
    
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.thisProjID = params['id'];
    });

    this.getThisProj();
  } // END


  seeThisProj(){
    this._router.navigate([`/get-project/${this.thisProjID}`]);
  }

  getThisProj(){
    this._route.params.subscribe((params) => {
      let obs = this._httpService.getOneProj(params['id'])
      obs.subscribe((data: any) => {
        this.thisProj = data.results;
        console.log('Is this working??', this.thisProj)
      })
    })
  }

  updateProj(){
    this._route.params.subscribe((params) => {
      event.preventDefault();
      let obs = this._httpService.updateProj(params['id'], this.thisProj);
      obs.subscribe(data => {
        console.log('WORKINGGGGG???', this.thisProj)
        this.seeThisProj();
      })
    })
  }

}
