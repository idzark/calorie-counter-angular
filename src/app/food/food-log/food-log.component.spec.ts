import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLogComponent } from './food-log.component';

describe('FoodLogComponent', () => {
  let component: FoodLogComponent;
  let fixture: ComponentFixture<FoodLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
