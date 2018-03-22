import { TestBed, inject } from '@angular/core/testing';

import { FoodLogService } from './food-log.service';

describe('FoodLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodLogService]
    });
  });

  it('should be created', inject([FoodLogService], (service: FoodLogService) => {
    expect(service).toBeTruthy();
  }));
});
