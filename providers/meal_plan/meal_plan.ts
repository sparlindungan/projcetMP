import { Injectable } from '@angular/core';

import { MealPlan } from '../../models/meal_plan.model';

@Injectable()
export class MealPlanProvider {
  meal_plans: MealPlan[] = [];
  
  
  addMealPlan(mp: MealPlan) {
    this.meal_plans.push(mp);
  }
  
  getMealPlans() {
    return this.meal_plans;
  }


  constructor() {
    console.log('Hello UserProvider Provider');
  }

}
