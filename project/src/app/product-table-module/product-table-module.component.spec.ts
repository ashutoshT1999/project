import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableModuleComponent } from './product-table-module.component';

describe('ProductTableModuleComponent', () => {
  let component: ProductTableModuleComponent;
  let fixture: ComponentFixture<ProductTableModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTableModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
