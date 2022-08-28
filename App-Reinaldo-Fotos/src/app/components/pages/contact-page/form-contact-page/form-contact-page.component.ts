import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/Services/contactForm';

@Component({
  selector: 'app-form-contact-page',
  templateUrl: './form-contact-page.component.html',
  styleUrls: ['./form-contact-page.component.css'],
})
export class FormContactPageComponent implements OnInit {
  constructor() {}

  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      dateEvent: new FormControl(),
      qntPersons: new FormControl(),
      qntHours: new FormControl(),
      ambient: new FormControl(),

      obs: new FormControl(),
    });
  }

  submit() {
    console.log(this.contactForm.value);
  }
}
