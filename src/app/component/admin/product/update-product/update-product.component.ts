import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/Product';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/servess/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

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



  updateProduct(): void {
    const updatedProduct: Product = { ...this.newProductForm };
  
    this.productService.updateProduct(updatedProduct).subscribe(
      (updatedProduct) => {
        console.log('Product updated successfully:', updatedProduct);
        alert('تم تحديث المنتج بنجاح');
        this.fetchProducts(); // Refresh the product list after updating a product
        this.modalRef?.hide(); // Close the update modal after successful update
      },
      (error) => {
        console.error('Error updating product:', error);
        alert('حدث خطأ أثناء تحديث المنتج');
      }
    );
  }
  

  editProduct(product: Product): void {
    // تعيين المنتج المحدد
    this.selectedProduct = { ...product };

    // فتح نموذج التعديل باستخدام this.modalService
    const initialState = {
      product: this.selectedProduct,
    };

   

    // يمكنك استمرار تنظيم الكود هنا بحسب الاحتياجات
  }
}
