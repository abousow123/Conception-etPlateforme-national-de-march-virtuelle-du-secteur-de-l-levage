import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProdVeterinaireComponent } from './new-prod-veterinaire.component';

describe('NewProdVeterinaireComponent', () => {
  let component: NewProdVeterinaireComponent;
  let fixture: ComponentFixture<NewProdVeterinaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProdVeterinaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProdVeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
