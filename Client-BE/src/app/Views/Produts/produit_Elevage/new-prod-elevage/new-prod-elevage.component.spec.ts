import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProdElevageComponent } from './new-prod-elevage.component';

describe('NewProdElevageComponent', () => {
  let component: NewProdElevageComponent;
  let fixture: ComponentFixture<NewProdElevageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProdElevageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProdElevageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
