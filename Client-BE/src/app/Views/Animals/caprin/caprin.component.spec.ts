import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaprinComponent } from './caprin.component';

describe('CaprinComponent', () => {
  let component: CaprinComponent;
  let fixture: ComponentFixture<CaprinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaprinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaprinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
