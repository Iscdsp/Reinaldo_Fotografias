import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  translateText(): void {
    let txtCard: any = document.getElementById('cont-card');
    txtCard.classList.add('translate');
  }
  showThumbImage(): void {
    let ThumbLeftImage: any = document.getElementById('thmb-lft');
    let ThumbRightImage: any = document.getElementById('thmb-right');
    ThumbLeftImage.classList.add('show-img-left');
    ThumbRightImage.classList.add('show-img-left');
  }
 
}
