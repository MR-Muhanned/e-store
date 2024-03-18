import { Product } from "./Product";
import { User } from "./User";

export interface Review {
    ReviewID: number;
    products: Product[]; // مفتاح خارجي يشير إلى المنتج
    Rating: number;
    users: User[]; // مفتاح خارجي يشير إلى المستخدم
}
