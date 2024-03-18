import { OrderDtels } from "./OrderDtels";
import { User } from "./User";

// Order.ts
export interface Order {
       OrderID: number;
       UserID: number;
       User: User;
       TotalAmount: number;
       OrderDtels: OrderDtels[];
       OrderDate: Date;
   }