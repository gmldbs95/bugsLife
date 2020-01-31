import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  thisTic = [];
  thisTicID: any;

  constructor(private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.thisTicID = params['id'];
    });
    
    this.getThisTicket();
  } //END

  seeThisTic(){
    this._router.navigate([`/get-ticket/${this.thisTicID}`]);
  }

  getThisTicket(){
    this._route.params.subscribe((params) => {
      let obs = this._httpService.getOneTicket(params['id'])
      obs.subscribe((data: any) => {
        this.thisTic = data.results;
        console.log('Is this working??', this.thisTic)
      })
    })
  }

  updateTicket(){
    this._route.params.subscribe((params) => {
      event.preventDefault();
      let obs = this._httpService.updateTicket(params['id'], this.thisTic);
      obs.subscribe(data => {
        console.log('WORKINGGGGG???', this.thisTic)
        this.getThisTicket();
        this.seeThisTic();
      })
    })
  }

}
