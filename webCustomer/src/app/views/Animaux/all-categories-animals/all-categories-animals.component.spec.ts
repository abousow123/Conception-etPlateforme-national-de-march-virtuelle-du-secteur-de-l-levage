import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoriesAnimalsComponent } from './all-categories-animals.component';

describe('AllCategoriesAnimalsComponent', () => {
  let component: AllCategoriesAnimalsComponent;
  let fixture: ComponentFixture<AllCategoriesAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategoriesAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoriesAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
