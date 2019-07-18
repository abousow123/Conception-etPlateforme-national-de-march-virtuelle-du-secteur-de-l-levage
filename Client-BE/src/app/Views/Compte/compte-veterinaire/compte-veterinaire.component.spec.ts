import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteVeterinaireComponent } from './compte-veterinaire.component';

describe('CompteVeterinaireComponent', () => {
  let component: CompteVeterinaireComponent;
  let fixture: ComponentFixture<CompteVeterinaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteVeterinaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteVeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
