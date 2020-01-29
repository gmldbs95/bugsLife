import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // Projects
  getAllProj(){
    return this._http.get('/home');
  }
  getOneProj(proj_id){
    return this._http.get(`/projects/${proj_id}`);
  }
  createProj(new_proj){
    return this._http.post('/projects', new_proj);
  }
  updateProj(proj_id, updated_proj){
    return this._http.put(`/projects/${proj_id}`, updated_proj);
  }
  addTicket(proj_id, added_tic){
    return this._http.put(`/porjects/${proj_id}/addticket`, added_tic);
  }
  deleteProj(proj_id, project){
    return this._http.delete(`/delproj/${proj_id}`, project);
  }

  // Tickets
  getOneTicket(tic_id){
    return this._http.get(`/tickets/${tic_id}`);
  }
  updateTicket(tic_id, updated_tic){
    return this._http.put(`/tickets/${tic_id}`, updated_tic);
  }
  deleteTicket(tic_id, ticket){
    return this._http.delete(`/deltic/${tic_id}`, ticket);
  }
}
