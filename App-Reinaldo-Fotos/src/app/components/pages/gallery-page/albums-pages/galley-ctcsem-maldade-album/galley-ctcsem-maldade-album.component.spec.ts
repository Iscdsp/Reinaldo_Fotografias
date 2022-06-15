import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleyCTCSemMaldadeAlbumComponent } from './galley-ctcsem-maldade-album.component';

describe('GalleyCTCSemMaldadeAlbumComponent', () => {
  let component: GalleyCTCSemMaldadeAlbumComponent;
  let fixture: ComponentFixture<GalleyCTCSemMaldadeAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleyCTCSemMaldadeAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleyCTCSemMaldadeAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
