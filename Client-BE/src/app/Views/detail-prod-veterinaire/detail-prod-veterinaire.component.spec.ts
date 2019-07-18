import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProdVeterinaireComponent } from './detail-prod-veterinaire.component';

describe('DetailProdVeterinaireComponent', () => {
  let component: DetailProdVeterinaireComponent;
  let fixture: ComponentFixture<DetailProdVeterinaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProdVeterinaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProdVeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
