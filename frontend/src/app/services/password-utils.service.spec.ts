import { TestBed, inject } from '@angular/core/testing';

import { PasswordUtilsService } from './password-utils.service';

describe('PasswordUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordUtilsService]
    });
  });

  it('should be created', inject([PasswordUtilsService], (service: PasswordUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
