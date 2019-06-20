import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesPagamamentoComponent } from './opcoes-pagamamento.component';

describe('OpcoesPagamamentoComponent', () => {
  let component: OpcoesPagamamentoComponent;
  let fixture: ComponentFixture<OpcoesPagamamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoesPagamamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoesPagamamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
