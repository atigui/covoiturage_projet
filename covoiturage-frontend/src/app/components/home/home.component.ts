import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <header class="hero">
        <div class="container">
          <h1>Trouvez votre covoiturage idéal</h1>
          <p>Voyagez en toute simplicité avec des conducteurs vérifiés</p>
        </div>
      </header>

      <section class="search-section">
        <div class="container">
          <div class="search-card">
            <h2>Rechercher un trajet</h2>
            <form (ngSubmit)="onSearch()" class="search-form">
              <div class="form-group">
                <label for="departure">Départ</label>
                <input
                  id="departure"
                  type="text"
                  placeholder="D'où partez-vous ?"
                  class="form-control"
                  [(ngModel)]="departure"
                  name="departure"
                />
              </div>
              <div class="form-group">
                <label for="destination">Destination</label>
                <input
                  id="destination"
                  type="text"
                  placeholder="Où allez-vous ?"
                  class="form-control"
                  [(ngModel)]="destination"
                  name="destination"
                  [value]="selectedLocation ? selectedLocation.lat + ', ' + selectedLocation.lng : ''"
                  readonly
                />
              </div>
              <div class="form-group">
                <label for="date">Date</label>
                <input
                  id="date"
                  type="date"
                  class="form-control"
                  [(ngModel)]="date"
                  name="date"
                />
              </div>
              <app-map (locationSelected)="onLocationSelected($event)"></app-map>
              <button type="submit" class="btn-primary">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </section>

      <section class="popular-routes">
        <div class="container">
          <h2>Trajets populaires</h2>
          <div class="routes-grid">
            <div class="route-card" *ngFor="let route of popularRoutes">
              <div class="route-info">
                <h3>{{route.from}} - {{route.to}}</h3>
                <p>À partir de {{route.price}}€</p>
              </div>
              <button class="btn-secondary">Voir les trajets</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
    }

    .hero {
      background-color: var(--primary-color);
      color: white;
      padding: 4rem 0;
      text-align: center;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        opacity: 0.9;
      }
    }

    .search-section {
      margin-top: -2rem;
      padding: 0 1rem;
      margin-bottom: 3rem;
    }

    .search-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      h2 {
        margin-bottom: 1.5rem;
        color: var(--text-color);
      }
    }

    .search-form {
      display: grid;
      gap: 1rem;
    }

    .form-group {
      label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-color);
      }
    }

    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-size: 1rem;
    }

    .btn-primary {
      width: 100%;
      padding: 0.75rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: darken(var(--primary-color), 10%);
      }
    }

    .popular-routes {
      padding: 2rem 1rem;

      h2 {
        margin-bottom: 1.5rem;
        color: var(--text-color);
      }
    }

    .routes-grid {
      display: grid;
      gap: 1rem;
    }

    .route-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;

      .route-info {
        h3 {
          margin: 0;
          color: var(--text-color);
        }

        p {
          margin: 0.5rem 0 0;
          color: var(--primary-color);
          font-weight: bold;
        }
      }
    }

    .btn-secondary {
      padding: 0.5rem 1rem;
      background-color: transparent;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: var(--primary-color);
        color: white;
      }
    }

    @media (min-width: 768px) {
      .hero {
        padding: 6rem 0;

        h1 {
          font-size: 3rem;
        }
      }

      .search-section {
        margin-top: -3rem;
      }

      .search-form {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;

        .btn-primary {
          grid-column: span 2;
        }
      }

      .routes-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
    }

    @media (min-width: 1024px) {
      .routes-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  popularRoutes: any[] = [];
  departure = '';
  destination = '';
  date = '';
  selectedLocation: { lat: number, lng: number } | null = null;

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.loadPopularRoutes();
  }

  loadPopularRoutes() {
    this.tripService.getPopularRoutes().subscribe(
      routes => {
        this.popularRoutes = routes;
      },
      error => {
        console.error('Failed to load popular routes', error);
      }
    );
  }

  onSearch() {
    if (this.selectedLocation) {
      this.tripService.searchTrips(this.departure, `${this.selectedLocation.lat},${this.selectedLocation.lng}`, this.date).subscribe(
        results => {
          console.log('Search results', results);
          // Handle search results (e.g., update UI, navigate to results page)
        },
        error => {
          console.error('Search failed', error);
        }
      );
    } else {
      console.error('No destination selected');
    }
  }

  onLocationSelected(location: {lat: number, lng: number}) {
    this.selectedLocation = location;
    this.destination = `${location.lat}, ${location.lng}`;
  }
}

