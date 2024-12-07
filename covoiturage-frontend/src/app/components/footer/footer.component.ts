import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-gray-200 p-4 mt-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 Covoiturage. Tous droits réservés.</p>
      </div>
    </footer>
  `
})
export class FooterComponent { }

