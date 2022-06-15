import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleyFemSoccerSantosxCorinthiansAlbumComponent } from './galley-fem-soccer-santosx-corinthians-album.component';

describe('GalleyFemSoccerSantosxCorinthiansAlbumComponent', () => {
  let component: GalleyFemSoccerSantosxCorinthiansAlbumComponent;
  let fixture: ComponentFixture<GalleyFemSoccerSantosxCorinthiansAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleyFemSoccerSantosxCorinthiansAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleyFemSoccerSantosxCorinthiansAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
