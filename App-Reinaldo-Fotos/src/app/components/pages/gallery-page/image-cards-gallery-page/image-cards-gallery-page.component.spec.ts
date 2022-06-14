import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardsGalleryPageComponent } from './image-cards-gallery-page.component';

describe('ImageCardsGalleryPageComponent', () => {
  let component: ImageCardsGalleryPageComponent;
  let fixture: ComponentFixture<ImageCardsGalleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCardsGalleryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardsGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
