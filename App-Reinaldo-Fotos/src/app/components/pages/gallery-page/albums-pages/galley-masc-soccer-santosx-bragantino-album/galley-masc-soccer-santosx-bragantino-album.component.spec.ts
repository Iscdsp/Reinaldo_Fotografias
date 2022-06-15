import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleyMascSoccerSantosxBragantinoAlbumComponent } from './galley-masc-soccer-santosx-bragantino-album.component';

describe('GalleyMascSoccerSantosxBragantinoAlbumComponent', () => {
  let component: GalleyMascSoccerSantosxBragantinoAlbumComponent;
  let fixture: ComponentFixture<GalleyMascSoccerSantosxBragantinoAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleyMascSoccerSantosxBragantinoAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleyMascSoccerSantosxBragantinoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
