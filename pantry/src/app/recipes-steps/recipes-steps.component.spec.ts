import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesStepsComponent } from './recipes-steps.component';

describe('RecipesStepsComponent', () => {
  let component: RecipesStepsComponent;
  let fixture: ComponentFixture<RecipesStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
