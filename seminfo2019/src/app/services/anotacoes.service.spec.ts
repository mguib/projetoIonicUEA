import { TestBed } from '@angular/core/testing';

import { AnotacoesService } from './anotacoes.service';

describe('AnotacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotacoesService = TestBed.get(AnotacoesService);
    expect(service).toBeTruthy();
  });
});
