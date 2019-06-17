import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirAnuncioComponent } from './exibir-anuncio.component';

describe('ExibirAnuncioComponent', () => {
  let component: ExibirAnuncioComponent;
  let fixture: ComponentFixture<ExibirAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
