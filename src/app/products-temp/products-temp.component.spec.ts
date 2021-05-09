import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTempComponent } from './products-temp.component';

describe('ProductsTempComponent', () => {
  let component: ProductsTempComponent;
  let fixture: ComponentFixture<ProductsTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
