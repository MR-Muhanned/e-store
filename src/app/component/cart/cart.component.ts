import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from 'src/app/servess/cart.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  modalRef?: BsModalRef
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService , private modalService: BsModalService ,) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

}