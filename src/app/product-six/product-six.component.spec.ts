import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSixComponent } from './product-six.component';

describe('ProductSixComponent', () => {
  let component: ProductSixComponent;
  let fixture: ComponentFixture<ProductSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
