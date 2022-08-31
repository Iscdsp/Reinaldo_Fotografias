import { Component, OnInit } from '@angular/core';

import { FormService } from 'src/app/Services/form.service';
import { Contact } from 'src/app/Services/contactForm';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  constructor(private formService: FormService) {}

  ngOnInit(): void {}

  async createHandler(contact: Contact) {
    const guestsString: any = contact.guests?.toString();
    const timeString: any = contact.time?.toString();

    const formData = new FormData();

    formData.append('name', contact.name);
    formData.append('email', contact.email);
    formData.append('phone', contact.phone);
    formData.append('dateevent', contact.dateevent);
    formData.append('guests', guestsString);
    formData.append('time', timeString);
    formData.append('ambient', contact.ambient);
    formData.append('obs', contact.name);
    await this.formService.createForm(formData).subscribe();
  }
}
