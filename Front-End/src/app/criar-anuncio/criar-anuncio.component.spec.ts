import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAnuncioComponent } from './criar-anuncio.component';

describe('CriarAnuncioComponent', () => {
  let component: CriarAnuncioComponent;
  let fixture: ComponentFixture<CriarAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
