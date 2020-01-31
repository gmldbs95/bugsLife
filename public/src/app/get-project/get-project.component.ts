import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html',
  styleUrls: ['./get-project.component.css']
})
export class GetProjectComponent implements OnInit {

  thisProj = [];
  thisProjID: any;

  constructor(private _httpService: HttpService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getThisProj();

    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.thisProjID = params['id'];
    });
  } // END

  goToProjects(){
    this._router.navigate(['/projects'])
  }

  // seeThisProj(){
  //   this._router.navigate([`/get-project/${this.thisProjID}`]);
  // }

  getThisProj(){
    this._route.params.subscribe((params) => {
      let obs = this._httpService.getOneProj(params['id'])
      obs.subscribe((data: any) => {
        this.thisProj = data.results;
        console.log('Is this working??', this.thisProj)
      })
    })
  }

  deleteProj(project){
    let obs = this._httpService.deleteProj(project._id, project)
    obs.subscribe(data => {
      console.log(`Deleting Project w/ID: ${project._id}`, project);
      this.goToProjects();
    })
  }

  // deleteTic(ticket){
  //   let obs = this._httpService.deleteTicket(ticket._id, ticket)
  //   obs.subscribe(data => {
  //     console.log(`Deleting Ticket w/ID: ${ticket._id}`, ticket);
  //     this.seeThisProj();
  //   })
  // }
}
