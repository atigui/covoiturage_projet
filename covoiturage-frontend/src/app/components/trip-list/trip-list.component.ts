import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-list',
  template: `
    <div>
      <input [(ngModel)]="searchDestination" placeholder="Search destination">
      <button (click)="searchTrips()">Search</button>
    </div>
    <ul>
      <li *ngFor="let trip of trips">
        {{ trip.startPoint }} to {{ trip.destination }} - {{ trip.departureTime | date:'medium' }}
        <button (click)="joinTrip(trip.id)">Join</button>
      </li>
    </ul>
  `
})
export class TripListComponent implements OnInit {
  trips: any[] = [];
  searchDestination: string = '';

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.loadTrips();
  }

  loadTrips() {
    this.tripService.getTrips().subscribe(
      (trips: any[]) => this.trips = trips,
      error => console.error('Error loading trips', error)
    );
  }

  searchTrips() {
    this.tripService.searchTrips(this.searchDestination).subscribe(
      (trips: any[]) => this.trips = trips,
      error => console.error('Error searching trips', error)
    );
  }

  joinTrip(tripId: number) {
    this.tripService.joinTrip(tripId).subscribe(
      response => console.log('Joined trip', response),
      error => console.error('Error joining trip', error)
    );
  }
}

