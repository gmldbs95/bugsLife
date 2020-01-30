import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { GetProjectComponent } from './get-project/get-project.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    TicketsComponent,
    AddProjectComponent,
    AddTicketComponent,
    EditTicketComponent,
    EditProjectComponent,
    GetProjectComponent,
    GetTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
