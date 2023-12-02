import { TestBed } from '@angular/core/testing';

import { ToutUtilisateurService } from './tout-utilisateur.service';

describe('ToutUtilisateurService', () => {
  let service: ToutUtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToutUtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
