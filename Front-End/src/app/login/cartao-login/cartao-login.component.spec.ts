import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoLoginComponent } from './cartao-login.component';

describe('CartaoLoginComponent', () => {
  let component: CartaoLoginComponent;
  let fixture: ComponentFixture<CartaoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
