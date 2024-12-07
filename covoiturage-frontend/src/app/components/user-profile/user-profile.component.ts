import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input formControlName="name" placeholder="Name">
      <input formControlName="address" placeholder="Address">
      <input type="file" (change)="onFileSelected($event)">
      <button type="submit">Save Profile</button>
    </form>
  `
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.userService.updateProfile(this.profileForm.value).subscribe(
        response => console.log('Profile updated', response),
        error => console.error('Error updating profile', error)
      );
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.userService.uploadProfilePicture(file).subscribe(
      response => console.log('Picture uploaded', response),
      error => console.error('Error uploading picture', error)
    );
  }
}

