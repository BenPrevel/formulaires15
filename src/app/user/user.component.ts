import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userForm = this.fb.group({
    username: [''],
    adress: this.fb.group({
      number: [''],
      street: [''],
      zipCode: [''],
      city: [''],
    }),
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

  constructor(private fb: FormBuilder) {}
}
