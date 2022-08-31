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
    { img: '../../../../../assets/imgs/gallery/album5/image4.jpg' },
    { img: '../../../../../assets/imgs/gallery/album4/image5.jpg' },
    { img: '../../../../../assets/imgs/gallery/album10/image3.jpg' },
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
