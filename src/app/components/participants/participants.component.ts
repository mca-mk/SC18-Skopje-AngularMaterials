import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService/data.service';
import { Router } from '@angular/router';
import { Participant } from '../../models/participants';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  participantsData: Participant[];
  dataSource = this.participantsData;
  displayedColumns: string[] = ['id', 'picture', 'name', 'university', 'age'];

  ngOnInit() {
    this.dataService.getParticipants().subscribe(participants => {
      this.participantsData = participants;
      this.dataSource = this.participantsData;
    });
    this.dataSource = this.participantsData;

  }

  selectRow(selectedOrganiser: Participant) {

    this.router.navigateByUrl(`/org/${selectedOrganiser.id}`);
  }
}
