import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeActionComponent } from './recipe-action.component';

describe('RecipeActionComponent', () => {
  let component: RecipeActionComponent;
  let fixture: ComponentFixture<RecipeActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
