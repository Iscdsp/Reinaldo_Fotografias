import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryXIXVoltaStoAmaroAlbumComponent } from './gallery-xixvolta-sto-amaro-album.component';

describe('GalleryXIXVoltaStoAmaroAlbumComponent', () => {
  let component: GalleryXIXVoltaStoAmaroAlbumComponent;
  let fixture: ComponentFixture<GalleryXIXVoltaStoAmaroAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryXIXVoltaStoAmaroAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryXIXVoltaStoAmaroAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
