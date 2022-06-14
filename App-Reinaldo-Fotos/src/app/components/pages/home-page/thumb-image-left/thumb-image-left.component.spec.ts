import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbImageLeftComponent } from './thumb-image-left.component';

describe('ThumbImageLeftComponent', () => {
  let component: ThumbImageLeftComponent;
  let fixture: ComponentFixture<ThumbImageLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbImageLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbImageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
