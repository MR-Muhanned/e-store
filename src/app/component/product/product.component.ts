import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/servess/product.service';
import { StarRatingPipe } from 'src/app/pip/star-rating.pipe';
import { Category } from 'src/app/model/category';
import { CartService } from 'src/app/servess/cart.service';
import { ReviewService } from 'src/app/servess/review.service';
import { Review } from 'src/app/model/Review';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() item = new EventEmitter();
  @Input() category!: Category;
  products: Product[] = [];
  searchTitle: string = '';
  searchKey: string = "";
  reviews: Review[] = [];
  productId: number = 1;
  

  constructor(private productService: ProductService, private cartService: CartService ,private reviewService : ReviewService) { }


  ngOnInit(): void {
    this.getReviews();

    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addToCart(product: any): void {
    console.log('Adding to cart:', product);
    this.cartService.addtoCart(product);
  }

  resetSearch(): void {
    // Reset the product list when clearing the search
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
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
  getReviews() {
    this.reviewService.getReviewsByProductId(this.productId).subscribe(
      (response: Review[]) => { // تحديد نوع الاستجابة كـ Review[]
        this.reviews = response;
        console.log('تم الحصول على المراجعات بنجاح:', this.reviews);
      },
      (error: any) => { // تحديد نوع الخطأ كـ any
        console.error('حدث خطأ أثناء الحصول على المراجعات:', error);
      }
    );
  }
}
