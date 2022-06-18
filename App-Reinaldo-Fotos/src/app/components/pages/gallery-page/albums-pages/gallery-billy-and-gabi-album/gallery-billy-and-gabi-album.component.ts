import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-gallery-billy-and-gabi-album',
  templateUrl: './gallery-billy-and-gabi-album.component.html',
  styleUrls: ['./gallery-billy-and-gabi-album.component.css'],
})
export class GalleryBillyAndGabiAlbumComponent implements OnInit {
  _album: Array<any> = [];

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 10; i++) {
      const src =
        '../../../../../../assets/imgs/gallery/album-BillyAndGagi/image' +
        i +
        '.jpg';
      const caption = '';
      const thumb =
        '../../../../../../assets/imgs/gallery/album-BillyAndGagi/thumb-album/image' +
        i +
        '-thumb.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };

      this._album.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this._album, index);
    console.log('foi');
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
  ngOnInit(): void {}
}
