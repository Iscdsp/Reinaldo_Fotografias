import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBillyAndGabiAlbumComponent } from './gallery-billy-and-gabi-album.component';

describe('GalleryBillyAndGabiAlbumComponent', () => {
  let component: GalleryBillyAndGabiAlbumComponent;
  let fixture: ComponentFixture<GalleryBillyAndGabiAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBillyAndGabiAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryBillyAndGabiAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
