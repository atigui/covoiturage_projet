import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-4">Mon Profil</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="assets/profile-placeholder.jpg" alt="Profile Picture" class="w-32 h-32 rounded-full mb-4">
          <h3 class="text-xl font-semibold">{{ user.name }}</h3>
          <p>Email: {{ user.email }}</p>
          <p>Adresse: {{ user.address }}</p>
          <button class="bg-blue-600 text-white p-2 rounded mt-4">Modifier le profil</button>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Mes trajets</h3>
          <ul>
            <li *ngFor="let trip of userTrips" class="mb-2">
              {{ trip.departure }} - {{ trip.destination }} ({{ trip.date | date }})
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, Paris'
  };

  userTrips = [
    { departure: 'Paris', destination: 'Lyon', date: new Date() },
    { departure: 'Marseille', destination: 'Nice', date: new Date() },
    // Add more mock data as needed
  ];
}

