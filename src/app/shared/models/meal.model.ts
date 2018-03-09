import { Product } from './product.model';

export class Meal {
  name: string;
  ingredients: Product[];
  weightTotal: number;
  proteinTotal: number;
  carbsTotal: number;
  fatsTotal: number;
  caloriesTotal: number;
  imageUrl: string;
}
