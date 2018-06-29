import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisersDetailsComponent } from './organisers-details.component';

describe('OrganisersDetailsComponent', () => {
  let component: OrganisersDetailsComponent;
  let fixture: ComponentFixture<OrganisersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
