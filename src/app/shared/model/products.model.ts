import { Category } from './category.model';
export class Products{
    productId: number;
    productName: string;
    image: string;
    amount: number;
    description: string;
    category: Category;
}