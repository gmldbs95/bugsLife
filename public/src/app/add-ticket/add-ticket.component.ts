import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  thisProj: any;
  newTicket: any;

  constructor(private _httpService: HttpService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.newTicket = {
      title: '',
      tic_desc: '',
      type: '',
      priority: '',
      status: ''
    };
    this.thisProj = {
      name: '',
      desc: ''
    };
    this.findMe();

  }

  findMe(){
    this._route.params.subscribe((params) => {
      let obs = this._httpService.getOneProj(params['id'])
      obs.subscribe((data: any) => {
        this.thisProj = data.results;
        console.log('Is this working??', this.thisProj)
      })
    })
  }

  seeAllProj(){
    this._router.navigate(['/projects']);
  }

  addTicketProj(){
    this._route.params.subscribe((params) => {
      let obs = this._httpService.addTicket(params['id'], this.newTicket);
      obs.subscribe(data => {
        console.log('Adding NEW TICKET TO proj!!!', this.newTicket);
        this.newTicket = {
          title: '',
          tic_desc: '',
          type: '',
          priority: '',
          status: ''
        };
        // this.seeAllProj();
      })

    })
  }


}
