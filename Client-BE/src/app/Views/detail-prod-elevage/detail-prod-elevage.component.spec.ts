import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProdElevageComponent } from './detail-prod-elevage.component';

describe('DetailProdElevageComponent', () => {
  let component: DetailProdElevageComponent;
  let fixture: ComponentFixture<DetailProdElevageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProdElevageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProdElevageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
