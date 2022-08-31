import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-album10',
  templateUrl: './album10.component.html',
  styleUrls: ['./album10.component.css'],
})
export class Album10Component implements OnInit {
  _album: Array<any> = [];

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 10; i++) {
      const src =
        '../../../../../../assets/imgs/gallery/album10/image' + i + '.jpg';
      const caption = '';
      const thumb =
        '../../../../../../assets/imgs/gallery/album10/thumb-album/thumb-image' +
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
