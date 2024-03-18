import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/Product';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/servess/product.service';

@Component({
  selector: 'addProduct',
  templateUrl: './addproduct.html',
  styleUrls: ['./addproduct.css']
})
export class TelltaleOnproductsComponent {

  @Input() category!: Category[];
  products: Product[] = [];
  selectedProduct: Product | null = null; // المنتج المحدد للتعديل أو الحذف
  modalRef: BsModalRef | null = null;

  newProductForm: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    image: '',
    category: { id: 1, nane: 'electronic' }
  };

  constructor(private productService: ProductService, private modalService: BsModalService) { }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  addProduct(): void {
    const newProduct: Product = { ...this.newProductForm };

    this.productService.addProduct(newProduct).subscribe(
      (addedProduct) => {
        console.log('Product added successfully:', addedProduct);
        alert("successfully")

        // Do any additional handling as needed
        this.fetchProducts(); // Refresh the product list after adding a new product
      },
      (error) => {
        console.error('Error adding product:', error);
        alert("Error")
        // Handle the error appropriately, e.g., display an error message to the user
      }
    );
  }



  
}
