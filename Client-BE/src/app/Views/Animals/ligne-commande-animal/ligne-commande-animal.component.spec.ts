import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCommandeAnimalComponent } from './ligne-commande-animal.component';

describe('LigneCommandeAnimalComponent', () => {
  let component: LigneCommandeAnimalComponent;
  let fixture: ComponentFixture<LigneCommandeAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneCommandeAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneCommandeAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
