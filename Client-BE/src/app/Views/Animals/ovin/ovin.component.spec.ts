import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvinComponent } from './ovin.component';

describe('OvinComponent', () => {
  let component: OvinComponent;
  let fixture: ComponentFixture<OvinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
