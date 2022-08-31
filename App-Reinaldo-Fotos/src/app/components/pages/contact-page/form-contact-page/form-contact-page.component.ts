import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/Services/contactForm';
import { FormService } from 'src/app/Services/form.service';

@Component({
  selector: 'app-form-contact-page',
  templateUrl: './form-contact-page.component.html',
  styleUrls: ['./form-contact-page.component.css'],
})
export class FormContactPageComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Contact>();
  constructor(private formService: FormService) {}
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      dateevent: new FormControl(),
      guests: new FormControl(),
      time: new FormControl(),
      ambient: new FormControl(),

      obs: new FormControl(),
    });
  }
  submit() {
    console.log(this.contactForm.value);
    /* const guestsString: any = contactForm.guests?.toString();
    const timeString: any = contactForm.time?.toString();

    const formData = new FormData();

    formData.append('name', contactForm.name);
    formData.append('email', contactForm.email);
    formData.append('phone', contactForm.phone);
    formData.append('dateevent', contactForm.dateevent);
    formData.append('guests', guestsString);
    formData.append('time', timeString);
    formData.append('ambient', contactForm.ambient);
    formData.append('obs', contactForm.name); */
    this.onSubmit.emit(this.contactForm.value);
  }
}
