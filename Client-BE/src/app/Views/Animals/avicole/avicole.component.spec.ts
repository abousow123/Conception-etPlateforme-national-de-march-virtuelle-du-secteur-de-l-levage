import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvicoleComponent } from './avicole.component';

describe('AvicoleComponent', () => {
  let component: AvicoleComponent;
  let fixture: ComponentFixture<AvicoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvicoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvicoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
