import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquinComponent } from './equin.component';

describe('EquinComponent', () => {
  let component: EquinComponent;
  let fixture: ComponentFixture<EquinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
