import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organiser } from '../../../models/organiser';
import { DataService } from '../../../services/dataService/data.service';

@Component({
  selector: 'app-organisers-details',
  templateUrl: './organisers-details.component.html',
  styleUrls: ['./organisers-details.component.css']
})
export class OrganisersDetailsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  canEdit = false;
  selectedOrg: Organiser = {
    picture: null,
    age: null,
    id: this.dataService.orgLen + 1,
    university: '',
    gender: '',
    name: ''
  };
  addNewOrganiserMode: boolean;
  ngOnInit() {
    this.addNewOrganiserMode = false;
    const id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getOrganiser(id).subscribe(
      org => this.selectedOrg = org
    );

    if (id === 0) {
      this.canEdit = true;
      this.addNewOrganiserMode = true;
    }
  }

  toggleEditMode() {
    this.canEdit = !this.canEdit;
  }

  addOrganiser() {
    if (this.addNewOrganiserMode) {
      this.dataService.addOrganiser(this.selectedOrg);
      this.router.navigateByUrl(`org/${this.selectedOrg.id}`);
      this.canEdit = false;
      this.addNewOrganiserMode = false;
      this.dataService.orgLen += 1;
    } else {
      this.toggleEditMode();
    }
  }
}

