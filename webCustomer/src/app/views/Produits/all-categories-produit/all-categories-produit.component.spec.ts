import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoriesProduitComponent } from './all-categories-produit.component';

describe('AllCategoriesProduitComponent', () => {
  let component: AllCategoriesProduitComponent;
  let fixture: ComponentFixture<AllCategoriesProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategoriesProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoriesProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
