import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioAngComponent } from './calendario-ang.component';

describe('CalendarioAngComponent', () => {
  let component: CalendarioAngComponent;
  let fixture: ComponentFixture<CalendarioAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
