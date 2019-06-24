import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirBoletoComponent } from './emitir-boleto.component';

describe('EmitirBoletoComponent', () => {
  let component: EmitirBoletoComponent;
  let fixture: ComponentFixture<EmitirBoletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitirBoletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitirBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
