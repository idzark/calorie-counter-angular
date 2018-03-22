class FoodValues {
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
}

export class Total {
  breakfast: FoodValues;
  lunch: FoodValues;
  dinner: FoodValues;
  snacks: FoodValues;
  sum: FoodValues;
}
