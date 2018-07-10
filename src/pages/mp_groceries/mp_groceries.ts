import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MealPlanNewPage } from '../mp_new/mp_new';

import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { UserProvider } from '../../../providers/user/user';
import { ExistingMealPlanProvider } from '../../../providers/existing_meal_plan/existing_meal_plan';
import { MealPlan } from '../../../models/meal_plan.model';
import { GroceryItem } from '../../../models/grocery_item.model';
import { MealPlanJoinPage } from '../mp_join/mp_join';
import { MealPlanHomePage } from '../mp_home/mp_home';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { ContributePage } from '../contribute/contribute';

@Component({
  selector: 'mp_groceries',
  templateUrl: 'mp_groceries.html'
})
export class MealPlanGroceryPage {

  public all: boolean = false;
  public groceryList:GroceryItem[];
  public otherGroceries:GroceryItem[];
  public finalMaps = [];
  

  existing_meal_plan: MealPlan = null;
  constructor(public navParams: NavParams,public navCtrl: NavController, public restService: RestServiceProvider, public userService: UserProvider, public mealPlanService: MealPlanProvider, public existingMealPlanService: ExistingMealPlanProvider) {
    // this.meal_plans = mealPlanService.getMealPlans();
    // this.existing_meal_plans = existingMealPlanService.getExistingMealPlans();
    this.existing_meal_plan = navParams.get('existing_meal_plan');
    this.groceryList = this.existing_meal_plan.groceryList;

    let neededGroceries = [];
    let notNeededGroceries = [];
    for (let item of this.groceryList) {
      if (!item.beingBrought || item.username === undefined || item.username === null) {
        neededGroceries.push(item);
      } else {
        notNeededGroceries.push(item);
      }
    }

    this.groceryList = neededGroceries;
    this.otherGroceries = notNeededGroceries;
  }



  public dictionary = { 
    milk: false,
    eggs: false
 }
 
  changing() {
    if (this.all == false) {
      for (const key of Object.keys(this.dictionary)) {
        this.dictionary[key] = false;
        console.log(`${this.dictionary}`)
      
     }
    } else if (this.all == true) {
      for (const key of Object.keys(this.dictionary)) {
        this.dictionary[key] = true;
        console.log(`${this.dictionary}`)
     }
    }
  }

  editing() {
    for (const key of Object.keys(this.dictionary)) {
      this.dictionary[key] = false;
    }
    this.navCtrl.push(ContributePage);
  }

  continue(){
    let finalGroceries: GroceryItem[] = [];
    for (let item of this.groceryList) {
      if (item.beingBrought) {
        item.username = this.userService.getCurrentUser();
      }
      finalGroceries.push(item);
    }

    this.otherGroceries.forEach(element => {
      finalGroceries.push(element);
    });

    this.restService.putMealPlan(this.existing_meal_plan);
    this.navCtrl.push(MealPlanHomePage,{'existing_meal_plan':this.existing_meal_plan});
    this.mealPlanService.addMealPlan(this.existing_meal_plan);
  }



}
