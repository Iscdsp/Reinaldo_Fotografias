import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  backPop(): void {
    let homeItem = document.getElementById('home-item') as HTMLInputElement;
    let galleryItem = document.getElementById(
      'gallery-item'
    ) as HTMLInputElement;
    let aboutItem = document.getElementById('about-item') as HTMLInputElement;
    let especItem = document.getElementById('espec-item') as HTMLInputElement;
    let contactItem = document.getElementById(
      'contact-item'
    ) as HTMLInputElement;
    homeItem.classList.add('back-pop');
    aboutItem.classList.add('back-pop');
    especItem.classList.add('back-pop');
    contactItem.classList.add('back-pop');
    galleryItem.classList.add('back-pop');
  }
}
