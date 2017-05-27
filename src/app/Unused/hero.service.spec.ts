import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from '../post.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
