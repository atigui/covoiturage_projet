import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Covoiturage</h1>
        <nav>
          <a routerLink="/home" class="mx-2">Accueil</a>
          <a routerLink="/search" class="mx-2">Rechercher</a>
          <a routerLink="/profile" class="mx-2">Profil</a>
          <a routerLink="/login" class="mx-2">Connexion</a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent { }

