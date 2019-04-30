import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselOfertasDeCreditoComponent } from './carrossel-ofertas-de-credito.component';

describe('CarrosselOfertasDeCreditoComponent', () => {
  let component: CarrosselOfertasDeCreditoComponent;
  let fixture: ComponentFixture<CarrosselOfertasDeCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselOfertasDeCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselOfertasDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
