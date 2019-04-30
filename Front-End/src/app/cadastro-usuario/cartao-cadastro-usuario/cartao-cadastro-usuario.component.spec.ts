import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoCadastroUsuarioComponent } from './cartao-cadastro-usuario.component';

describe('CartaoCadastroUsuarioComponent', () => {
  let component: CartaoCadastroUsuarioComponent;
  let fixture: ComponentFixture<CartaoCadastroUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoCadastroUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
