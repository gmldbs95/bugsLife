import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  thisProj: any;
  newTicket: any;

  constructor(private _httpService: HttpService,
              private _router: Router) { }

  ngOnInit() {
    this.newTicket = {
      title: '',
      tic_desc: '',
      type: '',
      priority: '',
      status: ''
    }
  }

  seeAllProj(){
    this._router.navigate(['/projects']);
  }

  addNewProj(pro_id){
    let obs = this._httpService.addTicket(pro_id, this.newTicket);
    obs.subscribe(data => {
      console.log('Adding NEW PROJECT!!!', this.newTicket);
      this.newTicket = {
        title: '',
        tic_desc: '',
        type: '',
        priority: '',
        status: ''
      };
      this.seeAllProj();
    })
  }


}
