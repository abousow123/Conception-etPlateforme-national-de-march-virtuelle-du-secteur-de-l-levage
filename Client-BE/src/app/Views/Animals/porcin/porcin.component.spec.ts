import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcinComponent } from './porcin.component';

describe('PorcinComponent', () => {
  let component: PorcinComponent;
  let fixture: ComponentFixture<PorcinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
