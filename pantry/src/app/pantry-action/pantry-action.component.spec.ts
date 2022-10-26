import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryActionComponent } from './pantry-action.component';

describe('PantryActionComponent', () => {
  let component: PantryActionComponent;
  let fixture: ComponentFixture<PantryActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantryActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
