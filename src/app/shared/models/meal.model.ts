import { Product } from './product.model';

export class Meal {
  name: string;
  ingredients: Product[];
  weight: number;
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
  imageUrl: string;
  category: string;
}
