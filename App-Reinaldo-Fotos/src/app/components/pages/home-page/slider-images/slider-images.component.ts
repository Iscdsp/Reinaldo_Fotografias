import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.css'],
})
export class SliderImagesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  slides = [
    { img: 'https://live.staticflickr.com/65535/51180497405_eec1934005_k.jpg' },
    { img: 'https://live.staticflickr.com/65535/51180194254_576153d64d_k.jpg' },
    { img: 'https://live.staticflickr.com/65535/50994828532_38e79a5408_k.jpg' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
  };

  addSlide() {
    this.slides.push({
      img: 'https://live.staticflickr.com/65535/51829136121_71d9b6cb74_k.jpg',
    });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
