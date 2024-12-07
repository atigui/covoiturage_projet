import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-card">
        <h1>Connexion</h1>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              placeholder="Entrez votre email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              formControlName="password"
              placeholder="Entrez votre mot de passe"
              class="form-control"
            />
          </div>
          <a href="/forgot-password" class="forgot-password">Mot de passe oublié ?</a>
          <button type="submit" class="btn-primary" [disabled]="!loginForm.valid">
            Se connecter
          </button>
        </form>
        <div class="divider">
          <span>ou</span>
        </div>
        <button class="btn-google">
          <img src="assets/google-icon.svg" alt="Google" />
          Continuer avec Google
        </button>
        <p class="signup-link">
          Pas encore de compte ? <a href="/register">S'inscrire</a>
        </p>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .login-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }

    h1 {
      text-align: center;
      color: var(--text-color);
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }

    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-size: 1rem;
    }

    .forgot-password {
      display: block;
      text-align: right;
      color: var(--primary-color);
      text-decoration: none;
      margin-bottom: 1rem;
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

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        background-color: darken(var(--primary-color), 10%);
      }
    }

    .divider {
      text-align: center;
      margin: 1.5rem 0;
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 45%;
        height: 1px;
        background-color: var(--border-color);
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
      }

      span {
        background-color: white;
        padding: 0 1rem;
        color: var(--text-color);
      }
    }

    .btn-google {
      width: 100%;
      padding: 0.75rem;
      background-color: white;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s;

      img {
        width: 24px;
        height: 24px;
      }

      &:hover {
        background-color: var(--background-color);
      }
    }

    .signup-link {
      text-align: center;
      margin-top: 1.5rem;
      color: var(--text-color);

      a {
        color: var(--primary-color);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (min-width: 768px) {
      .login-card {
        padding: 3rem;
      }
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        response => {
          console.log('Login successful', response);
          // Gérer la réponse (par exemple, stocker le token, rediriger l'utilisateur)
        },
        error => {
          console.error('Login failed', error);
          // Gérer l'erreur (par exemple, afficher un message d'erreur)
        }
      );
    }
  }
}

