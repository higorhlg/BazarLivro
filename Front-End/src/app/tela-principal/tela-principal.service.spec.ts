import { TestBed } from '@angular/core/testing';

import { TelaPrincipalService } from './tela-principal.service';

describe('TelaPrincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelaPrincipalService = TestBed.get(TelaPrincipalService);
    expect(service).toBeTruthy();
  });
});
