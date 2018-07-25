import { TestBed, inject } from '@angular/core/testing';

import { EditWindowService } from './edit-window.service';

describe('EditWindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditWindowService]
    });
  });

  it('should be created', inject([EditWindowService], (service: EditWindowService) => {
    expect(service).toBeTruthy();
  }));
});
