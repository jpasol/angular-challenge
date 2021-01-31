import { TestBed } from '@angular/core/testing';

import { SpeechesService } from './speeches.service';

describe('SpeechesService', () => {
  let service: SpeechesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
