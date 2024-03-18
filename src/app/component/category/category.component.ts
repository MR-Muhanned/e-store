// category.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/servess/category.service';
import { Category } from 'src/app/model/category';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { Product } from 'src/app/model/Product';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  
  id!: any;
  selectedCategory: Category | undefined; // إضافة متغير لتخزين تفاصيل الفئة المحددة
  products: Product[] = [];
  filteredCategories: string[] = [];
  keyword: string = '';
  categories: Category[] = [];

  constructor(private route: ActivatedRoute,private categoryService: CategoryService) {
 
    
   }

   ngOnInit(): void { 
    
    this.getCategories();

    
  }
   
  getCategories() {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response;
        console.log('تم الحصول على الأصناف بنجاح:', this.categories);
      },
      (error) => {
        console.error('حدث خطأ أثناء الحصول على الأصناف:', error);
      }
    );
  }


    filterCategories(event:any) {
      let value=event.target.value;
      this.getprodactaaa(value)
    }
  
    getprodactaaa(keyword:string) {
      this.categoryService.getCategoriespr(keyword).subscribe((res:any)=>{
        this.products =res
      })
    }
    
    
}
  

