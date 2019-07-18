import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteDistributeurComponent } from './compte-distributeur.component';

describe('CompteDistributeurComponent', () => {
  let component: CompteDistributeurComponent;
  let fixture: ComponentFixture<CompteDistributeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteDistributeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteDistributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
