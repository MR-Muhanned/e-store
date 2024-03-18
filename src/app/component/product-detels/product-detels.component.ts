import {  OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetelsService } from 'src/app/servess/product-detels.service';
import { productDetels } from 'src/app/model/productDetels';
import { CartService } from 'src/app/servess/cart.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListImagService } from 'src/app/servess/list-imag.service';
import { VisaComponent } from '../visa/visa.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-detels',
  templateUrl: './product-detels.component.html',
  styleUrls: ['./product-detels.component.css']
})
export class ProductDetelsComponent implements OnInit {
  x = 5;
  y = 2;
  modalRef?: BsModalRef
  id!: any;
  productDetails: productDetels | undefined; // قم بتحديد نوع البيانات الصحيحة
  
  constructor(private route: ActivatedRoute, 
              private productDetelsService: ProductDetelsService ,
               private cartService: CartService , 
               private modalService: BsModalService ,
               private ListImagServic: ListImagService,
               
               ) {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  addToCart(product: any): void {
    console.log('Adding to cart:', product);
    this.cartService.addtoCart(product);
  }
  ngOnInit() {
    // استخدام قيمة this.id في طلب الحصول على تفاصيل المنتج
    this.productDetelsService.getproductById(this.id).subscribe(
      (data: any) => {
        this.productDetails = data;
        console.log(this.productDetails);
      },
      error => {
        console.error('Error fetching product details', error);
      }
    );



    this.productDetelsService.getimagID(this.id).subscribe(
      (data: any) => {
        this.productDetails = data;
        console.log(this.productDetails);
      },
      error => {
        console.error('Error fetching product details', error);
      }
    );

  }
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
