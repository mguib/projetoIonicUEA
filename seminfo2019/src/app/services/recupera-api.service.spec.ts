import { TestBed } from '@angular/core/testing';

import { RecuperaAPIService } from './recupera-api.service';

describe('RecuperaAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperaAPIService = TestBed.get(RecuperaAPIService);
    expect(service).toBeTruthy();
  });
});
