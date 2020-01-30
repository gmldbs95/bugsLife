import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { GetProjectComponent } from './get-project/get-project.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';


const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'tickets', component: TicketsComponent},
  
  {path: 'get-project/:id', component: GetProjectComponent},
  {path: 'get-ticket/:id', component: GetTicketComponent},

  {path: 'add-project', component: AddProjectComponent},
  {path: 'add-ticket', component: AddTicketComponent},

  {path: 'edit-project/:id', component: EditProjectComponent},
  {path: 'edit-ticket/:id', component: EditTicketComponent},

  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }