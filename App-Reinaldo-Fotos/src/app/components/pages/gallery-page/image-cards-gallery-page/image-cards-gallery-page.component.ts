import { Component, OnInit } from '@angular/core';

import { Gallery } from './interface-card-gallery-image';
@Component({
  selector: 'app-image-cards-gallery-page',
  templateUrl: './image-cards-gallery-page.component.html',
  styleUrls: ['./image-cards-gallery-page.component.css'],
})
export class ImageCardsGalleryPageComponent implements OnInit {
  gallerys: Gallery[] = [
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-billy2-glr.jpg',
      title: 'Billy e Gabi',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-box160-glr.jpg',
      title: 'Cross Fit - Box 160',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-campFem--glr.jpg',
      title: 'Brasileirão feminino  - Corinthians x Santos',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-campmasc-glr.jpg',
      title: 'Brasileirão 2021  Santos e RB Bragantino',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-casa67-glr.jpg',
      title: 'Studio - Casa 67',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-ctc--glr.jpg',
      title: 'Centro de Treinamento Cobra - SEM MALDADE',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-mani-foraB-glr.jpg',
      title: 'Manifestação - 3J Santos',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-mani-genocida-glr.jpg',
      title: 'Manifestação - 19J Santos',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-mani-glr.jpg',
      title: 'Manifestação - 29M Santos',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-padreA-glr.jpg',
      title: 'Padre Anchieta F. C.',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-pagode-glr.jpg',
      title: 'Pagode junior',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-phantom-glr.jpg',
      title: 'Phantom Billy',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-pulsar-glr.jpg',
      title: 'Festival - Pulsar Festival',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-skate-glr.jpg',
      title: 'Praça Palmares',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-volta-glr.jpg',
      title: 'XIX Volta Santo Amaro - Santos',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
