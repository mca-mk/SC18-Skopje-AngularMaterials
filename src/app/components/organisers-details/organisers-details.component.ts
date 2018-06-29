import { Component, OnInit } from '@angular/core';
import { Organiser } from '../../models/organiser';
import { DataService } from '../../services/dataService/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organisers-details',
  templateUrl: './organisers-details.component.html',
  styleUrls: ['./organisers-details.component.css']
})
export class OrganisersDetailsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

 selectedOrg: Organiser;
 selectedparticipantId: number;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');


     this.dataService.getOrganiser(id).subscribe(
       org => this.selectedOrg = org
     );

    console.log(this.selectedOrg);
  }


}
