import { Product } from "./Product";

export interface Category {
       id: number;
       nane : string;
       products?: Product[];
   }