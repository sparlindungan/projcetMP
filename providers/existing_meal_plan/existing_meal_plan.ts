import { Injectable } from '@angular/core';

import { MealPlan } from '../../models/meal_plan.model';

@Injectable()
export class ExistingMealPlanProvider {
  existing_meal_plans: MealPlan[] = [];
  
  
  addExisitingMealPlan(emp: MealPlan) {
    
    this.existing_meal_plans.push(emp);
  }
  
  getExistingMealPlans() {
    return this.existing_meal_plans;
  }


  constructor() {
    console.log('Hello UserProvider Provider');
  }

  // fillingVal() {
  //   let emp:MealPlan = new MealPlan;
  //   emp.foodName = "burges";
  //   emp.foodDesc = "delicious";
  //   emp.eventAddrs = "131 north avenue";
  //   emp.eventDate = "05/10";
  //   emp.eventTime = "12/10";
  //   emp.eventDay = "PM";
  //   emp.partCount = 2;
  //   emp.rollChef = true;
  //   emp.rollCleaner = true;
  //   emp.rollShopper = false;
  //   emp.rollPayer = false;
  //   emp.rollEater = false;
  //   emp.groceryList= ["tomatoes","orange","buns"];
  //   emp.tagList= ["healthy", "vegan"];
  //   emp.picSource = " ";
  //   emp.ownerName = "Glenn Lucas";
  //   this.addExisitingMealPlan(emp);
  // }



  

  

}
