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
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image11.jpg',
      title: 'Album1',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album1',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image12.jpg',
      title: 'Album2',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album2',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image13.jpg',
      title: 'Album3',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album3',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image14.jpg',
      title: 'Album4',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album4',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image15.jpg',
      title: 'Album5',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album5',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image16.jpg',
      title: 'Album6',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album6',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image17.jpg',
      title: 'Album7',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album7',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image18.jpg',
      title: 'Album8',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album8',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image19.jpg',
      title: 'Album9',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album9',
    },
    {
      image:
        '../../../../../assets/imgs/gallery/img-galeria-thumbs/thumb-image100.jpg',
      title: 'Album10',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      router_link: '/album10',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
