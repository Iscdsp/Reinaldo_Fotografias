import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleGalleryPageComponent } from './title-gallery-page.component';

describe('TitleGalleryPageComponent', () => {
  let component: TitleGalleryPageComponent;
  let fixture: ComponentFixture<TitleGalleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleGalleryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
