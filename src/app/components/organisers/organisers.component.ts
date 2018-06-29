import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/dataService/data.service';
import { Organiser } from '../../models/organiser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisers',
  templateUrl: './organisers.component.html',
  styleUrls: ['./organisers.component.css']
})
export class OrganisersComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router) { }


    orgData: Organiser[];
    dataSource;
    

    displayedColumns: string[] = ['id', 'picture', 'name', 'university', 'age'];


  ngOnInit() {
    this.dataService.getOrganisers().subscribe(
      result => {
        this.orgData = result;
      });
      this.dataSource = this.orgData;

  }

  selectRow(selectedOrganiser: Organiser) {

    this.router.navigateByUrl(`/org/${selectedOrganiser.id}`);
  }
}
