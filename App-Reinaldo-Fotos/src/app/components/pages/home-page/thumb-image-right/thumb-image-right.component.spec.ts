import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbImageRightComponent } from './thumb-image-right.component';

describe('ThumbImageRightComponent', () => {
  let component: ThumbImageRightComponent;
  let fixture: ComponentFixture<ThumbImageRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbImageRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbImageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
