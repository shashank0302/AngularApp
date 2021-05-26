import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDproductComponent } from './crudproduct.component';

describe('CRUDproductComponent', () => {
  let component: CRUDproductComponent;
  let fixture: ComponentFixture<CRUDproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
