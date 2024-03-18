// في ملف visa.component.ts
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css']
})
export class VisaComponent {

  

  currentCardBackground: number = Math.floor(Math.random() * 25 + 1);
  index:any;
  n:any;
  cardName: string = "";
  cardNumber: string = "";
  cardMonth: string = "";
  cardYear: string = "";
  cardCvv: string = "";
  minCardYear: number = new Date().getFullYear();
  amexCardMask: string = "#### ###### #####";
  otherCardMask: string = "#### #### #### ####";
  cardNumberTemp: string = "";
  isCardFlipped: boolean = false;
  focusElementStyle: any = null;
  isInputFocused: boolean = false;

  constructor( private modalService: BsModalService) {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber")?.focus(); 
   
  }

  get getCardType(): string {
    let number = this.cardNumber;
    let re = /^4/;
    if (number.match(re) != null) return "visa";

    re = /^(34|37)/;
    if (number.match(re) != null) return "amex";

    re = /^5[1-5]/;
    if (number.match(re) != null) return "mastercard";

    re = /^6011/;
    if (number.match(re) != null) return "discover";

    re = /^9792/;
    if (number.match(re) != null) return 'troy';

    return "visa"; // default type
  }

  get generateCardNumberMask(): string {
    return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
  }

  get minCardMonth(): number {
    if (this.cardYear === this.minCardYear.toString()) return new Date().getMonth() + 1;
    return 1;
  }

  flipCard(status: boolean): void {
    this.isCardFlipped = status;
  }

  focusInput(e: any): void {
    this.isInputFocused = true;
    this.updateFocusElementStyle(e.target);
  }

  blurInput(): void {
    setTimeout(() => {
      if (!this.isInputFocused) {
        this.focusElementStyle = null;
      }
    }, 300);
    this.isInputFocused = false;
  }

  private updateFocusElementStyle(target: any): void {
    this.focusElementStyle = {
      width: `${target.offsetWidth}px`,
      height: `${target.offsetHeight}px`,
      transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
    };
  }
}
