import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  template: `
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Résultats de recherche</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div *ngFor="let trip of trips" class="border p-4 rounded">
          <h3 class="font-semibold">{{ trip.departure }} - {{ trip.destination }}</h3>
          <p>Date: {{ trip.date | date }}</p>
          <p>Heure: {{ trip.time }}</p>
          <p>Prix: {{ trip.price }} €</p>
          <button class="bg-blue-600 text-white p-2 rounded mt-2">Réserver</button>
        </div>
      </div>
    </div>
  `
})
export class SearchResultsComponent {
  trips = [
    { departure: 'Paris', destination: 'Lyon', date: new Date(), time: '14:00', price: 25 },
    { departure: 'Marseille', destination: 'Nice', date: new Date(), time: '10:00', price: 15 },
    // Add more mock data as needed
  ];
}

