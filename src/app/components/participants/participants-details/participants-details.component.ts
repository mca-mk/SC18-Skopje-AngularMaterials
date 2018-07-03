import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/dataService/data.service';
import { ActivatedRoute } from '@angular/router';
import { Participant } from '../../../models/participants';

@Component({
  selector: 'app-participants-details',
  templateUrl: './participants-details.component.html',
  styleUrls: ['./participants-details.component.css']
})
export class ParticipantsDetailsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }
  canEdit = false;
  selectedPax: Participant;
  selectedparticipantId: number;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');


    this.dataService.getParticipant(id).subscribe(
      org => this.selectedPax = org
    );
  }

  toggleEditMode() {
    this.canEdit = !this.canEdit;
  }

}

