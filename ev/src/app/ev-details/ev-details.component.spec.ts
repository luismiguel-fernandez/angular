import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvDetailsComponent } from './ev-details.component';

describe('EvDetailsComponent', () => {
  let component: EvDetailsComponent;
  let fixture: ComponentFixture<EvDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
