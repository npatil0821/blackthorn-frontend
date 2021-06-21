import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountButtonComponent } from './amount-button.component';

describe('AmountButtonComponent', () => {
  let component: AmountButtonComponent;
  let fixture: ComponentFixture<AmountButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
