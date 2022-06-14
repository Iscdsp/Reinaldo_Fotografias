import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  expandBarAbout(): any {
    let bar: any = document.getElementById('bar-social-media');
    bar.classList.add('expand-bar');
  }
}
