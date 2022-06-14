import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentationTextComponent } from './apresentation-text.component';

describe('ApresentationTextComponent', () => {
  let component: ApresentationTextComponent;
  let fixture: ComponentFixture<ApresentationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentationTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
