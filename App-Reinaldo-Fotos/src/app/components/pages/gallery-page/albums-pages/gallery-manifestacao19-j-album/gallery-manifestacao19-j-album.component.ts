import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-gallery-manifestacao19-j-album',
  templateUrl: './gallery-manifestacao19-j-album.component.html',
  styleUrls: ['./gallery-manifestacao19-j-album.component.css'],
})
export class GalleryManifestacao19JAlbumComponent implements OnInit {
  _album: Array<any> = [];

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 10; i++) {
      const src =
        '../../../../../../assets/imgs/gallery/album-manifestacao-19J/image' +
        i +
        '.jpg';
      const caption = '';
      const thumb =
        '../../../../../../assets/imgs/gallery/album-manifestacao-19J/thumb-album/image' +
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
