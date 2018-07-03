import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DataService } from './services/dataService/data.service';
import { ParticipantsComponent } from './components/participants/participants.component';
import { OrganisersComponent } from './components/organisers/organisers.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganisersDetailsComponent } from './components/organisers/organisers-details/organisers-details.component';
import { ParticipantsDetailsComponent } from './components/participants/participants-details/participants-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pax', component: ParticipantsComponent },
  { path: 'org', component: OrganisersComponent },
  { path: 'org/:id', component: OrganisersDetailsComponent },
  { path: 'pax/:id', component: ParticipantsDetailsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    OrganisersComponent,
    HomeComponent,
    OrganisersDetailsComponent,
    ParticipantsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
