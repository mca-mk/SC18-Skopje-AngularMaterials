import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule, MatDividerModule,
  MatButtonModule, MatCardModule, MatTableModule, MatInputModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DataService } from './services/dataService/data.service';
import { ParticipantsComponent } from './components/participants/participants.component';
import { OrganisersComponent } from './components/organisers/organisers.component';
import { HomeComponent } from './components/home/home.component';
import { OrganisersDetailsComponent } from './components/organisers-details/organisers-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pax', component: ParticipantsComponent},
  { path: 'org', component: OrganisersComponent},
  { path: 'org/:id', component: OrganisersDetailsComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    OrganisersComponent,
    HomeComponent,
    OrganisersDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
