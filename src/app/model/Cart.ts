import { Product } from "./Product";
import { User } from "./User";
export interface Cart {
    items: Array<CartItem>;

  }
  
export interface CartItem {
  id: number;
  userId: number;
  date: Date;
   
    products: Product;
    Quantity: number;
    ProductID: number;
  

      product: string;
      name: string;
      price: number;
      quantity: number;
    
    
}