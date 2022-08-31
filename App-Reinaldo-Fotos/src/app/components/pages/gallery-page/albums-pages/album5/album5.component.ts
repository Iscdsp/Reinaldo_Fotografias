import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-album5',
  templateUrl: './album5.component.html',
  styleUrls: ['./album5.component.css'],
})
export class Album5Component implements OnInit {
  _album: Array<any> = [];

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 10; i++) {
      const src =
        '../../../../../../assets/imgs/gallery/album5/image' + i + '.jpg';
      const caption = '';
      const thumb =
        '../../../../../../assets/imgs/gallery/album5/thumb-album/thumb-image' +
        i +
        '.jpg';
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
