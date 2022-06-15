import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleyStudioCasa67AlbumComponent } from './galley-studio-casa67-album.component';

describe('GalleyStudioCasa67AlbumComponent', () => {
  let component: GalleyStudioCasa67AlbumComponent;
  let fixture: ComponentFixture<GalleyStudioCasa67AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleyStudioCasa67AlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleyStudioCasa67AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
