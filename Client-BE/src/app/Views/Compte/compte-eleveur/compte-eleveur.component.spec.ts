import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteEleveurComponent } from './compte-eleveur.component';

describe('CompteEleveurComponent', () => {
  let component: CompteEleveurComponent;
  let fixture: ComponentFixture<CompteEleveurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteEleveurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteEleveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
