import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.css']
})
export class GetTicketComponent implements OnInit {

  thisTic = [];
  thisTicID: any;

  constructor(private _httpService: HttpService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getThisTicket();

    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.thisTicID = params['id'];
    });

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





}
