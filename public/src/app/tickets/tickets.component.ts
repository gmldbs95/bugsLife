import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

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

  deleteTicket(ticket){
    let obs = this._httpService.deleteTicket(ticket._id, ticket)
    obs.subscribe(data => {
      console.log(`Deleting ticket w/ID: ${ticket._id}`, ticket);
      this.getAllProj();
    })
  }
}
