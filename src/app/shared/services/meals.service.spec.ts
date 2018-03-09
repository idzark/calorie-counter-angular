import { TestBed, inject } from '@angular/core/testing';

import { MealsService } from './meals.service';

describe('MealsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealsService]
    });
  });

  it('should be created', inject([MealsService], (service: MealsService) => {
    expect(service).toBeTruthy();
  }));
});
