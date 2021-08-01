import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownAreaComponent } from './countdown-area.component';

describe('CountdownAreaComponent', () => {
  let component: CountdownAreaComponent;
  let fixture: ComponentFixture<CountdownAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
