import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaninComponent } from './canin.component';

describe('CaninComponent', () => {
  let component: CaninComponent;
  let fixture: ComponentFixture<CaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
