import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-form',
  template: `
    <form [formGroup]="tripForm" (ngSubmit)="onSubmit()">
      <input formControlName="startPoint" placeholder="Start Point">
      <input formControlName="destination" placeholder="Destination">
      <input formControlName="departureTime" type="datetime-local">
      <input formControlName="availableSeats" type="number" placeholder="Available Seats">
      <button type="submit">Create Trip</button>
    </form>
  `
})
export class TripFormComponent {
  tripForm: FormGroup;

  constructor(private fb: FormBuilder, private tripService: TripService) {
    this.tripForm = this.fb.group({
      startPoint: ['', Validators.required],
      destination: ['', Validators.required],
      departureTime: ['', Validators.required],
      availableSeats: [1, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.tripForm.valid) {
      this.tripService.createTrip(this.tripForm.value).subscribe(
        response => console.log('Trip created', response),
        error => console.error('Error creating trip', error)
      );
    }
  }
}

