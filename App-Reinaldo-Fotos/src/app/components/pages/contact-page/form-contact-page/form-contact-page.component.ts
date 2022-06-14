import { Component, OnInit } from '@angular/core';
import { FormContactPageModule } from './form-contact-page.module';
@Component({
  selector: 'app-form-contact-page',
  templateUrl: './form-contact-page.component.html',
  styleUrls: ['./form-contact-page.component.css'],
})
export class FormContactPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(f: any) {}
}
