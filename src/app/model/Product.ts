import { Cart } from "./Cart";

import { OrderDtels } from "./OrderDtels";

import { Category } from "./category";
import { Image } from "./Image";
import { Review } from "./Review";

// Product.ts
export interface Product {
    id: number;
    title: string;
    category?: Category;
    price: number;
    image: string;
    description: string;
       
       
   }
   