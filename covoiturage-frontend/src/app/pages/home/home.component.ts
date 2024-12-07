import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container mx-auto mt-8">
      <h2 class="text-3xl font-bold mb-4">Bienvenue sur Covoiturage</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-2">Rechercher un trajet</h3>
          <form (ngSubmit)="onSearch()">
            <input type="text" placeholder="Départ" class="w-full p-2 mb-2 border rounded">
            <input type="text" placeholder="Destination" class="w-full p-2 mb-2 border rounded">
            <input type="date" class="w-full p-2 mb-2 border rounded">
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded">Rechercher</button>
          </form>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-2">Proposer un trajet</h3>
          <p class="mb-4">Vous avez une voiture ? Proposez un trajet et partagez les frais !</p>
          <button routerLink="/create-trip" class="bg-green-500 text-white p-2 rounded">Proposer un trajet</button>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
  onSearch() {
    // Implement search logic
  }
}

