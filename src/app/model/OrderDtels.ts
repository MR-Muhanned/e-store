import { Order } from "./Order";
import { Product } from "./Product";

// OrderDtels.ts
export interface OrderDtels {
       Id: number;
       ProductId: number;
       Product: Product;
       OrderId: number;
       Order: Order;
       TotalPrice: number;
       
   }