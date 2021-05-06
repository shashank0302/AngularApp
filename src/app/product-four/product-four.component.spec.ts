import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFourComponent } from './product-four.component';

describe('ProductFourComponent', () => {
  let component: ProductFourComponent;
  let fixture: ComponentFixture<ProductFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
