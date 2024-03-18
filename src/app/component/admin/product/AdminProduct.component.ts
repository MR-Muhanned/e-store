import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { Category } from 'src/app/model/category';
import { CartService } from 'src/app/servess/cart.service';
import { ProductService } from 'src/app/servess/product.service';



@Component({
  selector: 'app-admin-product',
  templateUrl: './AdminProductComponent.html',
  
  styleUrls: ['./AdminProductComponent.css']
})
export class AdminProductComponent implements OnInit {
  modalRef?: BsModalRef
  @Output() item = new EventEmitter();
  @Input() category!: Category[];
  products: Product[] = [];
  searchTitle: string = '';
  searchKey: string = '';

 

  constructor(private productService: ProductService,private modalService: BsModalService ) { }

  ngOnInit(): void {
    this.fetchProducts();
    
  }

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

  
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
 

  editProduct(product: Product): void {
    // في هذا المكان، قم بفتح نموذج أو أي إجراء تحتاجه لتعديل المنتج
    console.log('Editing product:', product);
  }

  deleteProduct(product: Product): void {
    const confirmDelete = confirm('هل أنت متأكد من حذف هذا المنتج؟');
    if (confirmDelete) {
      this.productService.deleteProduct(product.id).subscribe(
        () => {
          console.log('Product deleted successfully');
          alert('تم حذف المنتج بنجاح');

          // Do any additional handling as needed
          this.fetchProducts(); // Refresh the product list after deleting a product
        },
        (error) => {
          console.error('Error deleting product:', error);
          alert('حدث خطأ أثناء حذف المنتج');
          // Handle the error appropriately, e.g., display an error message to the user
        }
      );
    }
  }

  resetSearch(): void {
    // Reset the product list when clearing the search
    this.fetchProducts();
    this.searchTitle = '';
  }

  search(): void {
    // Execute the search using the title
    const filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchTitle.toLowerCase())
    );

    // Update the array used in product display based on the results
    this.products = filteredProducts;

    // Log the search results
    console.log('Search Results:', filteredProducts);
  }
}
