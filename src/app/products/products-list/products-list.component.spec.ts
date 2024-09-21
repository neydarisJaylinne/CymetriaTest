import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

<<<<<<< HEAD
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent]
    });
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListComponent]
    })
    .compileComponents();

>>>>>>> eecf7b52b4a2d174365bda98b104d55a042e91a4
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
