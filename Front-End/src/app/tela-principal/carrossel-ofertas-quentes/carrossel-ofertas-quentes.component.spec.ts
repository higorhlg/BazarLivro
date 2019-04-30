import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselOfertasQuentesComponent } from './carrossel-ofertas-quentes.component';

describe('CarrosselOfertasQuentesComponent', () => {
  let component: CarrosselOfertasQuentesComponent;
  let fixture: ComponentFixture<CarrosselOfertasQuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselOfertasQuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselOfertasQuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
